'use client';

import React from 'react';
import { AppMode, UserSession, getUserLevel, getLevelEmoji } from '@/types/simulator';
import { Table, BookOpen, RotateCcw, GraduationCap, Sparkles, BarChart3, FileText, LogOut, User } from 'lucide-react';

interface ExcelHeaderProps {
  mode: AppMode;
  completedCount: number;
  totalModules: number;
  session: UserSession;
  onSetMode: (mode: AppMode) => void;
  onOpenCheatSheet: () => void;
  onResetProgress: () => void;
  onLogout: () => void;
}

export const ExcelHeader: React.FC<ExcelHeaderProps> = ({
  mode,
  completedCount,
  totalModules,
  session,
  onSetMode,
  onOpenCheatSheet,
  onResetProgress,
  onLogout,
}) => {
  const level = getUserLevel(completedCount, totalModules);
  const levelEmoji = getLevelEmoji(level);
  const percentage = totalModules > 0 ? Math.round((completedCount / totalModules) * 100) : 0;

  const modeButtons: { id: AppMode; icon: React.ElementType; label: string }[] = [
    { id: 'learn', icon: GraduationCap, label: 'Belajar' },
    { id: 'sandbox', icon: Sparkles, label: 'Sandbox' },
    { id: 'exam', icon: FileText, label: 'Ujian' },
    { id: 'progress', icon: BarChart3, label: 'Progress' },
  ];

  const initial = session.displayName.charAt(0).toUpperCase();

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-30 shadow-xs">
      <div className="bg-[#107c41] text-white px-3 py-2 flex items-center justify-between gap-2">
        {/* Brand */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="bg-white text-[#107c41] p-1 rounded-lg">
            <Table className="w-4 h-4" />
          </div>
          <div className="hidden md:block">
            <div className="font-bold text-sm tracking-wide">ExcelSimulator</div>
          </div>
        </div>

        {/* Mode Switcher */}
        <div className="flex items-center bg-emerald-900/70 p-0.5 rounded-lg border border-emerald-700/50 text-[10px] sm:text-[11px]">
          {modeButtons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => onSetMode(btn.id)}
              className={`flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-md font-semibold transition-all ${
                mode === btn.id
                  ? 'bg-white text-[#107c41] shadow-xs'
                  : 'text-emerald-200 hover:text-white'
              }`}
            >
              <btn.icon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{btn.label}</span>
            </button>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Kamus Rumus */}
          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-[10px] sm:text-[11px] px-2 py-1.5 rounded-lg shadow-xs transition-all"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span className="hidden lg:inline">Kamus</span>
          </button>

          {/* Level Badge */}
          <div className="hidden sm:flex items-center gap-1 bg-emerald-900/50 border border-emerald-700/40 px-2 py-1.5 rounded-lg text-[10px]">
            <span>{levelEmoji}</span>
            <span className="font-semibold">{level}</span>
          </div>

          {/* User Menu */}
          <div className="flex items-center gap-1 bg-emerald-900/50 border border-emerald-700/40 rounded-lg overflow-hidden">
            <div className="flex items-center gap-1.5 px-2 py-1.5">
              <div className="w-5 h-5 rounded-full bg-emerald-300 text-emerald-900 flex items-center justify-center text-[10px] font-bold">
                {initial}
              </div>
              <span className="text-[10px] font-medium text-emerald-100 hidden md:inline max-w-[80px] truncate">
                {session.displayName}
              </span>
            </div>
            <button
              onClick={onLogout}
              className="p-1.5 hover:bg-emerald-700/50 transition-colors text-emerald-200 hover:text-white border-l border-emerald-700/40"
              title="Keluar"
            >
              <LogOut className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
