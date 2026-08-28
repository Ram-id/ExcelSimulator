'use client';

import React from 'react';
import { Table, Sparkles, Award, CheckCircle2, RotateCcw } from 'lucide-react';

interface ExcelHeaderProps {
  completedLevels: number[];
  totalLevels: number;
  onResetProgress: () => void;
}

export const ExcelHeader: React.FC<ExcelHeaderProps> = ({
  completedLevels,
  totalLevels,
  onResetProgress
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
                Interactive Learning
              </span>
            </div>
            <p className="text-xs text-emerald-100/90 flex items-center gap-1">
              <span>LatihanRumus.xlsx</span> • <span className="text-emerald-200">Tersimpan di Cloud</span>
            </p>
          </div>
        </div>

        {/* Progress & Badge */}
        <div className="flex items-center space-x-3">
          <div className="bg-emerald-900/60 backdrop-blur-sm border border-emerald-700/60 px-3 py-1.5 rounded-lg flex items-center space-x-2 text-xs">
            <Award className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span>Progress: <strong className="text-white">{completedLevels.length}/{totalLevels} Level</strong></span>
          </div>

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
          Rumus & Simulasi
        </button>
        <button className="px-3 py-1 hover:bg-gray-200/70 rounded text-gray-600">Beranda</button>
        <button className="px-3 py-1 hover:bg-gray-200/70 rounded text-gray-600">Sisipkan</button>
        <button className="px-3 py-1 hover:bg-gray-200/70 rounded text-gray-600">Data</button>
        <button className="px-3 py-1 hover:bg-gray-200/70 rounded text-gray-600">Tinjau</button>
        <button className="px-3 py-1 hover:bg-gray-200/70 rounded text-gray-600">Tampilan</button>
      </div>
    </header>
  );
};
