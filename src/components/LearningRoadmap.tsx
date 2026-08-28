'use client';

import React, { useState } from 'react';
import { CHAPTERS, MODULES } from '@/lib/curriculum';
import {
  CheckCircle2,
  Circle,
  MapPin,
  ChevronDown,
  ChevronRight,
  Calculator,
  BarChart3,
  Type,
  Brain,
  Search,
  Briefcase,
  Lock,
  Play,
} from 'lucide-react';

interface LearningRoadmapProps {
  completedModuleIds: number[];
  currentModuleId: number;
  onSelectModule: (moduleId: number) => void;
  onClose: () => void;
}

const CHAPTER_ICONS = [Calculator, BarChart3, Type, Brain, Search, Briefcase];
const CHAPTER_COLORS = [
  { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', accent: 'bg-blue-500', light: 'bg-blue-100' },
  { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', accent: 'bg-emerald-500', light: 'bg-emerald-100' },
  { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', accent: 'bg-purple-500', light: 'bg-purple-100' },
  { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', accent: 'bg-amber-500', light: 'bg-amber-100' },
  { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', accent: 'bg-rose-500', light: 'bg-rose-100' },
  { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', accent: 'bg-cyan-500', light: 'bg-cyan-100' },
];

export const LearningRoadmap: React.FC<LearningRoadmapProps> = ({
  completedModuleIds,
  currentModuleId,
  onSelectModule,
  onClose,
}) => {
  const [expandedChapter, setExpandedChapter] = useState<number | null>(
    MODULES.find((m) => m.id === currentModuleId)?.chapterId || 1
  );

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#107c41]" />
              Peta Belajar Excel
            </h2>
            <p className="text-xs text-gray-500 mt-0.5">6 bab • 40 modul • Dari nol sampai mahir</p>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-xs rounded-lg shadow-sm transition-all"
          >
            Lanjut Belajar →
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative space-y-3">
        {CHAPTERS.map((chapter, chIdx) => {
          const chapterModules = MODULES.filter((m) => m.chapterId === chapter.id);
          const doneCount = chapterModules.filter((m) => completedModuleIds.includes(m.id)).length;
          const isComplete = doneCount === chapterModules.length;
          const isStarted = doneCount > 0;
          const isCurrent = chapterModules.some((m) => m.id === currentModuleId);
          const isExpanded = expandedChapter === chapter.id;
          const colors = CHAPTER_COLORS[chIdx] || CHAPTER_COLORS[0];
          const IconComp = CHAPTER_ICONS[chIdx] || Calculator;
          const percentage = chapterModules.length > 0 ? Math.round((doneCount / chapterModules.length) * 100) : 0;

          // Status
          let statusLabel = '🔒 Belum Mulai';
          let statusClass = 'text-gray-400';
          if (isComplete) {
            statusLabel = '✅ Selesai';
            statusClass = 'text-emerald-600 font-bold';
          } else if (isStarted || isCurrent) {
            statusLabel = '🔄 Sedang Dikerjakan';
            statusClass = 'text-blue-600 font-bold';
          }

          return (
            <div key={chapter.id} className="relative">
              {/* Vertical connector line */}
              {chIdx < CHAPTERS.length - 1 && (
                <div className={`absolute left-[23px] top-[56px] w-0.5 h-[calc(100%-32px)] ${isComplete ? 'bg-emerald-300' : 'bg-gray-200'}`} />
              )}

              {/* Chapter card */}
              <div className={`relative rounded-xl border shadow-sm overflow-hidden transition-all ${
                isCurrent ? `${colors.border} ${colors.bg} ring-2 ring-offset-1 ring-emerald-400` : `border-gray-200 bg-white`
              }`}>
                {/* Chapter header */}
                <button
                  onClick={() => setExpandedChapter(isExpanded ? null : chapter.id)}
                  className="w-full px-4 py-3.5 flex items-center gap-3 text-left hover:bg-gray-50/50 transition-colors"
                >
                  {/* Circle indicator */}
                  <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0 ${
                    isComplete ? 'bg-emerald-500 text-white' : isStarted || isCurrent ? `${colors.light} ${colors.text}` : 'bg-gray-100 text-gray-400'
                  }`}>
                    {isComplete ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <IconComp className="w-5 h-5" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-sm text-gray-900 truncate">{chapter.title}</h3>
                      {isCurrent && (
                        <span className="text-[9px] bg-emerald-500 text-white px-1.5 py-0.5 rounded-full font-bold shrink-0 animate-pulse">
                          KAMU DI SINI
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-gray-500 mt-0.5 truncate">{chapter.description}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className={`text-[10px] ${statusClass}`}>{statusLabel}</span>
                      <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden max-w-[120px]">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${isComplete ? 'bg-emerald-500' : isStarted ? 'bg-blue-500' : 'bg-gray-200'}`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-mono text-gray-400">{doneCount}/{chapterModules.length}</span>
                    </div>
                  </div>

                  {isExpanded ? (
                    <ChevronDown className="w-4 h-4 text-gray-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />
                  )}
                </button>

                {/* Expanded module list */}
                {isExpanded && (
                  <div className="border-t border-gray-100 px-4 py-3 space-y-1.5 bg-gray-50/30 animate-fade-in">
                    {chapterModules.map((mod) => {
                      const isDone = completedModuleIds.includes(mod.id);
                      const isActive = mod.id === currentModuleId;

                      return (
                        <button
                          key={mod.id}
                          onClick={() => {
                            onSelectModule(mod.id);
                            onClose();
                          }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-left transition-all text-xs ${
                            isActive
                              ? 'bg-[#107c41] text-white shadow-sm font-bold'
                              : isDone
                              ? 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100'
                              : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-100'
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-emerald-500'}`} />
                          ) : isActive ? (
                            <Play className="w-3.5 h-3.5 shrink-0 text-white fill-white" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 shrink-0 text-gray-300" />
                          )}
                          <span className="truncate">{mod.title}</span>
                          <span className={`text-[9px] font-medium ml-auto shrink-0 px-1.5 py-0.5 rounded ${
                            isActive ? 'bg-white/20 text-white' : isDone ? 'bg-emerald-200 text-emerald-700' : 'bg-gray-100 text-gray-400'
                          }`}>
                            {mod.difficulty}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
