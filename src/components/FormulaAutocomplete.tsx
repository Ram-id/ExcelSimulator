'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { CHEAT_SHEET_ITEMS } from '@/lib/cheatSheet';
import { Sparkles } from 'lucide-react';

interface FormulaAutocompleteProps {
  query: string;
  onSelect: (funcName: string) => void;
}

export const FormulaAutocomplete: React.FC<FormulaAutocompleteProps> = ({ query, onSelect }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);

  if (!query.startsWith('=')) return null;

  // Extract the last token being typed (after the last operator/comma/paren)
  const lastTokenMatch = query.match(/[=\(,+\-*\/&;\s]([A-Z_]*)$/i);
  const textToMatch = lastTokenMatch ? lastTokenMatch[1].toUpperCase() : '';

  if (!textToMatch || textToMatch.length < 1) return null;

  const matches = CHEAT_SHEET_ITEMS.filter((item) => {
    const funcName = item.name.split(' ')[0].replace(/[^A-Z]/g, '').toUpperCase();
    return funcName.startsWith(textToMatch) || item.id.toUpperCase().startsWith(textToMatch);
  }).slice(0, 6);

  if (matches.length === 0) return null;

  // Reset selection when matches change
  const matchKey = matches.map((m) => m.id).join(',');

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (matches.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      e.stopPropagation();
      setSelectedIndex((prev) => Math.min(prev + 1, matches.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      e.stopPropagation();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    }
  }, [matches.length]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true);
    return () => document.removeEventListener('keydown', handleKeyDown, true);
  }, [handleKeyDown]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [matchKey]);

  return (
    <div
      ref={listRef}
      className="absolute left-0 top-full mt-1 bg-white rounded-lg shadow-xl border border-gray-200 z-50 min-w-[260px] overflow-hidden text-xs"
    >
      <div className="bg-emerald-50 px-2.5 py-1 border-b border-emerald-100 text-[10px] font-bold text-emerald-800 flex items-center gap-1">
        <Sparkles className="w-3 h-3 text-emerald-600" />
        <span>Pilih Rumus (↑↓ Enter)</span>
      </div>
      <div className="divide-y divide-gray-50 max-h-44 overflow-y-auto">
        {matches.map((item, idx) => {
          const funcName = item.name.split(' ')[0].replace(/[^A-Z]/g, '');
          const isActive = idx === selectedIndex;
          return (
            <button
              key={item.id}
              type="button"
              onMouseDown={(e) => {
                e.preventDefault();
                onSelect(funcName || item.id.toUpperCase());
              }}
              onMouseEnter={() => setSelectedIndex(idx)}
              className={`w-full px-2.5 py-1.5 text-left flex items-start gap-2 cursor-pointer transition-colors ${
                isActive ? 'bg-emerald-50 border-l-2 border-l-emerald-500' : 'hover:bg-gray-50 border-l-2 border-l-transparent'
              }`}
            >
              <span className="font-mono font-bold text-[#107c41] shrink-0">
                {funcName || item.id.toUpperCase()}
              </span>
              <span className="text-gray-600 truncate text-[11px]">{item.description}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
