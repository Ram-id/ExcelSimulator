'use client';

import React, { useState } from 'react';
import { SANDBOX_TEMPLATES } from '@/lib/curriculum';
import { SandboxTemplate, TableColumn, TableRow } from '@/types/simulator';
import { evaluateFormulaValue, expandCellRange } from '@/lib/formulaEngine';
import { Plus, RotateCcw, FileSpreadsheet, Sparkles, HelpCircle } from 'lucide-react';
import { FormulaAutocomplete } from './FormulaAutocomplete';

export const SandboxView: React.FC = () => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>('blank');
  const [columns, setColumns] = useState<TableColumn[]>(SANDBOX_TEMPLATES[0].columns);
  const [rows, setRows] = useState<TableRow[]>(SANDBOX_TEMPLATES[0].rows);
  const [cellData, setCellData] = useState<Record<string, string | number>>({});
  const [activeCell, setActiveCell] = useState<string>('A2');
  const [editingCell, setEditingCell] = useState<string | null>(null);
  const [editValue, setEditValue] = useState<string>('');

  const handleSelectTemplate = (templateId: string) => {
    const tmpl = SANDBOX_TEMPLATES.find((t) => t.id === templateId) || SANDBOX_TEMPLATES[0];
    setSelectedTemplateId(templateId);
    setColumns(tmpl.columns);
    setRows(tmpl.rows);

    // Populate initial cell data
    const initialData: Record<string, string | number> = {};
    tmpl.rows.forEach((r) => {
      tmpl.columns.forEach((c) => {
        const ref = `${c.letter}${r.rowNumber}`;
        initialData[ref] = r.values[c.key];
      });
    });
    setCellData(initialData);
    setActiveCell('A2');
    setEditingCell(null);
  };

  const handleAddRow = () => {
    const nextRowNumber = rows.length > 0 ? rows[rows.length - 1].rowNumber + 1 : 2;
    const newValues: Record<string, string | number> = {};
    columns.forEach((c) => {
      newValues[c.key] = '';
    });
    setRows([...rows, { rowNumber: nextRowNumber, values: newValues }]);
  };

  const handleCellClick = (cellRef: string) => {
    if (editingCell && editValue.startsWith('=')) {
      if (/[\(,+\-*\/&:=]$/.test(editValue.trim())) {
        setEditValue(editValue + cellRef);
        return;
      }
    }
    setActiveCell(cellRef);
  };

  const handleCellDoubleClick = (cellRef: string) => {
    setActiveCell(cellRef);
    setEditingCell(cellRef);
    setEditValue(cellData[cellRef] !== undefined ? String(cellData[cellRef]) : '');
  };

  const handleCommitEdit = () => {
    if (editingCell) {
      setCellData((prev) => ({
        ...prev,
        [editingCell]: editValue,
      }));
      setEditingCell(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === 'Tab') {
      e.preventDefault();
      handleCommitEdit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setEditingCell(null);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Controls Bar */}
      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-3">
        {/* Template Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto text-xs">
          <span className="font-bold text-gray-700 whitespace-nowrap flex items-center gap-1">
            <FileSpreadsheet className="w-4 h-4 text-[#107c41]" />
            <span>Pilih Template:</span>
          </span>
          {SANDBOX_TEMPLATES.map((tmpl) => (
            <button
              key={tmpl.id}
              onClick={() => handleSelectTemplate(tmpl.id)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all whitespace-nowrap ${
                selectedTemplateId === tmpl.id
                  ? 'bg-[#107c41] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tmpl.name}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleAddRow}
            className="flex items-center gap-1 px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-[#107c41] border border-emerald-300 font-bold text-xs rounded-lg transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Tambah Baris</span>
          </button>
          <button
            onClick={() => handleSelectTemplate(selectedTemplateId)}
            className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Sheet</span>
          </button>
        </div>
      </div>

      {/* Formula Bar for Sandbox */}
      <div className="bg-white border border-gray-300 rounded-xl px-4 py-2 flex items-center gap-2 shadow-xs">
        <div className="w-16 px-2 py-1.5 bg-gray-50 border border-gray-300 rounded text-center text-xs font-bold font-mono text-gray-700 shadow-inner">
          {activeCell}
        </div>
        <div className="text-gray-400 font-serif italic font-bold text-sm select-none">fx</div>
        <input
          type="text"
          value={editingCell === activeCell ? editValue : cellData[activeCell] !== undefined ? String(cellData[activeCell]) : ''}
          onChange={(e) => {
            setEditingCell(activeCell);
            setEditValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleCommitEdit();
          }}
          placeholder="Ketik angka, teks, atau rumus (contoh: =SUM(A2:A6), =AVERAGE(B2:D2), =B2*C2)..."
          className="flex-1 px-3 py-1.5 text-xs font-mono border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107c41]"
        />
        <button
          onClick={handleCommitEdit}
          className="px-4 py-1.5 bg-[#107c41] hover:bg-[#0b5c2f] text-white text-xs font-bold rounded-lg shadow-sm"
        >
          Terapkan
        </button>
      </div>

      {/* Sandbox Spreadsheet Table */}
      <div className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden flex flex-col select-none">
        <div className="overflow-x-auto min-h-[350px]">
          <table className="w-full border-collapse text-xs font-mono">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="w-12 py-2 px-2 border-r border-gray-300 bg-gray-200 text-gray-500 font-bold text-center">
                  #
                </th>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="py-2 px-3 border-r border-gray-300 text-gray-700 font-bold text-center min-w-[140px] bg-gray-100"
                  >
                    <div className="text-[11px] text-gray-500 font-mono mb-0.5">{col.letter}</div>
                    <div className="text-xs font-semibold font-sans text-gray-800">{col.label}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.rowNumber} className="border-b border-gray-200 hover:bg-slate-50/50">
                  <td className="py-2.5 px-2 border-r border-gray-300 bg-gray-100 text-gray-500 font-bold text-center select-none font-mono">
                    {row.rowNumber}
                  </td>
                  {columns.map((col) => {
                    const cellRef = `${col.letter}${row.rowNumber}`;
                    const isSelected = activeCell === cellRef;
                    const isCellEditing = editingCell === cellRef;

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
                          isSelected ? 'bg-emerald-50/70' : ''
                        }`}
                      >
                        {isSelected && !isCellEditing && (
                          <div className="absolute inset-0 ring-2 ring-[#107c41] pointer-events-none z-10" />
                        )}

                        {isCellEditing ? (
                          <div className="relative z-20">
                            <input
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onKeyDown={handleKeyDown}
                              autoFocus
                              className="w-full p-1 bg-white text-gray-900 font-mono text-xs border-2 border-[#107c41] rounded-xs shadow-md focus:outline-none ring-2 ring-emerald-200"
                              spellCheck={false}
                            />
                            <FormulaAutocomplete
                              query={editValue}
                              onSelect={(func) => setEditValue(`=${func}(`)}
                            />
                          </div>
                        ) : (
                          <div className="min-h-[20px] flex items-center">
                            <span className={String(rawVal).startsWith('=') ? 'font-bold text-emerald-900' : 'text-gray-900'}>
                              {displayVal !== undefined ? String(displayVal) : ''}
                            </span>
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-50 px-4 py-2 border-t border-gray-200 text-xs text-gray-500 flex justify-between items-center">
          <span>⚡ <strong>Mode Bebas</strong>: Ketik rumus apa saja di sel manapun untuk menguji fungsinya secara real-time!</span>
          <span className="font-mono text-emerald-800 font-bold">{activeCell}</span>
        </div>
      </div>
    </div>
  );
};
