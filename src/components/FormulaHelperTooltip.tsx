'use client';

import React from 'react';
import { CHEAT_SHEET_ITEMS } from '@/lib/cheatSheet';
import { Info } from 'lucide-react';

interface FormulaHelperTooltipProps {
  formula: string;
}

export const FormulaHelperTooltip: React.FC<FormulaHelperTooltipProps> = ({ formula }) => {
  if (!formula.startsWith('=')) return null;

  const upper = formula.toUpperCase();
  const match = upper.match(/^=([A-Z_]+)\(?/);
  if (!match) return null;

  const funcName = match[1];
  const item = CHEAT_SHEET_ITEMS.find(
    (i) => i.name.toUpperCase().startsWith(funcName) || i.id.toUpperCase() === funcName
  );

  if (!item) return null;

  return (
    <div className="absolute left-0 -top-10 bg-slate-900 text-white px-3 py-1.5 rounded-md shadow-lg border border-slate-700 text-xs flex items-center gap-2 z-20 animate-fade-in">
      <Info className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
      <span className="font-mono text-emerald-300 font-bold">{item.syntax}</span>
      <span className="text-slate-400 text-[10px] hidden md:inline">• {item.useCase}</span>
    </div>
  );
};
