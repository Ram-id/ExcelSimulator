'use client';

import React from 'react';
import { Table, BookOpen, Award, RotateCcw } from 'lucide-react';

interface ExcelHeaderProps {
  completedLevels: number[];
  totalLevels: number;
  onOpenCheatSheet: () => void;
  onResetProgress: () => void;
}

export const ExcelHeader: React.FC<ExcelHeaderProps> = ({
  completedLevels,
  totalLevels,
  onOpenCheatSheet,
  onResetProgress,
}) => {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      {/* Top Title Bar */}
      <div className="bg-[#107c41] text-white px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-white text-[#107c41] p-1.5 rounded font-bold flex items-center justify-center shadow-sm">
            <Table className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-bold text-sm tracking-wide">ExcelSimulator</span>
              <span className="text-xs bg-emerald-800/80 text-emerald-100 px-2 py-0.5 rounded-full border border-emerald-700">
                Pemula (Zero to Hero)
              </span>
            </div>
            <p className="text-xs text-emerald-100/90 flex items-center gap-1">
              <span>KurikulumDasarExcel.xlsx</span> • <span className="text-emerald-200">16 Modul Terstruktur</span>
            </p>
          </div>
        </div>

        {/* Action Buttons & Tracker */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Kamus Rumus Button */}
          <button
            onClick={onOpenCheatSheet}
            className="flex items-center gap-1.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-bold text-xs px-3 py-1.5 rounded-lg shadow-sm transition-all hover:shadow cursor-pointer active:scale-98"
          >
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>Kamus Rumus</span>
          </button>

          {/* Progress Tracker */}
          <div className="bg-emerald-900/60 backdrop-blur-sm border border-emerald-700/60 px-3 py-1.5 rounded-lg flex items-center space-x-1.5 text-xs">
            <Award className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>Progress: <strong className="text-white">{completedLevels.length}/{totalLevels}</strong></span>
          </div>

          {/* Reset Button */}
          <button
            onClick={onResetProgress}
            title="Reset semua progress"
            className="text-xs flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-emerald-100 px-2.5 py-1.5 rounded border border-emerald-600 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Ribbon Navigation Bar (Excel Style) */}
      <div className="bg-gray-100 border-b border-gray-200 px-4 py-1 flex items-center space-x-1 text-xs font-medium text-gray-700 overflow-x-auto">
        <button className="px-3 py-1 bg-white border border-b-white -mb-1 rounded-t text-[#107c41] font-semibold border-gray-200 shadow-xs">
          Kurikulum Belajar
        </button>
        <button onClick={onOpenCheatSheet} className="px-3 py-1 hover:bg-gray-200/70 rounded text-gray-700 font-medium">
          Daftar Rumus & Sintaks
        </button>
        <button className="px-3 py-1 hover:bg-gray-200/70 rounded text-gray-600">Latihan Mandiri</button>
        <button className="px-3 py-1 hover:bg-gray-200/70 rounded text-gray-600">Tips & Trik</button>
      </div>
    </header>
  );
};
