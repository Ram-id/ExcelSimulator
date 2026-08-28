'use client';

import React, { useState, useRef, useEffect } from 'react';
import { TableColumn, TableRow, EvaluationResult } from '@/types/simulator';
import { evaluateFormulaValue, expandCellRange } from '@/lib/formulaEngine';
import { FormulaAutocomplete } from './FormulaAutocomplete';

interface InteractiveSheetProps {
  columns: TableColumn[];
  rows: TableRow[];
  targetCell?: string;
  targetRowNumber?: number;
  totalLabelRow?: { label: string; colSpan: number };
  cellData: Record<string, string | number>;
  activeCell: string;
  isEditing: boolean;
  editValue: string;
  result?: EvaluationResult;
  onCellSelect: (cellRef: string) => void;
  onStartEdit: (cellRef: string, initialVal?: string) => void;
  onEditChange: (value: string) => void;
  onCommitEdit: (cellRef: string, value: string) => void;
  onCancelEdit: () => void;
}

const HIGHLIGHT_COLORS = [
  'border-blue-500 bg-blue-500/10 text-blue-900',
  'border-emerald-500 bg-emerald-500/10 text-emerald-900',
  'border-purple-500 bg-purple-500/10 text-purple-900',
  'border-amber-500 bg-amber-500/10 text-amber-900',
  'border-rose-500 bg-rose-500/10 text-rose-900',
];

export const InteractiveSheet: React.FC<InteractiveSheetProps> = ({
  columns,
  rows,
  targetCell,
  targetRowNumber,
  totalLabelRow,
  cellData,
  activeCell,
  isEditing,
  editValue,
  result,
  onCellSelect,
  onStartEdit,
  onEditChange,
  onCommitEdit,
  onCancelEdit,
}) => {
  const cellInputRef = useRef<HTMLInputElement>(null);

  // Focus input on edit
  useEffect(() => {
    if (isEditing && cellInputRef.current) {
      cellInputRef.current.focus();
    }
  }, [isEditing, activeCell]);

  // Extract referenced cells from the formula currently being typed for color highlighting
  const getReferencedCellsMap = (): Record<string, string> => {
    if (!isEditing || !editValue.startsWith('=')) return {};

    const map: Record<string, string> = {};
    const matches = editValue.toUpperCase().match(/[A-Z]+\d+(:[A-Z]+\d+)?/g);
    if (!matches) return {};

    matches.forEach((token, idx) => {
      const colorClass = HIGHLIGHT_COLORS[idx % HIGHLIGHT_COLORS.length];
      if (token.includes(':')) {
        const expanded = expandCellRange(token);
        expanded.forEach((c) => {
          map[c] = colorClass;
        });
      } else {
        map[token] = colorClass;
      }
    });

    return map;
  };

  const referencedCells = getReferencedCellsMap();

  const handleCellClick = (cellRef: string) => {
    if (isEditing) {
      // If user is editing a formula and clicked a cell, insert that cell reference
      if (editValue.startsWith('=')) {
        if (/[\(,+\-*\/&:=]$/.test(editValue.trim())) {
          onEditChange(editValue + cellRef);
          return;
        }
      }
    }
    onCellSelect(cellRef);
  };

  const handleCellDoubleClick = (cellRef: string) => {
    const rawVal = cellData[cellRef] !== undefined ? String(cellData[cellRef]) : '';
    onStartEdit(cellRef, rawVal);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onCommitEdit(activeCell, editValue);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onCancelEdit();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      onCommitEdit(activeCell, editValue);
    }
  };

  const handleAutocompleteSelect = (funcName: string) => {
    onEditChange(`=${funcName}(`);
    if (cellInputRef.current) cellInputRef.current.focus();
  };

  return (
    <div className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden flex flex-col select-none">
      {/* Grid Table Container */}
      <div className="overflow-x-auto min-h-[280px]">
        <table className="w-full border-collapse text-xs font-mono">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              {/* Top-left corner */}
              <th className="w-12 py-2 px-2 border-r border-gray-300 bg-gray-200/80 text-gray-500 font-bold text-center select-none">
                #
              </th>
              {/* Column Letters & Labels */}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="py-2 px-3 border-r border-gray-300 text-gray-700 font-bold text-center min-w-[130px] bg-gray-100 select-none"
                >
                  <div className="text-[11px] text-gray-500 font-mono mb-0.5">{col.letter}</div>
                  <div className="text-xs font-semibold font-sans text-gray-800">{col.label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Standard Data Rows */}
            {rows.map((row) => (
              <tr key={row.rowNumber} className="border-b border-gray-200 hover:bg-slate-50/60 transition-colors">
                {/* Row Number Header */}
                <td className="py-2.5 px-2 border-r border-gray-300 bg-gray-100 text-gray-500 font-bold text-center select-none font-mono">
                  {row.rowNumber}
                </td>

                {/* Cells */}
                {columns.map((col) => {
                  const cellRef = `${col.letter}${row.rowNumber}`;
                  const isTarget = targetCell === cellRef;
                  const isSelected = activeCell === cellRef;
                  const isCellCurrentlyEditing = isEditing && isSelected;
                  const highlightStyle = referencedCells[cellRef];

                  // Evaluate value for display
                  const rawVal = cellData[cellRef] !== undefined ? cellData[cellRef] : row.values[col.key];
                  const displayVal =
                    rawVal !== undefined && String(rawVal).startsWith('=')
                      ? evaluateFormulaValue(rawVal, cellData)
                      : rawVal;

                  return (
                    <td
                      key={col.key}
                      onClick={() => handleCellClick(cellRef)}
                      onDoubleClick={() => handleCellDoubleClick(cellRef)}
                      className={`relative py-2 px-3 border-r border-gray-200 cursor-cell transition-all ${
                        isTarget
                          ? result?.status === 'success'
                            ? 'bg-emerald-50 font-bold text-emerald-900'
                            : 'bg-amber-50 font-bold text-amber-900 ring-2 ring-inset ring-amber-400'
                          : isSelected
                          ? 'bg-emerald-50/50'
                          : ''
                      } ${highlightStyle ? `border-2 border-dashed ${highlightStyle}` : ''}`}
                    >
                      {/* Active Cell Border & Selection Box */}
                      {isSelected && !isCellCurrentlyEditing && (
                        <div className="absolute inset-0 ring-2 ring-[#107c41] pointer-events-none z-10">
                          {/* Autofill handle dot */}
                          <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#107c41] border border-white" />
                        </div>
                      )}

                      {/* In-Cell Input Box when actively editing */}
                      {isCellCurrentlyEditing ? (
                        <div className="relative z-20">
                          <input
                            ref={cellInputRef}
                            type="text"
                            value={editValue}
                            onChange={(e) => onEditChange(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="w-full p-1 bg-white text-gray-900 font-mono text-xs border-2 border-[#107c41] rounded-xs shadow-md focus:outline-none ring-2 ring-emerald-200"
                            spellCheck={false}
                            autoComplete="off"
                          />
                          {/* Autocomplete Popup */}
                          <FormulaAutocomplete
                            query={editValue}
                            onSelect={handleAutocompleteSelect}
                          />
                        </div>
                      ) : (
                        <div className="flex items-center justify-between min-h-[20px]">
                          <span
                            className={`${
                              isTarget && result?.status === 'success'
                                ? 'text-[#107c41] font-bold text-sm'
                                : 'text-gray-900'
                            }`}
                          >
                            {displayVal !== undefined ? String(displayVal) : ''}
                          </span>

                          {isTarget && result?.status !== 'success' && (
                            <span className="text-[10px] bg-amber-200 text-amber-900 px-1 py-0.2 rounded font-sans font-semibold">
                              Target
                            </span>
                          )}
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}

            {/* Total / Target Row if defined */}
            {totalLabelRow && targetRowNumber && (
              <tr className="border-b border-gray-300 bg-gray-50/80 font-bold">
                <td className="py-2.5 px-2 border-r border-gray-300 bg-gray-100 text-gray-500 font-bold text-center select-none font-mono">
                  {targetRowNumber}
                </td>
                <td
                  colSpan={totalLabelRow.colSpan}
                  className="py-2.5 px-4 text-right border-r border-gray-200 text-gray-700 font-sans font-semibold"
                >
                  {totalLabelRow.label}
                </td>
                {targetCell && (
                  <td
                    onClick={() => handleCellClick(targetCell)}
                    onDoubleClick={() => handleCellDoubleClick(targetCell)}
                    className={`relative py-2 px-3 border-r border-gray-200 cursor-cell font-mono ${
                      result?.status === 'success'
                        ? 'bg-emerald-100 text-emerald-900 font-bold'
                        : 'bg-emerald-50/80 text-emerald-950 font-bold ring-2 ring-dashed ring-emerald-400'
                    } ${activeCell === targetCell ? 'ring-2 ring-[#107c41]' : ''}`}
                  >
                    {isEditing && activeCell === targetCell ? (
                      <div className="relative z-20">
                        <input
                          ref={cellInputRef}
                          type="text"
                          value={editValue}
                          onChange={(e) => onEditChange(e.target.value)}
                          onKeyDown={handleKeyDown}
                          className="w-full p-1 bg-white text-gray-900 font-mono text-xs border-2 border-[#107c41] rounded-xs shadow-md focus:outline-none ring-2 ring-emerald-200"
                          spellCheck={false}
                          autoComplete="off"
                        />
                        <FormulaAutocomplete
                          query={editValue}
                          onSelect={handleAutocompleteSelect}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="text-sm">
                          {cellData[targetCell] !== undefined
                            ? evaluateFormulaValue(cellData[targetCell], cellData)
                            : '?'}
                        </span>
                        <span className="text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-mono">
                          {targetCell}
                        </span>
                      </div>
                    )}
                  </td>
                )}
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 text-xs text-gray-500 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <span>💡 <strong>Double-click</strong> sel untuk mengetik rumus langsung</span>
          <span className="hidden md:inline">•</span>
          <span className="hidden md:inline">Tekan <strong>Enter</strong> untuk eksekusi</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-gray-400">Sel Aktif:</span>
          <strong className="text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">{activeCell}</strong>
        </div>
      </div>
    </div>
  );
};
