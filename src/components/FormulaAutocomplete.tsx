'use client';

import React from 'react';
import { CHEAT_SHEET_ITEMS } from '@/lib/cheatSheet';
import { Sparkles, FunctionSquare } from 'lucide-react';

interface FormulaAutocompleteProps {
  query: string;
  onSelect: (funcName: string) => void;
}

export const FormulaAutocomplete: React.FC<FormulaAutocompleteProps> = ({ query, onSelect }) => {
  if (!query.startsWith('=')) return null;

  const textAfterEqual = query.slice(1).trim().toUpperCase();
  if (!textAfterEqual || textAfterEqual.includes('(')) return null;

  const matches = CHEAT_SHEET_ITEMS.filter((item) =>
    item.name.toUpperCase().startsWith(textAfterEqual) || item.id.toUpperCase().startsWith(textAfterEqual)
  ).slice(0, 5);

  if (matches.length === 0) return null;

  return (
    <div className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 min-w-[280px] overflow-hidden animate-fade-in text-xs">
      <div className="bg-emerald-50 px-3 py-1.5 border-b border-emerald-100 text-[10px] font-bold text-emerald-800 flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-emerald-600" />
        <span>Rekomendasi Rumus Excel</span>
      </div>
      <div className="divide-y divide-gray-100 max-h-48 overflow-y-auto">
        {matches.map((item) => {
          const funcName = item.name.split(' ')[0].replace(/[^A-Z]/g, '');
          return (
            <button
              key={item.id}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                onSelect(funcName || item.id.toUpperCase());
              }}
              className="w-full px-3 py-2 text-left hover:bg-emerald-50/70 transition-colors flex items-start gap-2 group cursor-pointer"
            >
              <span className="font-mono font-bold text-[#107c41] group-hover:underline">
                ={funcName || item.id.toUpperCase()}(
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] text-gray-700 truncate">{item.description}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
