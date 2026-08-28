'use client';

import React from 'react';
import { AppMode } from '@/types/simulator';
import { Table, BookOpen, Award, RotateCcw, GraduationCap, Sparkles, Play } from 'lucide-react';

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
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-30 shadow-xs">
      {/* Top Main Navigation Bar */}
      <div className="bg-[#107c41] text-white px-4 py-2 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-white text-[#107c41] p-1.5 rounded-lg font-bold flex items-center justify-center shadow-xs">
            <Table className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm tracking-wide">ExcelSimulator</span>
              <span className="text-[10px] bg-emerald-800 text-emerald-100 px-2 py-0.5 rounded-full border border-emerald-700 font-semibold">
                v2.0 Clean & Interactive
              </span>
            </div>
            <p className="text-[11px] text-emerald-100/90 hidden sm:block">
              Platform Simulasi & Belajar Rumus Excel dari Nol
            </p>
          </div>
        </div>

        {/* Center Mode Switcher */}
        <div className="flex items-center bg-emerald-900/80 p-1 rounded-xl border border-emerald-700 text-xs">
          <button
            onClick={() => onSetMode('learn')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold transition-all ${
              mode === 'learn'
                ? 'bg-white text-[#107c41] shadow-sm'
                : 'text-emerald-100 hover:text-white'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Mode Belajar (40 Modul)</span>
          </button>

          <button
            onClick={() => onSetMode('sandbox')}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold transition-all ${
              mode === 'sandbox'
                ? 'bg-white text-[#107c41] shadow-sm'
                : 'text-emerald-100 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span>Mode Bebas (Sandbox)</span>
          </button>
        </div>

        {/* Right Action Tools */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all active:scale-98"
          >
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>Kamus Rumus</span>
          </button>

          {mode === 'learn' && (
            <div className="bg-emerald-950/60 border border-emerald-700/60 px-3 py-1.5 rounded-lg flex items-center space-x-1.5 text-xs">
              <Award className="w-4 h-4 text-yellow-300 animate-pulse" />
              <span>Progres: <strong className="text-white">{completedCount}/{totalModules}</strong></span>
            </div>
          )}

          <button
            onClick={onResetProgress}
            title="Reset progres latihan"
            className="text-xs flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 px-2.5 py-1.5 rounded-lg border border-emerald-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Reset</span>
          </button>
        </div>
      </div>
    </header>
  );
};
