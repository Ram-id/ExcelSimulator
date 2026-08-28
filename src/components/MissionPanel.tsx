'use client';

import React, { useState } from 'react';
import { ChapterData, ModuleData, EvaluationResult } from '@/types/simulator';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  HelpCircle,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Target,
  ArrowRight,
  Sparkles,
  Layers,
} from 'lucide-react';

interface MissionPanelProps {
  chapters: ChapterData[];
  modules: ModuleData[];
  currentModule: ModuleData;
  completedModuleIds: number[];
  result: EvaluationResult;
  onSelectModule: (moduleId: number) => void;
  onNextModule: () => void;
  onPrevModule: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

export const MissionPanel: React.FC<MissionPanelProps> = ({
  chapters,
  modules,
  currentModule,
  completedModuleIds,
  result,
  onSelectModule,
  onNextModule,
  onPrevModule,
  hasNext,
  hasPrev,
}) => {
  const [activeTab, setActiveTab] = useState<'misi' | 'teori' | 'hint'>('misi');
  const [isChapterListOpen, setIsChapterListOpen] = useState(false);

  const isSuccess = result.status === 'success';
  const currentChapter = chapters.find((c) => c.id === currentModule.chapterId) || chapters[0];
  const chapterModules = modules.filter((m) => m.chapterId === currentChapter.id);

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
      {/* Chapter Title Bar with Dropdown Selector */}
      <div className="bg-slate-900 text-white p-3.5 flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-emerald-400">
            <span>{currentChapter.title}</span>
          </div>
          <h3 className="font-bold text-sm text-white truncate">{currentModule.title}</h3>
        </div>

        <button
          onClick={() => setIsChapterListOpen(!isChapterListOpen)}
          className="ml-2 flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-emerald-300 text-xs px-2.5 py-1.5 rounded-lg border border-slate-700 transition-colors shrink-0"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Pilih Bab</span>
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isChapterListOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Chapter Dropdown List (if open) */}
      {isChapterListOpen && (
        <div className="bg-slate-800 text-white p-3 border-b border-slate-700 space-y-2 max-h-60 overflow-y-auto text-xs animate-fade-in">
          <div className="text-[10px] font-bold uppercase text-slate-400 mb-1">Daftar Bab Pembelajaran:</div>
          {chapters.map((ch) => {
            const chModules = modules.filter((m) => m.chapterId === ch.id);
            const doneCount = chModules.filter((m) => completedModuleIds.includes(m.id)).length;
            const isCurrent = ch.id === currentChapter.id;

            return (
              <div key={ch.id} className="space-y-1">
                <button
                  onClick={() => {
                    const first = chModules[0];
                    if (first) onSelectModule(first.id);
                    setIsChapterListOpen(false);
                  }}
                  className={`w-full p-2 rounded-lg text-left flex items-center justify-between transition-colors ${
                    isCurrent ? 'bg-emerald-800 text-white font-bold' : 'hover:bg-slate-700/80 text-slate-200'
                  }`}
                >
                  <span className="truncate">{ch.title}</span>
                  <span className="text-[10px] bg-slate-900/60 px-1.5 py-0.5 rounded font-mono ml-2">
                    {doneCount}/{chModules.length}
                  </span>
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Quick Module Strip within Current Chapter */}
      <div className="bg-slate-50 border-b border-gray-200 px-3 py-2 flex items-center gap-1.5 overflow-x-auto text-xs">
        {chapterModules.map((m) => {
          const isActive = m.id === currentModule.id;
          const isDone = completedModuleIds.includes(m.id);

          return (
            <button
              key={m.id}
              onClick={() => onSelectModule(m.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-semibold whitespace-nowrap flex items-center gap-1 transition-all ${
                isActive
                  ? 'bg-[#107c41] text-white shadow-xs'
                  : isDone
                  ? 'bg-emerald-100 text-emerald-900 hover:bg-emerald-200'
                  : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {isDone ? <CheckCircle2 className="w-3 h-3 text-emerald-600" /> : null}
              <span>M{m.id}</span>
            </button>
          );
        })}
      </div>

      {/* Tabs Switcher: Misi vs Teori vs Petunjuk */}
      <div className="flex border-b border-gray-200 bg-white text-xs font-medium">
        <button
          onClick={() => setActiveTab('misi')}
          className={`flex-1 py-2.5 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'misi'
              ? 'border-[#107c41] text-[#107c41] font-bold bg-emerald-50/40'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <Target className="w-3.5 h-3.5" />
          <span>Studi Kasus</span>
        </button>

        <button
          onClick={() => setActiveTab('teori')}
          className={`flex-1 py-2.5 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'teori'
              ? 'border-[#107c41] text-[#107c41] font-bold bg-emerald-50/40'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Teori Singkat</span>
        </button>

        <button
          onClick={() => setActiveTab('hint')}
          className={`flex-1 py-2.5 text-center border-b-2 transition-all flex items-center justify-center gap-1.5 ${
            activeTab === 'hint'
              ? 'border-[#107c41] text-[#107c41] font-bold bg-emerald-50/40'
              : 'border-transparent text-gray-500 hover:text-gray-900'
          }`}
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Petunjuk</span>
        </button>
      </div>

      {/* Tab Body Content */}
      <div className="p-4 flex-1 overflow-y-auto text-xs space-y-3 min-h-[160px]">
        {activeTab === 'misi' && (
          <div className="space-y-2.5 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">{currentModule.scenario}</p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 text-emerald-950">
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-[#107c41] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#107c41]">Target Sel {currentModule.targetCell}:</strong>
                  <p className="text-xs mt-0.5 text-emerald-900">{currentModule.objective}</p>
                </div>
              </div>
            </div>

            <div className="text-gray-500 text-[11px]">
              👉 <em>Ketik langsung rumusnya di sel <strong>{currentModule.targetCell}</strong> atau di Formula Bar lalu tekan <strong>Enter</strong>.</em>
            </div>
          </div>
        )}

        {activeTab === 'teori' && (
          <div className="space-y-2.5 animate-fade-in text-xs text-gray-700">
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">Cara Kerja:</span>
              <p className="text-gray-600">{currentModule.theory.concept}</p>
            </div>

            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1">Format Penulisan:</span>
              <code className="text-[#107c41] font-mono font-bold bg-white px-2 py-1 rounded border border-gray-200 inline-block">
                {currentModule.theory.syntax}
              </code>
            </div>

            <div className="bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200 text-emerald-950">
              <span className="font-bold text-[#107c41] block mb-0.5">Kenapa Dibutuhkan di Dunia Kerja?</span>
              <p className="text-xs text-emerald-900">{currentModule.theory.whyItMatters}</p>
            </div>
          </div>
        )}

        {activeTab === 'hint' && (
          <div className="space-y-2 animate-fade-in text-xs">
            <div className="font-bold text-gray-700 mb-1">Langkah Penyelesaian:</div>
            {currentModule.hints.map((hint, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-amber-950">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>{hint}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Result Status & Footer Navigation */}
      <div className="p-3 bg-gray-50 border-t border-gray-200 space-y-2">
        {result.status !== 'idle' && (
          <div
            className={`p-2.5 rounded-lg text-xs font-semibold flex items-start gap-2 ${
              isSuccess
                ? 'bg-emerald-100 text-emerald-950 border border-emerald-300'
                : 'bg-rose-100 text-rose-950 border border-rose-300'
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <HelpCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <div>{result.message}</div>
              {result.details && <div className="text-[11px] font-normal text-emerald-800 mt-1">{result.details}</div>}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            onClick={onPrevModule}
            disabled={!hasPrev}
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-gray-100 border border-gray-300 disabled:opacity-40 text-xs font-medium text-gray-700 flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Sebelumnya</span>
          </button>

          {isSuccess && hasNext ? (
            <button
              onClick={onNextModule}
              className="px-4 py-1.5 rounded-lg bg-[#107c41] hover:bg-[#0b5c2f] text-white text-xs font-bold flex items-center gap-1.5 shadow-sm transition-all animate-pulse"
            >
              <span>Lanjut Modul {currentModule.id + 1}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={onNextModule}
              disabled={!hasNext}
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-gray-100 border border-gray-300 disabled:opacity-40 text-xs font-medium text-gray-700 flex items-center gap-1 transition-colors"
            >
              <span>Berikutnya</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
