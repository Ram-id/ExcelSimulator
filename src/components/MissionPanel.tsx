'use client';

import React, { useState } from 'react';
import { ChapterData, ModuleData, EvaluationResult } from '@/types/simulator';
import {
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Target,
  ArrowRight,
  Layers,
  Briefcase,
  Eye,
  EyeOff,
  Sparkles,
  MapPin,
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
  onSwitchToSandbox: () => void;
  onOpenRoadmap: () => void;
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
  onSwitchToSandbox,
  onOpenRoadmap,
  hasNext,
  hasPrev,
}) => {
  const [activeTab, setActiveTab] = useState<'misi' | 'teori' | 'hint' | 'kerja'>('misi');
  const [isChapterListOpen, setIsChapterListOpen] = useState(false);
  const [revealedHints, setRevealedHints] = useState(1); // Progressive: start with 1 hint visible

  const isSuccess = result.status === 'success';
  const currentChapter = chapters.find((c) => c.id === currentModule.chapterId) || chapters[0];
  const chapterModules = modules.filter((m) => m.chapterId === currentChapter.id);

  // Reset revealed hints when module changes
  const moduleKey = currentModule.id;

  const revealNextHint = () => {
    setRevealedHints((prev) => Math.min(prev + 1, currentModule.hints.length));
  };

  const totalHints = currentModule.hints.length;
  const visibleHints = currentModule.hints.slice(0, revealedHints);
  const hasMoreHints = revealedHints < totalHints;

  const tabs = [
    { id: 'misi' as const, icon: Target, label: 'Misi' },
    { id: 'teori' as const, icon: BookOpen, label: 'Teori' },
    { id: 'hint' as const, icon: Lightbulb, label: 'Petunjuk' },
    { id: 'kerja' as const, icon: Briefcase, label: 'Dunia Kerja' },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
      {/* Chapter Title Bar */}
      <div className="bg-slate-900 text-white p-3 flex items-center justify-between">
        <div className="flex-1 min-w-0">
          <div className="text-[10px] uppercase font-bold text-emerald-400 tracking-wide">{currentChapter.title}</div>
          <h3 className="font-bold text-[13px] text-white truncate mt-0.5">{currentModule.title}</h3>
        </div>

        <div className="flex items-center gap-1 ml-2 shrink-0">
          <button
            onClick={onOpenRoadmap}
            className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors text-emerald-300"
            title="Lihat Peta Belajar"
          >
            <MapPin className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsChapterListOpen(!isChapterListOpen)}
            className="p-1.5 hover:bg-slate-700 rounded-lg transition-colors text-emerald-300"
            title="Pilih Bab"
          >
            <Layers className="w-4 h-4" />
            <ChevronDown className={`w-3 h-3 transition-transform inline-block ml-0.5 ${isChapterListOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Chapter Dropdown */}
      {isChapterListOpen && (
        <div className="bg-slate-800 text-white p-2 border-b border-slate-700 space-y-1 max-h-52 overflow-y-auto text-xs animate-fade-in">
          {chapters.map((ch) => {
            const chModules = modules.filter((m) => m.chapterId === ch.id);
            const doneCount = chModules.filter((m) => completedModuleIds.includes(m.id)).length;
            const isCurrent = ch.id === currentChapter.id;
            return (
              <button
                key={ch.id}
                onClick={() => {
                  const first = chModules[0];
                  if (first) onSelectModule(first.id);
                  setIsChapterListOpen(false);
                }}
                className={`w-full p-2 rounded-lg text-left flex items-center justify-between transition-colors ${
                  isCurrent ? 'bg-emerald-800 text-white font-bold' : 'hover:bg-slate-700 text-slate-300'
                }`}
              >
                <span className="truncate text-[11px]">{ch.title}</span>
                <span className="text-[10px] bg-slate-900/50 px-1.5 py-0.5 rounded font-mono ml-2 shrink-0">
                  {doneCount}/{chModules.length}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Quick Module Strip */}
      <div className="bg-slate-50 border-b border-gray-200 px-2 py-1.5 flex items-center gap-1 overflow-x-auto">
        {chapterModules.map((m) => {
          const isActive = m.id === currentModule.id;
          const isDone = completedModuleIds.includes(m.id);
          return (
            <button
              key={m.id}
              onClick={() => {
                onSelectModule(m.id);
                setRevealedHints(1);
              }}
              className={`px-2 py-1 rounded text-[11px] font-semibold whitespace-nowrap flex items-center gap-0.5 transition-all ${
                isActive
                  ? 'bg-[#107c41] text-white shadow-xs'
                  : isDone
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {isDone && !isActive ? <CheckCircle2 className="w-2.5 h-2.5" /> : null}
              <span>M{m.id}</span>
            </button>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-white text-[11px] font-medium">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 text-center border-b-2 transition-all flex items-center justify-center gap-1 ${
              activeTab === tab.id
                ? 'border-[#107c41] text-[#107c41] font-bold bg-emerald-50/40'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            <tab.icon className="w-3 h-3" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-3.5 flex-1 overflow-y-auto text-xs space-y-2.5 min-h-[140px]">
        {/* MISI TAB */}
        {activeTab === 'misi' && (
          <div className="space-y-2.5 animate-fade-in">
            <p className="text-gray-700 leading-relaxed">{currentModule.scenario}</p>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-2.5">
              <div className="flex items-start gap-2">
                <Target className="w-4 h-4 text-[#107c41] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#107c41] text-[11px]">Target Sel {currentModule.targetCell}:</strong>
                  <p className="text-xs text-emerald-900 mt-0.5">{currentModule.objective}</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-[11px]">
              👉 Klik sel <strong className="text-emerald-700">{currentModule.targetCell}</strong> → langsung ketik rumus → tekan <strong>Enter</strong>
            </p>

            {/* Coba di Sandbox button */}
            <button
              onClick={onSwitchToSandbox}
              className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-800 font-semibold text-xs rounded-lg transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Coba Eksplorasi di Mode Sandbox</span>
            </button>
          </div>
        )}

        {/* TEORI TAB */}
        {activeTab === 'teori' && (
          <div className="space-y-2 animate-fade-in">
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1 text-[11px]">📘 Cara Kerja:</span>
              <p className="text-gray-600">{currentModule.theory.concept}</p>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1 text-[11px]">✏️ Format Penulisan:</span>
              <code className="text-[#107c41] font-mono font-bold bg-white px-2 py-1 rounded border border-gray-200 inline-block text-[11px]">
                {currentModule.theory.syntax}
              </code>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
              <span className="font-bold text-slate-800 block mb-1 text-[11px]">💡 Contoh:</span>
              <code className="text-blue-700 font-mono bg-white px-2 py-1 rounded border border-gray-200 inline-block text-[11px]">
                {currentModule.theory.example}
              </code>
            </div>
            <div className="bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <span className="font-bold text-[#107c41] block mb-0.5 text-[11px]">🏢 Kenapa Dibutuhkan?</span>
              <p className="text-emerald-900">{currentModule.theory.whyItMatters}</p>
            </div>
          </div>
        )}

        {/* PETUNJUK TAB — Progressive Hints */}
        {activeTab === 'hint' && (
          <div className="space-y-2 animate-fade-in">
            <div className="text-[11px] font-bold text-gray-600 flex items-center justify-between">
              <span>Petunjuk ({Math.min(revealedHints, totalHints)}/{totalHints})</span>
              {isSuccess && <span className="text-emerald-600">✅ Terjawab</span>}
            </div>
            {visibleHints.map((hint, idx) => {
              const isLast = idx === totalHints - 1;
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-2 p-2.5 rounded-lg border animate-fade-in ${
                    isLast
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                      : 'bg-amber-50 border-amber-200 text-amber-900'
                  }`}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                    isLast ? 'bg-emerald-200 text-emerald-800' : 'bg-amber-200 text-amber-800'
                  }`}>
                    {idx + 1}
                  </div>
                  <span>{hint}</span>
                </div>
              );
            })}
            {hasMoreHints && !isSuccess && (
              <button
                onClick={revealNextHint}
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-lg transition-colors border border-gray-200"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Butuh Petunjuk Lagi? ({revealedHints}/{totalHints})</span>
              </button>
            )}
          </div>
        )}

        {/* DUNIA KERJA TAB */}
        {activeTab === 'kerja' && (
          <div className="space-y-2.5 animate-fade-in">
            {/* Job relevance badges */}
            {currentModule.jobRelevance && currentModule.jobRelevance.length > 0 && (
              <div>
                <div className="font-bold text-[11px] text-gray-700 mb-1.5 flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-blue-600" />
                  <span>Digunakan oleh Profesi:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentModule.jobRelevance.map((job, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center px-2 py-1 bg-blue-50 text-blue-800 text-[10px] font-semibold rounded-md border border-blue-200"
                    >
                      👤 {job}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Real world example */}
            {currentModule.realWorldExample && (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-2.5">
                <span className="font-bold text-amber-800 text-[11px] block mb-1">📋 Contoh Nyata di Kantor:</span>
                <p className="text-amber-900 leading-relaxed">{currentModule.realWorldExample}</p>
              </div>
            )}

            {/* Skills learned */}
            {currentModule.skillsLearned && currentModule.skillsLearned.length > 0 && (
              <div>
                <div className="font-bold text-[11px] text-gray-700 mb-1.5">🎯 Skill yang Akan Kamu Kuasai:</div>
                <div className="space-y-1">
                  {currentModule.skillsLearned.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[11px] text-gray-700"
                    >
                      {isSuccess ? (
                        <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      ) : (
                        <div className="w-3 h-3 rounded-full border-2 border-gray-300 shrink-0" />
                      )}
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Fallback if no new fields yet */}
            {(!currentModule.jobRelevance || currentModule.jobRelevance.length === 0) &&
             (!currentModule.realWorldExample || currentModule.realWorldExample === '') && (
              <div className="text-center py-4 text-gray-400 text-xs">
                <Briefcase className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                <p>Informasi dunia kerja untuk modul ini akan segera tersedia.</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Result Status & Footer Navigation */}
      <div className="p-2.5 bg-gray-50 border-t border-gray-200 space-y-2">
        {result.status !== 'idle' && (
          <div
            className={`p-2.5 rounded-lg text-xs flex items-start gap-2 ${
              isSuccess
                ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                : 'bg-rose-50 text-rose-900 border border-rose-200'
            }`}
          >
            {isSuccess ? (
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
            ) : (
              <HelpCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <div className="font-semibold">{result.message}</div>
              {result.details && <div className="text-[11px] font-normal mt-1 opacity-80">{result.details}</div>}
              {/* Show learned skills on success */}
              {isSuccess && currentModule.skillsLearned && currentModule.skillsLearned.length > 0 && (
                <div className="mt-2 pt-2 border-t border-emerald-200">
                  <span className="text-[10px] font-bold text-emerald-700">✨ Skill baru dikuasai: </span>
                  <span className="text-[10px] text-emerald-800">{currentModule.skillsLearned.join(', ')}</span>
                </div>
              )}
              {isSuccess && currentModule.jobRelevance && currentModule.jobRelevance.length > 0 && (
                <div className="mt-1">
                  <span className="text-[10px] text-emerald-700">💼 Digunakan oleh: {currentModule.jobRelevance.join(', ')}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => {
              onPrevModule();
              setRevealedHints(1);
            }}
            disabled={!hasPrev}
            className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 disabled:opacity-40 text-[11px] font-medium text-gray-600 flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-3 h-3" />
            <span>Sebelum</span>
          </button>

          {isSuccess && hasNext ? (
            <button
              onClick={() => {
                onNextModule();
                setRevealedHints(1);
              }}
              className="px-3.5 py-1.5 rounded-lg bg-[#107c41] hover:bg-[#0b5c2f] text-white text-[11px] font-bold flex items-center gap-1 shadow-sm transition-all"
            >
              <span>Lanjut →</span>
            </button>
          ) : (
            <button
              onClick={() => {
                onNextModule();
                setRevealedHints(1);
              }}
              disabled={!hasNext}
              className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-gray-100 border border-gray-200 disabled:opacity-40 text-[11px] font-medium text-gray-600 flex items-center gap-1 transition-colors"
            >
              <span>Berikut</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
