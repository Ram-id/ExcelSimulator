'use client';

import React from 'react';
import { LevelData } from '@/types/simulator';
import { CheckCircle, Circle, Lock, Layers } from 'lucide-react';

interface LevelSelectorProps {
  levels: LevelData[];
  currentLevelId: number;
  completedLevels: number[];
  onSelectLevel: (levelId: number) => void;
}

export const LevelSelector: React.FC<LevelSelectorProps> = ({
  levels,
  currentLevelId,
  completedLevels,
  onSelectLevel,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
      <div className="flex items-center space-x-2 mb-3">
        <Layers className="w-4 h-4 text-[#107c41]" />
        <h3 className="font-bold text-sm text-gray-800">Daftar Modul & Level</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {levels.map((lvl) => {
          const isActive = lvl.id === currentLevelId;
          const isCompleted = completedLevels.includes(lvl.id);

          return (
            <button
              key={lvl.id}
              onClick={() => onSelectLevel(lvl.id)}
              className={`p-2.5 rounded-lg border text-left transition-all relative ${
                isActive
                  ? 'border-[#107c41] bg-emerald-50/80 ring-2 ring-[#107c41]/30 shadow-xs'
                  : isCompleted
                  ? 'border-emerald-200 bg-white hover:bg-emerald-50/30'
                  : 'border-gray-200 bg-gray-50/50 hover:bg-gray-100/80'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                  Level {lvl.id}
                </span>
                {isCompleted ? (
                  <CheckCircle className="w-4 h-4 text-[#107c41]" />
                ) : (
                  <Circle className="w-3.5 h-3.5 text-gray-300" />
                )}
              </div>

              <div className="text-xs font-semibold text-gray-800 line-clamp-1">
                {lvl.title.replace(/^Level \d+: /, '')}
              </div>

              <div className="flex items-center gap-1.5 mt-2">
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${
                    lvl.difficulty === 'Mudah'
                      ? 'bg-blue-50 text-blue-700'
                      : 'bg-orange-50 text-orange-700'
                  }`}
                >
                  {lvl.difficulty}
                </span>
                <span className="text-[10px] text-gray-400 font-mono">
                  {lvl.targetCell}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
