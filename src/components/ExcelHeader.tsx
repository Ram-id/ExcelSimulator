'use client';

import React from 'react';
import { AppMode, getUserLevel, getLevelEmoji } from '@/types/simulator';
import { Table, BookOpen, RotateCcw, GraduationCap, Sparkles, BarChart3 } from 'lucide-react';

interface ExcelHeaderProps {
  mode: AppMode;
  completedCount: number;
  totalModules: number;
  onSetMode: (mode: AppMode) => void;
  onOpenCheatSheet: () => void;
  onResetProgress: () => void;
}

export const ExcelHeader: React.FC<ExcelHeaderProps> = ({
  mode,
  completedCount,
  totalModules,
  onSetMode,
  onOpenCheatSheet,
  onResetProgress,
}) => {
  const level = getUserLevel(completedCount, totalModules);
  const levelEmoji = getLevelEmoji(level);
  const percentage = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

  const modeButtons = [
    { id: 'learn' as AppMode, icon: GraduationCap, label: 'Belajar', shortLabel: 'Belajar' },
    { id: 'sandbox' as AppMode, icon: Sparkles, label: 'Sandbox', shortLabel: 'Sandbox' },
    { id: 'progress' as AppMode, icon: BarChart3, label: 'Progress', shortLabel: 'Progress' },
  ];

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-30 shadow-xs">
      <div className="bg-[#107c41] text-white px-3 py-2 flex items-center justify-between gap-2">
        {/* Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-white text-[#107c41] p-1 rounded-lg">
            <Table className="w-4 h-4" />
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm tracking-wide">ExcelSimulator</div>
            <div className="text-[10px] text-emerald-200/80">Belajar Rumus Excel Interaktif</div>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center bg-emerald-900/70 p-0.5 rounded-lg border border-emerald-700/50 text-[11px]">
          {modeButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => onSetMode(btn.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-md font-semibold transition-all ${
                mode === btn.id
                  ? 'bg-white text-[#107c41] shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              <btn.icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{btn.label}</span>
              <span className="sm:hidden">{btn.shortLabel}</span>
            </button>
          ))}
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Kamus Rumus */}
          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-[11px] px-2.5 py-1.5 rounded-lg shadow-xs transition-all"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Kamus Rumus</span>
          </button>

          {/* Level Badge */}
          <div className="hidden sm:flex items-center gap-1.5 bg-emerald-900/50 border border-emerald-700/40 px-2.5 py-1.5 rounded-lg text-[11px]">
            <span>{levelEmoji}</span>
            <span className="font-semibold">{level}</span>
            <span className="text-emerald-300 font-mono text-[10px]">{percentage}%</span>
          </div>

          {/* Reset */}
          <button
            onClick={onResetProgress}
            title="Reset semua progres"
            className="p-1.5 hover:bg-emerald-700 rounded-lg transition-colors text-emerald-200"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </header>
  );
};
