'use client';

import React from 'react';
import { LevelData } from '@/types/simulator';
import { HelpCircle, BookOpen, Target, Sparkles, ChevronRight, ChevronLeft } from 'lucide-react';

interface ScenarioCardProps {
  level: LevelData;
  onOpenHint: () => void;
  onPrevLevel: () => void;
  onNextLevel: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({
  level,
  onOpenHint,
  onPrevLevel,
  onNextLevel,
  hasPrev,
  hasNext,
}) => {
  return (
    <div className="bg-gradient-to-r from-emerald-900 to-[#107c41] text-white rounded-xl p-5 shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Scenario Details */}
        <div className="space-y-2 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider bg-emerald-800/80 text-emerald-200 px-2.5 py-0.5 rounded-full border border-emerald-700">
              {level.category}
            </span>
            <span className="text-xs text-emerald-100/80 font-medium">
              Tingkat: <span className="text-emerald-200 font-semibold">{level.difficulty}</span>
            </span>
          </div>

          <h2 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
            <span>{level.title}</span>
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            {level.scenario}
          </p>

          <div className="pt-2 flex items-start gap-2 text-xs bg-emerald-950/40 border border-emerald-700/50 p-3 rounded-lg backdrop-blur-xs">
            <Target className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-200">Misi Kamu: </span>
              <span className="text-emerald-50">{level.objective}</span>
            </div>
          </div>
        </div>

        {/* Action Controls & Hint Button */}
        <div className="flex md:flex-col items-center justify-between md:justify-center gap-2 shrink-0">
          <button
            onClick={onOpenHint}
            className="flex items-center gap-1.5 px-3 py-2 bg-emerald-800 hover:bg-emerald-700 active:scale-98 text-xs font-semibold text-emerald-100 rounded-lg border border-emerald-600 shadow-xs transition-all"
          >
            <HelpCircle className="w-4 h-4 text-yellow-300" />
            <span>Lihat Petunjuk</span>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={onPrevLevel}
              disabled={!hasPrev}
              className="p-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 disabled:opacity-40 disabled:hover:bg-emerald-800/80 text-emerald-100 border border-emerald-700 transition-colors"
              title="Level sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNextLevel}
              disabled={!hasNext}
              className="p-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 disabled:opacity-40 disabled:hover:bg-emerald-800/80 text-emerald-100 border border-emerald-700 transition-colors"
              title="Level berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
