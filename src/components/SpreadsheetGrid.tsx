'use client';

import React from 'react';
import { LevelData, EvaluationResult } from '@/types/simulator';

interface SpreadsheetGridProps {
  level: LevelData;
  activeCell: string;
  result: EvaluationResult;
  onCellClick: (cellRef: string) => void;
}

export const SpreadsheetGrid: React.FC<SpreadsheetGridProps> = ({
  level,
  activeCell,
  result,
  onCellClick,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-300 shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-xs select-none">
          <thead>
            {/* Top row with column letters A, B, C, D... */}
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="w-12 py-2 px-2 border-r border-gray-300 bg-gray-200/80 text-gray-500 font-bold text-center">
                #
              </th>
              {level.columns.map((col) => (
                <th
                  key={col.key}
                  className="py-2 px-3 border-r border-gray-300 text-gray-700 font-bold text-center min-w-[120px] bg-gray-100"
                >
                  <div className="text-[11px] text-gray-500 font-mono mb-0.5">{col.letter}</div>
                  <div className="text-xs font-semibold text-gray-800">{col.label}</div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Data rows */}
            {level.rows.map((row) => (
              <tr
                key={row.rowNumber}
                className="border-b border-gray-200 hover:bg-emerald-50/40 transition-colors"
              >
                {/* Row number header */}
                <td className="py-2 px-2 border-r border-gray-300 bg-gray-100 text-gray-500 font-bold text-center font-mono select-none">
                  {row.rowNumber}
                </td>

                {/* Cells in row */}
                {level.columns.map((col) => {
                  const cellRef = `${col.letter}${row.rowNumber}`;
                  const isTarget = cellRef === level.targetCell;
                  const isSelected = activeCell === cellRef;
                  const value = row.values[col.key];

                  return (
                    <td
                      key={col.key}
                      onClick={() => onCellClick(cellRef)}
                      className={`py-2.5 px-3 border-r border-gray-200 font-mono cursor-pointer transition-all ${
                        isTarget
                          ? 'bg-amber-50 font-bold text-amber-900 ring-2 ring-inset ring-amber-400'
                          : isSelected
                          ? 'bg-emerald-100/70 ring-2 ring-inset ring-[#107c41]'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>
                          {isTarget && result.status === 'success' && result.calculatedValue !== undefined
                            ? result.calculatedValue
                            : value}
                        </span>
                        {isTarget && result.status !== 'success' && (
                          <span className="text-[10px] bg-amber-200 text-amber-800 px-1 py-0.2 rounded font-sans">
                            Target
                          </span>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}

            {/* Total / Target Calculation Row if specified */}
            {level.totalLabelRow && (
              <tr className="border-b border-gray-300 bg-gray-50 font-bold">
                <td className="py-2 px-2 border-r border-gray-300 bg-gray-100 text-gray-500 font-bold text-center font-mono">
                  {level.targetRowNumber}
                </td>
                <td
                  colSpan={level.totalLabelRow.colSpan}
                  className="py-2.5 px-4 text-right border-r border-gray-200 text-gray-700 font-semibold"
                >
                  {level.totalLabelRow.label}
                </td>
                <td
                  onClick={() => onCellClick(level.targetCell)}
                  className={`py-2.5 px-3 border-r border-gray-200 font-mono cursor-pointer transition-all ${
                    result.status === 'success'
                      ? 'bg-emerald-100 text-emerald-800 font-bold ring-2 ring-emerald-500'
                      : 'bg-emerald-50/70 text-emerald-900 font-bold ring-2 ring-dashed ring-emerald-400'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm">
                      {result.status === 'success' && result.calculatedValue !== undefined
                        ? result.calculatedValue
                        : '?'}
                    </span>
                    <span className="text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-mono">
                      {level.targetCell}
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="bg-gray-50 px-3 py-1.5 border-t border-gray-200 text-[11px] text-gray-500 flex justify-between items-center">
        <span>💡 Klik salah satu sel untuk memasukkan referensinya ke dalam rumus</span>
        <span className="font-mono text-gray-400">Sheet1 • Ready</span>
      </div>
    </div>
  );
};
