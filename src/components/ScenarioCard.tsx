'use client';

import React, { useState } from 'react';
import { LevelData } from '@/types/simulator';
import { HelpCircle, BookOpen, Target, Sparkles, ChevronRight, ChevronLeft, Lightbulb } from 'lucide-react';

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
  const [activeTab, setActiveTab] = useState<'scenario' | 'theory'>('scenario');

  return (
    <div className="bg-gradient-to-r from-emerald-950 via-emerald-900 to-[#107c41] text-white rounded-2xl p-5 shadow-lg border border-emerald-800">
      {/* Top Bar with Badge, Tab Toggles, and Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-800/80 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider bg-emerald-800/90 text-emerald-200 px-2.5 py-0.5 rounded-full border border-emerald-700">
            {level.category}
          </span>
          <span className="text-xs text-emerald-200/80 font-medium">
            Tingkat: <span className="text-emerald-100 font-semibold">{level.difficulty}</span>
          </span>
        </div>

        {/* Tab switchers: Skenario vs Teori */}
        <div className="flex items-center bg-emerald-950/70 p-1 rounded-lg border border-emerald-800 text-xs">
          <button
            onClick={() => setActiveTab('scenario')}
            className={`px-3 py-1 rounded-md font-semibold transition-all ${
              activeTab === 'scenario'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-emerald-200 hover:text-white'
            }`}
          >
            Studi Kasus
          </button>
          <button
            onClick={() => setActiveTab('theory')}
            className={`px-3 py-1 rounded-md font-semibold transition-all flex items-center gap-1 ${
              activeTab === 'theory'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'text-emerald-200 hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Teori & Cara Kerja</span>
          </button>
        </div>

        {/* Level Controls & Hint */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenHint}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-800/90 hover:bg-emerald-700 text-xs font-semibold text-emerald-100 rounded-lg border border-emerald-600 shadow-xs transition-all active:scale-98"
          >
            <HelpCircle className="w-3.5 h-3.5 text-yellow-300" />
            <span>Petunjuk</span>
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={onPrevLevel}
              disabled={!hasPrev}
              className="p-1.5 rounded-lg bg-emerald-800/90 hover:bg-emerald-700 disabled:opacity-40 text-emerald-100 border border-emerald-700 transition-colors"
              title="Level sebelumnya"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNextLevel}
              disabled={!hasNext}
              className="p-1.5 rounded-lg bg-emerald-800/90 hover:bg-emerald-700 disabled:opacity-40 text-emerald-100 border border-emerald-700 transition-colors"
              title="Level berikutnya"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Body */}
      {activeTab === 'scenario' ? (
        <div className="space-y-3 animate-fade-in">
          <h2 className="text-xl font-bold tracking-tight text-white">
            {level.title}
          </h2>

          <p className="text-sm text-emerald-100/90 leading-relaxed">
            {level.scenario}
          </p>

          <div className="pt-2 flex items-start gap-2.5 text-xs bg-emerald-950/60 border border-emerald-700/60 p-3.5 rounded-xl backdrop-blur-xs">
            <Target className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-emerald-200">Misi Kamu: </span>
              <span className="text-emerald-50 text-sm">{level.objective}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3 animate-fade-in text-xs">
          <h2 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
            <Lightbulb className="w-4 h-4 text-yellow-300" />
            <span>Konsep Dasar: {level.title.replace(/^Level \d+: /, '')}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-700/60 space-y-1">
              <span className="text-emerald-300 font-bold uppercase text-[10px]">Cara Kerja Rumus</span>
              <p className="text-emerald-100/90 leading-relaxed">{level.theory.concept}</p>
            </div>

            <div className="bg-emerald-950/60 p-3 rounded-xl border border-emerald-700/60 space-y-1">
              <span className="text-emerald-300 font-bold uppercase text-[10px]">Kenapa Penting di Dunia Nyata?</span>
              <p className="text-emerald-100/90 leading-relaxed">{level.theory.whyItMatters}</p>
            </div>
          </div>

          <div className="bg-emerald-950/80 p-3 rounded-xl border border-emerald-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-emerald-300 font-semibold">Format Sintaks Standar: </span>
              <code className="text-yellow-300 font-mono font-bold ml-1">{level.theory.syntax}</code>
            </div>
            <div>
              <span className="text-emerald-300 font-semibold">Contoh: </span>
              <code className="text-white bg-emerald-800 px-2 py-0.5 rounded font-mono font-bold ml-1">{level.theory.example}</code>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
