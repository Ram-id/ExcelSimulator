'use client';

import React from 'react';
import { ExamData, ExamResult } from '@/types/simulator';
import {
  Lock,
  CheckCircle2,
  XCircle,
  Clock,
  FileText,
  Trophy,
  ArrowRight,
  Calculator,
  BarChart3,
  Type,
  Brain,
  Search,
  Briefcase,
  Star,
  Crown,
  Sparkles,
} from 'lucide-react';

interface ExamSelectorProps {
  exams: ExamData[];
  examResults: Record<string, ExamResult>;
  completedModuleIds: number[];
  chapterModuleCounts: Record<number, { total: number; completed: number }>;
  isMaster?: boolean;
  onStartExam: (examId: string) => void;
  onViewResult: (examId: string) => void;
  onViewCertificate: (examId: string) => void;
}

const CHAPTER_ICONS = [Calculator, BarChart3, Type, Brain, Search, Briefcase];
const CHAPTER_COLORS = ['#3b82f6', '#10b981', '#8b5cf6', '#f59e0b', '#ef4444', '#06b6d4'];

export const ExamSelector: React.FC<ExamSelectorProps> = ({
  exams,
  examResults,
  completedModuleIds,
  chapterModuleCounts,
  isMaster = false,
  onStartExam,
  onViewResult,
  onViewCertificate,
}) => {
  const chapterExams = exams.filter((e) => e.chapterId > 0);
  const finalExam = exams.find((e) => e.chapterId === 0);

  const isChapterUnlocked = (chapterId: number): boolean => {
    if (isMaster) return true; // Master bypass
    const counts = chapterModuleCounts[chapterId];
    return counts ? counts.completed >= counts.total : false;
  };

  const isFinalUnlocked = (): boolean => {
    if (isMaster) return true; // Master bypass
    return chapterExams.every((e) => {
      const result = examResults[e.id];
      return result && result.passed;
    });
  };

  const getExamStatus = (exam: ExamData): 'locked' | 'available' | 'passed' | 'failed' => {
    const result = examResults[exam.id];
    if (result) {
      return result.passed ? 'passed' : 'failed';
    }
    if (exam.chapterId === 0) {
      return isFinalUnlocked() ? 'available' : 'locked';
    }
    return isChapterUnlocked(exam.chapterId) ? 'available' : 'locked';
  };

  const allChaptersPassed = chapterExams.every((e) => examResults[e.id]?.passed);
  const finalPassed = finalExam ? examResults[finalExam.id]?.passed : false;

  return (
    <div className="space-y-5">
      {/* Master Mode Banner */}
      {isMaster && (
        <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-emerald-500 text-slate-900 px-4 py-3 rounded-xl shadow-md flex items-center justify-between gap-2 border border-amber-300">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-amber-900 shrink-0" />
            <div>
              <span className="font-bold text-xs uppercase tracking-wider block text-amber-950">
                Akses Master Aktif
              </span>
              <p className="text-xs text-amber-900">
                Semua 7 ujian dan Ujian Akhir terbuka bebas tanpa batasan prasyarat!
              </p>
            </div>
          </div>
          <span className="bg-amber-900/20 text-amber-950 px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 hidden sm:inline">
            Akses Penuh
          </span>
        </div>
      )}

      {/* Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#107c41]" />
          Sistem Ujian ExcelSimulator
        </h2>
        <p className="text-xs text-gray-500 mt-1">
          {isMaster
            ? 'Sebagai Akun Master, Anda dapat langsung mengerjakan ujian bab mana saja atau langsung Ujian Akhir.'
            : 'Selesaikan semua modul di setiap bab untuk membuka ujian. Skor minimal 70% untuk lulus.'}
        </p>
      </div>

      {/* Chapter Exams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {chapterExams.map((exam, idx) => {
          const status = getExamStatus(exam);
          const result = examResults[exam.id];
          const IconComp = CHAPTER_ICONS[idx] || Calculator;
          const color = CHAPTER_COLORS[idx] || '#107c41';
          const counts = chapterModuleCounts[exam.chapterId];

          return (
            <div
              key={exam.id}
              className={`bg-white rounded-xl border shadow-sm overflow-hidden transition-all ${
                status === 'locked'
                  ? 'border-gray-200 opacity-70'
                  : status === 'passed'
                  ? 'border-emerald-300 ring-1 ring-emerald-200'
                  : status === 'failed'
                  ? 'border-rose-200'
                  : 'border-gray-200 hover:border-emerald-300 hover:shadow-md'
              }`}
            >
              {/* Card Header */}
              <div className="p-4 flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  {status === 'locked' ? (
                    <Lock className="w-5 h-5 text-gray-400" />
                  ) : status === 'passed' ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                  ) : (
                    <IconComp className="w-5 h-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm text-gray-900 truncate">{exam.title}</h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">{exam.description}</p>
                  <div className="flex items-center gap-2 mt-1.5 text-[10px]">
                    <span className="text-gray-400">{exam.questions.length} soal</span>
                    <span className="text-gray-300">•</span>
                    <span className="text-gray-400">{exam.totalPoints} poin</span>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-4 pb-4">
                {status === 'locked' && (
                  <div className="bg-gray-50 rounded-lg px-3 py-2 text-[11px] text-gray-500 flex items-center gap-1.5">
                    <Lock className="w-3 h-3" />
                    <span>Selesaikan {counts ? `${counts.completed}/${counts.total}` : '0/0'} modul Bab {exam.chapterId} dulu</span>
                  </div>
                )}

                {status === 'available' && (
                  <button
                    onClick={() => onStartExam(exam.id)}
                    className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-xs rounded-lg shadow-sm transition-all"
                  >
                    <span>Mulai Ujian</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                {status === 'passed' && result && (
                  <div className="space-y-2">
                    <div className="bg-emerald-50 rounded-lg px-3 py-2 flex items-center justify-between">
                      <span className="text-xs font-bold text-emerald-800">✅ Lulus — {result.predikat}</span>
                      <span className="text-xs font-mono text-emerald-700">{result.percentage}%</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onStartExam(exam.id)}
                        className="flex-1 text-[11px] font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg py-1.5 transition-colors"
                      >
                        Ulangi
                      </button>
                      <button
                        onClick={() => onViewResult(exam.id)}
                        className="flex-1 text-[11px] font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg py-1.5 transition-colors"
                      >
                        Lihat Hasil
                      </button>
                      <button
                        onClick={() => onViewCertificate(exam.id)}
                        className="flex-1 text-[11px] font-medium text-amber-700 bg-amber-50 hover:bg-amber-100 rounded-lg py-1.5 transition-colors"
                      >
                        Sertifikat
                      </button>
                    </div>
                  </div>
                )}

                {status === 'failed' && result && (
                  <div className="space-y-2">
                    <div className="bg-rose-50 rounded-lg px-3 py-2 flex items-center justify-between">
                      <span className="text-xs font-semibold text-rose-800">❌ Belum Lulus</span>
                      <span className="text-xs font-mono text-rose-700">{result.percentage}%</span>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onStartExam(exam.id)}
                        className="flex-1 text-[11px] font-bold text-white bg-[#107c41] hover:bg-[#0b5c2f] rounded-lg py-1.5 transition-colors"
                      >
                        Coba Lagi
                      </button>
                      <button
                        onClick={() => onViewResult(exam.id)}
                        className="flex-1 text-[11px] font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg py-1.5 transition-colors"
                      >
                        Lihat Hasil
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Final Exam Card */}
      {finalExam && (
        <div
          className={`bg-white rounded-xl border-2 shadow-sm overflow-hidden transition-all ${
            isFinalUnlocked()
              ? finalPassed
                ? 'border-amber-400 bg-gradient-to-r from-amber-50 to-emerald-50'
                : 'border-[#107c41] hover:shadow-lg'
              : 'border-gray-200 opacity-70'
          }`}
        >
          <div className="p-5 flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shrink-0 shadow-sm">
              {finalPassed ? (
                <Trophy className="w-7 h-7 text-white" />
              ) : isFinalUnlocked() ? (
                <Star className="w-7 h-7 text-white" />
              ) : (
                <Lock className="w-7 h-7 text-white/60" />
              )}
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-base text-gray-900">{finalExam.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{finalExam.description}</p>
              <div className="flex items-center gap-3 mt-2 text-[11px] text-gray-400">
                <span>{finalExam.questions.length} soal</span>
                <span>•</span>
                <span>{finalExam.totalPoints} poin</span>
                <span>•</span>
                <span>Minimal 70% untuk lulus</span>
              </div>

              {!isFinalUnlocked() && (
                <div className="mt-3 bg-gray-50 rounded-lg px-3 py-2 text-xs text-gray-500 flex items-center gap-1.5">
                  <Lock className="w-3 h-3" />
                  <span>Lulus semua 6 ujian bab untuk membuka Ujian Akhir</span>
                </div>
              )}

              {isFinalUnlocked() && !finalPassed && (
                <button
                  onClick={() => onStartExam(finalExam.id)}
                  className="mt-3 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm rounded-xl shadow-sm transition-all"
                >
                  <Star className="w-4 h-4" />
                  <span>Mulai Ujian Akhir</span>
                </button>
              )}

              {finalPassed && examResults[finalExam.id] && (
                <div className="mt-3 space-y-2">
                  <div className="bg-amber-100 rounded-lg px-3 py-2 flex items-center justify-between">
                    <span className="text-sm font-bold text-amber-900">🏆 LULUS — {examResults[finalExam.id].predikat}</span>
                    <span className="text-sm font-mono font-bold text-amber-800">{examResults[finalExam.id].percentage}%</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => onStartExam(finalExam.id)}
                      className="text-xs font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg py-2 px-3 transition-colors"
                    >
                      Ulangi
                    </button>
                    <button
                      onClick={() => onViewResult(finalExam.id)}
                      className="text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg py-2 px-3 transition-colors"
                    >
                      Lihat Hasil
                    </button>
                    <button
                      onClick={() => onViewCertificate(finalExam.id)}
                      className="text-xs font-bold text-amber-800 bg-amber-100 hover:bg-amber-200 rounded-lg py-2 px-4 transition-colors flex items-center gap-1"
                    >
                      <Trophy className="w-3.5 h-3.5" />
                      <span>Sertifikat Akhir</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
