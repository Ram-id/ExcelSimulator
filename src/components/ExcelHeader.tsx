'use client';

import React, { useState, useRef, useEffect } from 'react';
import { AppMode, UserSession, getUserLevel, getLevelEmoji } from '@/types/simulator';
import {
  Table,
  BookOpen,
  RotateCcw,
  GraduationCap,
  Sparkles,
  BarChart3,
  FileText,
  LogOut,
  Crown,
  CheckCheck,
  Award,
  ChevronDown,
} from 'lucide-react';

interface ExcelHeaderProps {
  mode: AppMode;
  completedCount: number;
  totalModules: number;
  session: UserSession;
  onSetMode: (mode: AppMode) => void;
  onOpenCheatSheet: () => void;
  onResetProgress: () => void;
  onLogout: () => void;
  onUnlockAllModules?: () => void;
  onUnlockAllExams?: () => void;
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
  onUnlockAllModules,
  onUnlockAllExams,
}) => {
  const [isMasterMenuOpen, setIsMasterMenuOpen] = useState(false);
  const masterMenuRef = useRef<HTMLDivElement>(null);

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

  // Close master menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (masterMenuRef.current && !masterMenuRef.current.contains(e.target as Node)) {
        setIsMasterMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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
          {/* Master Tools Menu (Only for Master Account) */}
          {session.isMaster && (
            <div className="relative" ref={masterMenuRef}>
              <button
                onClick={() => setIsMasterMenuOpen(!isMasterMenuOpen)}
                className="flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-[10px] sm:text-[11px] px-2.5 py-1.5 rounded-lg shadow-sm transition-all"
                title="Fitur Khusus Master Admin"
              >
                <Crown className="w-3.5 h-3.5 text-amber-900 fill-amber-900" />
                <span className="hidden sm:inline">Master Tools</span>
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </button>

              {isMasterMenuOpen && (
                <div className="absolute right-0 top-full mt-1.5 w-60 bg-white text-slate-800 rounded-xl shadow-2xl border border-amber-200 py-1.5 z-50 text-xs animate-fade-in divide-y divide-gray-100">
                  <div className="px-3 py-1.5 bg-amber-50 text-amber-950 font-bold flex items-center gap-1.5 text-[11px]">
                    <Crown className="w-3.5 h-3.5 text-amber-600" />
                    <span>Akses Penuh Master</span>
                  </div>

                  <div className="py-1">
                    <button
                      onClick={() => {
                        onUnlockAllModules?.();
                        setIsMasterMenuOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-emerald-50 text-emerald-900 flex items-center gap-2 transition-colors font-medium"
                    >
                      <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <div>
                        <div>Buka Semua 40 Modul</div>
                        <div className="text-[10px] text-gray-500 font-normal">Tandai 40 modul selesai instan</div>
                      </div>
                    </button>

                    <button
                      onClick={() => {
                        onUnlockAllExams?.();
                        setIsMasterMenuOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left hover:bg-amber-50 text-amber-900 flex items-center gap-2 transition-colors font-medium"
                    >
                      <Award className="w-4 h-4 text-amber-600 shrink-0" />
                      <div>
                        <div>Luluskan Semua 7 Ujian</div>
                        <div className="text-[10px] text-gray-500 font-normal">Dapatkan semua sertifikat (skor 100%)</div>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Kamus Rumus */}
          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-white font-semibold text-[10px] sm:text-[11px] px-2 py-1.5 rounded-lg border border-emerald-600 transition-all"
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
              <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                session.isMaster ? 'bg-amber-400 text-amber-950 ring-1 ring-amber-300' : 'bg-emerald-300 text-emerald-900'
              }`}>
                {session.isMaster ? '👑' : initial}
              </div>
              <span className="text-[10px] font-medium text-emerald-100 hidden md:inline max-w-[90px] truncate">
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
