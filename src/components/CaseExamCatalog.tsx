'use client';

import React, { useState, useMemo } from 'react';
import { CaseExamData, CaseExamResult, CaseDifficulty } from '@/types/simulator';
import {
  FileSpreadsheet,
  CheckCircle2,
  Lock,
  Search,
  Filter,
  Eye,
  Trophy,
  Play,
  FileText,
  Sparkles,
  Crown,
  ChevronRight,
  Star,
  Award,
} from 'lucide-react';

interface CaseExamCatalogProps {
  exams: CaseExamData[];
  results: Record<string, CaseExamResult>;
  isMaster?: boolean;
  onSelectExam: (exam: CaseExamData) => void;
  onViewSolution: (exam: CaseExamData) => void;
  onViewCertificate: (result: CaseExamResult, exam: CaseExamData) => void;
}

const DIFFICULTY_CONFIG: Record<
  CaseDifficulty,
  { label: string; bg: string; text: string; border: string; dotColor: string }
> = {
  PEMULA: {
    label: 'PEMULA',
    bg: 'bg-emerald-50',
    text: 'text-emerald-700',
    border: 'border-emerald-200',
    dotColor: 'text-emerald-500',
  },
  MENENGAH: {
    label: 'MEDIUM',
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    border: 'border-blue-200',
    dotColor: 'text-blue-500',
  },
  MAHIR: {
    label: 'HARD',
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    border: 'border-purple-200',
    dotColor: 'text-purple-500',
  },
  EXTREME: {
    label: 'EXTREME',
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    border: 'border-rose-200',
    dotColor: 'text-rose-500',
  },
  CHAMPIONSHIP: {
    label: 'CHAMPIONSHIP',
    bg: 'bg-amber-50',
    text: 'text-amber-800',
    border: 'border-amber-300',
    dotColor: 'text-amber-500',
  },
};

export const CaseExamCatalog: React.FC<CaseExamCatalogProps> = ({
  exams,
  results,
  isMaster = false,
  onSelectExam,
  onViewSolution,
  onViewCertificate,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('ALL');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [detailModalExam, setDetailModalExam] = useState<CaseExamData | null>(null);

  // Categories list
  const categories = useMemo(() => {
    const set = new Set<string>();
    exams.forEach((e) => set.add(e.category));
    return ['ALL', ...Array.from(set)];
  }, [exams]);

  // Filtered exams
  const filteredExams = useMemo(() => {
    return exams.filter((e) => {
      const matchSearch =
        e.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
        e.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        String(e.number).includes(searchQuery);

      const matchDiff = selectedDifficulty === 'ALL' || e.difficulty === selectedDifficulty;
      const matchCat = selectedCategory === 'ALL' || e.category === selectedCategory;

      return matchSearch && matchDiff && matchCat;
    });
  }, [exams, searchQuery, selectedDifficulty, selectedCategory]);

  const totalPassed = Object.values(results).filter((r) => r.passed).length;

  return (
    <div className="space-y-4">
      {/* Header Banner */}
      <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <FileSpreadsheet className="w-6 h-6 text-[#107c41]" />
              Latihan Soal Ujian Excel (50 Kasus Nyata)
            </h2>
            {isMaster && (
              <span className="bg-amber-100 text-amber-900 border border-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                <Crown className="w-3 h-3 text-amber-700" />
                Master Mode (Bebas Akses)
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Buka lembar kerja kasus, ketik rumus dinamis langsung di tabel data, lalu periksa hasilnya secara otomatis.
          </p>
        </div>

        {/* Stats counter */}
        <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-xl border border-slate-200 shrink-0">
          <div className="text-center">
            <div className="text-lg font-bold text-[#107c41]">{totalPassed} / {exams.length}</div>
            <div className="text-[10px] text-gray-500 uppercase font-semibold">Kasus Lulus</div>
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white rounded-xl border border-gray-200 p-3 shadow-xs flex flex-wrap items-center gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari judul kasus, kode #SBEM, kategori..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107c41] text-gray-900"
          />
        </div>

        {/* Difficulty Filter */}
        <div className="flex items-center gap-1 text-xs">
          <span className="text-gray-400 text-[11px] font-medium hidden sm:inline">Tingkat:</span>
          {['ALL', 'PEMULA', 'MENENGAH', 'MAHIR', 'EXTREME', 'CHAMPIONSHIP'].map((diff) => (
            <button
              key={diff}
              onClick={() => setSelectedDifficulty(diff)}
              className={`px-2.5 py-1 rounded-lg font-semibold text-[10px] transition-all ${
                selectedDifficulty === diff
                  ? 'bg-[#107c41] text-white shadow-xs'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {diff === 'ALL' ? 'Semua' : diff}
            </button>
          ))}
        </div>
      </div>

      {/* Catalog List matching Screenshot 1 */}
      <div className="space-y-3">
        {filteredExams.map((exam) => {
          const result = results[exam.id];
          const isPassed = result?.passed;
          const diffCfg = DIFFICULTY_CONFIG[exam.difficulty] || DIFFICULTY_CONFIG.PEMULA;

          return (
            <div
              key={exam.id}
              className={`bg-white rounded-xl border shadow-xs hover:shadow-md transition-all p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                isPassed ? 'border-emerald-300 ring-1 ring-emerald-100' : 'border-gray-200'
              }`}
            >
              {/* Left Item Info */}
              <div className="flex items-start gap-4 flex-1 min-w-0">
                {/* Excel Icon Box with Number */}
                <div className="relative shrink-0 flex flex-col items-center justify-center">
                  <div className="text-[10px] font-mono font-bold text-gray-400 mb-0.5">
                    {String(exam.number).padStart(2, '0')}
                  </div>
                  <div className="w-11 h-11 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center text-[#107c41] shadow-2xs">
                    <FileSpreadsheet className="w-6 h-6 text-[#107c41]" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1 flex-1 min-w-0">
                  {/* Badges line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span
                      className={`px-2 py-0.5 rounded-md font-bold text-[10px] tracking-wider uppercase border ${diffCfg.bg} ${diffCfg.text} ${diffCfg.border}`}
                    >
                      {diffCfg.label}
                    </span>

                    <span className="font-mono text-gray-400 text-[11px] font-semibold">
                      {exam.code}
                    </span>

                    {/* Stars / Dots */}
                    <div className="flex items-center gap-0.5 ml-1">
                      <span className="text-[10px] text-gray-400 mr-1">Kesulitan</span>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < exam.difficultyStars ? 'bg-amber-400' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>

                    {isPassed && (
                      <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        LULUS ({result.score}%)
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-sm text-gray-900 truncate">
                    {exam.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-gray-500 leading-relaxed truncate">
                    {exam.instructions.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    {exam.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium"
                      >
                        ⚡ {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons Column */}
              <div className="flex md:flex-col items-center gap-1.5 w-full md:w-auto shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-gray-100">
                {/* Kerjakan Soal */}
                <button
                  onClick={() => onSelectExam(exam)}
                  className="flex-1 md:flex-none w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-xs rounded-xl shadow-xs transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Kerjakan Soal</span>
                </button>

                {/* Lihat detail */}
                <button
                  onClick={() => setDetailModalExam(exam)}
                  className="flex-1 md:flex-none w-full flex items-center justify-center gap-1 px-3 py-1.5 bg-white hover:bg-gray-50 text-gray-700 font-semibold text-[11px] rounded-lg border border-gray-200 transition-colors"
                >
                  <FileText className="w-3 h-3 text-gray-400" />
                  <span>Lihat detail</span>
                </button>

                {/* Kunci Jawaban */}
                <button
                  onClick={() => onViewSolution(exam)}
                  className="flex-1 md:flex-none w-full flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-[11px] rounded-lg border border-blue-200 transition-colors"
                >
                  <Eye className="w-3 h-3 text-blue-500" />
                  <span>Kunci Jawaban</span>
                </button>

                {/* Certificate button if passed */}
                {isPassed && (
                  <button
                    onClick={() => onViewCertificate(result, exam)}
                    className="flex-1 md:flex-none w-full flex items-center justify-center gap-1 px-3 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 font-bold text-[11px] rounded-lg border border-amber-300 transition-colors"
                  >
                    <Trophy className="w-3 h-3 text-amber-600" />
                    <span>Sertifikat</span>
                  </button>
                )}
              </div>
            </div>
          );
        })}

        {filteredExams.length === 0 && (
          <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-400 text-xs">
            Tidak ada latihan soal yang sesuai dengan kriteria pencarian.
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {detailModalExam && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fade-in">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {detailModalExam.difficulty} • {detailModalExam.code}
                </span>
                <h3 className="text-base font-bold text-gray-900 mt-1">{detailModalExam.title}</h3>
              </div>
            </div>

            <p className="text-xs text-gray-600 leading-relaxed">
              {detailModalExam.instructions.description}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1.5 text-xs">
              <span className="font-bold text-slate-800 block text-[11px]">Tujuan & Aturan:</span>
              {detailModalExam.instructions.points.map((pt, idx) => (
                <div key={idx} className="text-gray-700 text-[11px]">
                  {pt}
                </div>
              ))}
            </div>

            <div className="flex gap-2 justify-end pt-2">
              <button
                onClick={() => setDetailModalExam(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-xl transition-colors"
              >
                Tutup
              </button>
              <button
                onClick={() => {
                  onSelectExam(detailModalExam);
                  setDetailModalExam(null);
                }}
                className="px-5 py-2 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center gap-1.5"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Mulai Pengerjaan</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
