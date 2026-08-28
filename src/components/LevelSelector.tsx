'use client';

import React from 'react';
import { LevelData } from '@/types/simulator';
import { CheckCircle2, Circle, Layers } from 'lucide-react';

interface LevelSelectorProps {
  levels: LevelData[];
  currentLevelId: number;
  completedLevels: number[];
  activeTrackId: string;
  onSelectLevel: (levelId: number) => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({
  levels,
  currentLevelId,
  completedLevels,
  activeTrackId,
  onSelectLevel,
}) => {
  // Filter levels for active track
  const trackLevels = levels.filter((lvl) => lvl.trackId === activeTrackId);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-[#107c41]" />
          <h3 className="font-bold text-sm text-gray-800">Daftar Modul Pada Track Ini</h3>
        </div>
        <span className="text-xs text-gray-500">
          {trackLevels.filter(l => completedLevels.includes(l.id)).length} dari {trackLevels.length} Selesai
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
        {trackLevels.map((lvl) => {
          const isActive = lvl.id === currentLevelId;
          const isCompleted = completedLevels.includes(lvl.id);

          return (
            <button
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className={`p-3 rounded-xl border text-left transition-all relative cursor-pointer ${
                isActive
                  ? 'border-[#107c41] bg-emerald-50/90 ring-2 ring-[#107c41]/30 shadow-xs'
                  : isCompleted
                  ? 'border-emerald-200 bg-white hover:bg-emerald-50/40'
                  : 'border-gray-200 bg-gray-50/60 hover:bg-gray-100/80'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider bg-emerald-100/80 px-1.5 py-0.5 rounded">
                  Modul {lvl.id}
                </span>
                {isCompleted ? (
                  <CheckCircle2 className="w-4 h-4 text-[#107c41]" />
                ) : (
                  <Circle className="w-3.5 h-3.5 text-gray-300" />
                )}
              </div>

              <div className="text-xs font-bold text-gray-900 line-clamp-1 mb-1">
                {lvl.title.replace(/^Level \d+: /, '')}
              </div>

              <div className="flex items-center justify-between text-[11px] text-gray-500">
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                    lvl.difficulty === 'Mudah'
                      ? 'bg-blue-50 text-blue-700'
                      : lvl.difficulty === 'Menengah'
                      ? 'bg-orange-50 text-orange-700'
                      : 'bg-purple-50 text-purple-700'
                  }`}
                >
                  {lvl.difficulty}
                </span>
                <span className="font-mono text-gray-400">Sel: {lvl.targetCell}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
