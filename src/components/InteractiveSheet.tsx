'use client';

import React, { useRef, useEffect, useCallback } from 'react';
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
  onNavigate: (direction: 'up' | 'down' | 'left' | 'right') => void;
}

const HIGHLIGHT_COLORS = [
  'border-blue-500 bg-blue-50',
  'border-emerald-500 bg-emerald-50',
  'border-purple-500 bg-purple-50',
  'border-amber-500 bg-amber-50',
  'border-rose-500 bg-rose-50',
];

// Formula parameter hints for common functions
const FORMULA_PARAM_HINTS: Record<string, string> = {
  SUM: 'SUM(angka1, [angka2], ...)',
  AVERAGE: 'AVERAGE(angka1, [angka2], ...)',
  MAX: 'MAX(angka1, [angka2], ...)',
  MIN: 'MIN(angka1, [angka2], ...)',
  COUNT: 'COUNT(nilai1, [nilai2], ...)',
  COUNTA: 'COUNTA(nilai1, [nilai2], ...)',
  COUNTBLANK: 'COUNTBLANK(range)',
  LARGE: 'LARGE(array, k)',
  SMALL: 'SMALL(array, k)',
  IF: 'IF(kondisi, nilai_benar, nilai_salah)',
  COUNTIF: 'COUNTIF(range, kriteria)',
  SUMIF: 'SUMIF(range, kriteria, [sum_range])',
  AVERAGEIF: 'AVERAGEIF(range, kriteria, [average_range])',
  VLOOKUP: 'VLOOKUP(lookup_value, table_array, col_index, [range_lookup])',
  XLOOKUP: 'XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])',
  INDEX: 'INDEX(array, row_num, [col_num])',
  MATCH: 'MATCH(lookup_value, lookup_array, [match_type])',
  PMT: 'PMT(rate, nper, pv)',
  PROPER: 'PROPER(teks)',
  UPPER: 'UPPER(teks)',
  LOWER: 'LOWER(teks)',
  LEFT: 'LEFT(teks, [jumlah_karakter])',
  RIGHT: 'RIGHT(teks, [jumlah_karakter])',
  MID: 'MID(teks, posisi_mulai, jumlah_karakter)',
  TRIM: 'TRIM(teks)',
  LEN: 'LEN(teks)',
  CONCAT: 'CONCAT(teks1, [teks2], ...)',
};

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
  onNavigate,
}) => {
  const cellInputRef = useRef<HTMLInputElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  // Focus input on edit
  useEffect(() => {
    if (isEditing && cellInputRef.current) {
      cellInputRef.current.focus();
      // Place cursor at end
      const len = cellInputRef.current.value.length;
      cellInputRef.current.setSelectionRange(len, len);
    }
  }, [isEditing, activeCell]);

  // Get the active formula function name for parameter tooltip
  const getActiveFormulaHint = (): string | null => {
    if (!isEditing || !editValue.startsWith('=')) return null;
    const match = editValue.toUpperCase().match(/([A-Z_]+)\s*\(/);
    if (match) {
      const funcName = match[1];
      return FORMULA_PARAM_HINTS[funcName] || null;
    }
    return null;
  };

  const formulaHint = getActiveFormulaHint();

  // Extract referenced cells from the formula for color highlighting
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

  // Handle keydown on the table container (for non-editing navigation)
  const handleTableKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (isEditing) return; // Let the input handle its own keys

    // Direct typing: any printable character starts editing
    if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      onStartEdit(activeCell, e.key);
      return;
    }

    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        onNavigate('up');
        break;
      case 'ArrowDown':
        e.preventDefault();
        onNavigate('down');
        break;
      case 'ArrowLeft':
        e.preventDefault();
        onNavigate('left');
        break;
      case 'ArrowRight':
        e.preventDefault();
        onNavigate('right');
        break;
      case 'Enter':
        e.preventDefault();
        onNavigate('down');
        break;
      case 'Tab':
        e.preventDefault();
        onNavigate(e.shiftKey ? 'left' : 'right');
        break;
      case 'F2': {
        e.preventDefault();
        const rawVal = cellData[activeCell] !== undefined ? String(cellData[activeCell]) : '';
        onStartEdit(activeCell, rawVal);
        break;
      }
      case 'Delete':
      case 'Backspace':
        e.preventDefault();
        onStartEdit(activeCell, '');
        break;
    }
  }, [isEditing, activeCell, cellData, onNavigate, onStartEdit]);

  const handleCellClick = (cellRef: string) => {
    if (isEditing) {
      // If user is editing a formula and clicked a cell, insert reference
      if (editValue.startsWith('=')) {
        if (/[\(,+\-*\/&:=;\s]$/.test(editValue.trim())) {
          onEditChange(editValue + cellRef);
          return;
        }
      }
      // Commit current edit then select new cell
      onCommitEdit(activeCell, editValue);
    }
    onCellSelect(cellRef);
  };

  const handleCellDoubleClick = (cellRef: string) => {
    const rawVal = cellData[cellRef] !== undefined ? String(cellData[cellRef]) : '';
    onStartEdit(cellRef, rawVal);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onCommitEdit(activeCell, editValue);
      // After commit, move down
      setTimeout(() => onNavigate('down'), 0);
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onCancelEdit();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      onCommitEdit(activeCell, editValue);
      setTimeout(() => onNavigate(e.shiftKey ? 'left' : 'right'), 0);
    }
  };

  const handleAutocompleteSelect = (funcName: string) => {
    // Smart insert: find where function name should go
    const upperVal = editValue.toUpperCase();
    // Find the last incomplete function token
    const lastEqOrOp = Math.max(
      editValue.lastIndexOf('='),
      editValue.lastIndexOf('('),
      editValue.lastIndexOf(','),
      editValue.lastIndexOf('+'),
      editValue.lastIndexOf('-'),
      editValue.lastIndexOf('*'),
      editValue.lastIndexOf('/'),
    );
    const prefix = editValue.substring(0, lastEqOrOp + 1);
    onEditChange(`${prefix}${funcName}(`);
    if (cellInputRef.current) cellInputRef.current.focus();
  };

  // Build all valid cell refs for navigation
  const allCellRefs: string[] = [];
  rows.forEach((row) => {
    columns.forEach((col) => {
      allCellRefs.push(`${col.letter}${row.rowNumber}`);
    });
  });

  return (
    <div
      ref={tableRef}
      className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden flex flex-col select-none focus:outline-none"
      tabIndex={0}
      onKeyDown={handleTableKeyDown}
    >
      {/* Grid Table Container */}
      <div className="overflow-x-auto min-h-[280px]">
        <table className="w-full border-collapse text-xs font-mono">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              {/* Top-left corner */}
              <th className="w-10 py-1.5 px-1 border-r border-gray-300 bg-gray-200/80 text-gray-500 font-bold text-center select-none text-[10px]">
                
              </th>
              {/* Column Letters & Labels */}
              {columns.map((col) => {
                // Highlight column header if active cell is in this column
                const isActiveCol = activeCell.startsWith(col.letter);
                return (
                  <th
                    key={col.key}
                    className={`py-1.5 px-2 border-r border-gray-300 font-bold text-center min-w-[120px] select-none transition-colors ${
                      isActiveCol ? 'bg-emerald-100 text-emerald-900' : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="text-[10px] text-gray-400 font-mono">{col.letter}</div>
                    <div className="text-[11px] font-semibold font-sans">{col.label}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {/* Standard Data Rows */}
            {rows.map((row) => {
              const isActiveRow = activeCell.match(/\d+$/)?.[0] === String(row.rowNumber);
              return (
                <tr key={row.rowNumber} className="border-b border-gray-200 hover:bg-slate-50/40 transition-colors">
                  {/* Row Number Header */}
                  <td
                    className={`py-2 px-1 border-r border-gray-300 font-bold text-center select-none font-mono text-[11px] transition-colors ${
                      isActiveRow ? 'bg-emerald-100 text-emerald-900' : 'bg-gray-100 text-gray-500'
                    }`}
                  >
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
                        className={`relative py-2 px-2.5 border-r border-gray-200 cursor-cell transition-all text-[12px] ${
                          isTarget
                            ? result?.status === 'success'
                              ? 'bg-emerald-50 font-bold text-emerald-900'
                              : 'bg-amber-50/70 font-semibold text-amber-900'
                            : isSelected
                            ? 'bg-blue-50/30'
                            : ''
                        } ${highlightStyle ? `border-2 border-dashed ${highlightStyle}` : ''}`}
                      >
                        {/* Active Cell Selection Border */}
                        {isSelected && !isCellCurrentlyEditing && (
                          <div className="absolute inset-0 ring-2 ring-[#107c41] pointer-events-none z-10">
                            <div className="absolute -bottom-[3px] -right-[3px] w-[6px] h-[6px] bg-[#107c41] border border-white" />
                          </div>
                        )}

                        {/* Target cell indicator */}
                        {isTarget && result?.status !== 'success' && !isCellCurrentlyEditing && (
                          <div className="absolute top-0 right-0 z-10">
                            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-amber-400" />
                          </div>
                        )}

                        {/* In-Cell Input Box when actively editing */}
                        {isCellCurrentlyEditing ? (
                          <div className="relative z-20 -m-1">
                            <input
                              ref={cellInputRef}
                              type="text"
                              value={editValue}
                              onChange={(e) => onEditChange(e.target.value)}
                              onKeyDown={handleInputKeyDown}
                              className="w-full px-1.5 py-1 bg-white text-gray-900 font-mono text-xs border-2 border-[#107c41] shadow-lg focus:outline-none"
                              spellCheck={false}
                              autoComplete="off"
                            />
                            {/* Formula parameter tooltip */}
                            {formulaHint && (
                              <div className="absolute left-0 top-full mt-0.5 bg-slate-800 text-white text-[10px] font-mono px-2 py-1 rounded shadow-lg z-30 whitespace-nowrap">
                                {formulaHint}
                              </div>
                            )}
                            {/* Autocomplete Popup */}
                            {!formulaHint && (
                              <FormulaAutocomplete
                                query={editValue}
                                onSelect={handleAutocompleteSelect}
                              />
                            )}
                          </div>
                        ) : (
                          <div className="flex items-center justify-between min-h-[20px]">
                            <span
                              className={`${
                                isTarget && result?.status === 'success'
                                  ? 'text-[#107c41] font-bold'
                                  : typeof displayVal === 'number' || (typeof displayVal === 'string' && !isNaN(Number(displayVal)) && displayVal !== '')
                                  ? 'text-right w-full block'
                                  : ''
                              }`}
                            >
                              {displayVal !== undefined && displayVal !== '?' ? String(displayVal) : ''}
                            </span>

                            {isTarget && result?.status !== 'success' && (
                              <span className="text-[9px] bg-amber-100 text-amber-700 px-1 py-0.5 rounded font-sans font-semibold ml-1 shrink-0">
                                ✎ Isi
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}

            {/* Total / Target Row if defined */}
            {totalLabelRow && targetRowNumber && (
              <tr className="border-b border-gray-300 bg-gray-50/80 font-bold">
                <td className={`py-2 px-1 border-r border-gray-300 font-bold text-center select-none font-mono text-[11px] ${
                  activeCell.match(/\d+$/)?.[0] === String(targetRowNumber) ? 'bg-emerald-100 text-emerald-900' : 'bg-gray-100 text-gray-500'
                }`}>
                  {targetRowNumber}
                </td>
                <td
                  colSpan={totalLabelRow.colSpan}
                  className="py-2 px-3 text-right border-r border-gray-200 text-gray-700 font-sans font-semibold text-xs"
                >
                  {totalLabelRow.label}
                </td>
                {targetCell && (
                  <td
                    onClick={() => handleCellClick(targetCell)}
                    onDoubleClick={() => handleCellDoubleClick(targetCell)}
                    className={`relative py-2 px-2.5 border-r border-gray-200 cursor-cell font-mono ${
                      result?.status === 'success'
                        ? 'bg-emerald-100 text-emerald-900 font-bold'
                        : 'bg-emerald-50/80 text-emerald-950 font-bold'
                    } ${activeCell === targetCell ? 'ring-2 ring-[#107c41]' : ''}`}
                  >
                    {isEditing && activeCell === targetCell ? (
                      <div className="relative z-20 -m-1">
                        <input
                          ref={cellInputRef}
                          type="text"
                          value={editValue}
                          onChange={(e) => onEditChange(e.target.value)}
                          onKeyDown={handleInputKeyDown}
                          className="w-full px-1.5 py-1 bg-white text-gray-900 font-mono text-xs border-2 border-[#107c41] shadow-lg focus:outline-none"
                          spellCheck={false}
                          autoComplete="off"
                        />
                        {formulaHint && (
                          <div className="absolute left-0 top-full mt-0.5 bg-slate-800 text-white text-[10px] font-mono px-2 py-1 rounded shadow-lg z-30 whitespace-nowrap">
                            {formulaHint}
                          </div>
                        )}
                        {!formulaHint && (
                          <FormulaAutocomplete
                            query={editValue}
                            onSelect={handleAutocompleteSelect}
                          />
                        )}
                      </div>
                    ) : (
                      <div className="flex items-center justify-between">
                        <span className="text-sm">
                          {cellData[targetCell] !== undefined
                            ? evaluateFormulaValue(cellData[targetCell], cellData)
                            : ''}
                        </span>
                        {result?.status !== 'success' && (
                          <span className="text-[9px] bg-amber-100 text-amber-700 px-1 py-0.5 rounded font-sans font-semibold ml-1">
                            ✎ Isi
                          </span>
                        )}
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
      <div className="bg-gray-50 px-3 py-1.5 border-t border-gray-200 text-[11px] text-gray-500 flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2">
          <span>Klik sel lalu <strong>langsung ketik</strong></span>
          <span className="text-gray-300">|</span>
          <span><strong>Enter</strong> = simpan & turun</span>
          <span className="text-gray-300">|</span>
          <span><strong>Tab</strong> = simpan & kanan</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span className="hidden sm:inline"><strong>F2</strong> = edit sel</span>
        </div>
        <div className="flex items-center gap-1 font-mono">
          <strong className="text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded text-[10px]">{activeCell}</strong>
        </div>
      </div>
    </div>
  );
};
