'use client';

import React, { useState, useMemo } from 'react';
import { ExamData, ExamQuestion, ExamResult, UserAnswer, getPredikat } from '@/types/simulator';
import { evaluateFormulaValue } from '@/lib/formulaEngine';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  Flag,
  Send,
  ArrowLeft,
  Trophy,
  Eye,
  RotateCcw,
} from 'lucide-react';

interface ExamModeProps {
  exam: ExamData;
  onFinish: (result: ExamResult) => void;
  onBack: () => void;
  existingResult?: ExamResult;
}

type ExamPhase = 'taking' | 'review' | 'result';

export const ExamMode: React.FC<ExamModeProps> = ({ exam, onFinish, onBack, existingResult }) => {
  const [phase, setPhase] = useState<ExamPhase>(existingResult ? 'result' : 'taking');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | number>>({});
  const [flagged, setFlagged] = useState<Set<number>>(new Set());
  const [result, setResult] = useState<ExamResult | null>(existingResult || null);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

  const question = exam.questions[currentIdx];
  const totalQ = exam.questions.length;

  const setAnswer = (qId: number, val: string | number) => {
    setAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  const toggleFlag = (qId: number) => {
    setFlagged((prev) => {
      const next = new Set(prev);
      if (next.has(qId)) next.delete(qId);
      else next.add(qId);
      return next;
    });
  };

  const handleSubmit = () => {
    const userAnswers: UserAnswer[] = exam.questions.map((q) => {
      const userAns = answers[q.id];
      let isCorrect = false;

      if (userAns !== undefined && userAns !== '') {
        const userStr = String(userAns).trim().toUpperCase();
        const correctStr = String(q.correctAnswer).trim().toUpperCase();

        if (q.type === 'formula' && q.acceptedFormulas) {
          // Check formula match or value match
          const normalizedUser = userStr.replace(/\s+/g, '').replace(/;/g, ',');
          isCorrect = q.acceptedFormulas.some(
            (f) => f.replace(/\s+/g, '').replace(/;/g, ',').toUpperCase() === normalizedUser
          );
          // Also try calculating value
          if (!isCorrect && userStr.startsWith('=')) {
            const cellData: Record<string, string | number> = {};
            if (q.rows && q.columns) {
              q.rows.forEach((r) => {
                q.columns!.forEach((c) => {
                  cellData[`${c.letter}${r.rowNumber}`] = r.values[c.key];
                });
              });
            }
            const calculated = evaluateFormulaValue(userAns, cellData);
            isCorrect = String(calculated).trim().toUpperCase() === correctStr;
          }
        } else {
          isCorrect = userStr === correctStr;
        }
      }

      return {
        questionId: q.id,
        answer: userAns !== undefined ? userAns : '',
        isCorrect,
        pointsEarned: isCorrect ? q.points : 0,
      };
    });

    const totalEarned = userAnswers.reduce((s, a) => s + a.pointsEarned, 0);
    const percentage = Math.round((totalEarned / exam.totalPoints) * 100);

    const examResult: ExamResult = {
      examId: exam.id,
      score: totalEarned,
      totalPoints: exam.totalPoints,
      percentage,
      passed: percentage >= 70,
      answers: userAnswers,
      completedAt: new Date().toISOString(),
      predikat: getPredikat(percentage),
    };

    if (examResult.passed) {
      try {
        confetti({ particleCount: 120, spread: 100, origin: { y: 0.5 }, colors: ['#107c41', '#22c55e', '#fbbf24'] });
      } catch { /* ignore */ }
    }

    setResult(examResult);
    setPhase('result');
    onFinish(examResult);
  };

  const handleRetake = () => {
    setPhase('taking');
    setCurrentIdx(0);
    setAnswers({});
    setFlagged(new Set());
    setResult(null);
    setShowConfirmSubmit(false);
  };

  // PHASE: RESULT
  if (phase === 'result' && result) {
    return (
      <div className="space-y-4">
        <button onClick={onBack} className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
          <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Daftar Ujian
        </button>

        {/* Score Card */}
        <div className={`rounded-2xl p-6 text-center shadow-sm border-2 ${
          result.passed
            ? 'bg-gradient-to-br from-emerald-50 to-amber-50 border-emerald-300'
            : 'bg-gradient-to-br from-rose-50 to-gray-50 border-rose-200'
        }`}>
          <div className="text-5xl mb-2">{result.passed ? '🎉' : '😔'}</div>
          <h2 className="text-xl font-bold text-gray-900">
            {result.passed ? 'Selamat, Kamu Lulus!' : 'Belum Lulus'}
          </h2>
          <div className="mt-3 flex items-center justify-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">{result.percentage}%</div>
              <div className="text-xs text-gray-500">Skor</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <div className="text-xl font-bold text-gray-900">{result.score}/{result.totalPoints}</div>
              <div className="text-xs text-gray-500">Poin</div>
            </div>
            <div className="w-px h-10 bg-gray-200" />
            <div className="text-center">
              <div className={`text-lg font-bold ${result.passed ? 'text-emerald-700' : 'text-rose-700'}`}>{result.predikat}</div>
              <div className="text-xs text-gray-500">Predikat</div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-3">
            <button onClick={handleRetake} className="flex items-center gap-1.5 px-4 py-2 bg-white border border-gray-300 text-gray-700 font-semibold text-xs rounded-xl hover:bg-gray-50 transition-colors">
              <RotateCcw className="w-3.5 h-3.5" /> Ulangi Ujian
            </button>
            <button onClick={() => setPhase('review')} className="flex items-center gap-1.5 px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 font-semibold text-xs rounded-xl hover:bg-blue-100 transition-colors">
              <Eye className="w-3.5 h-3.5" /> Lihat Kunci Jawaban
            </button>
          </div>
        </div>

        {/* Per-question summary */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 font-bold text-sm text-gray-800">Ringkasan Jawaban</div>
          <div className="divide-y divide-gray-100">
            {exam.questions.map((q, idx) => {
              const ua = result.answers.find((a) => a.questionId === q.id);
              return (
                <div key={q.id} className="px-4 py-3 flex items-center gap-3 text-xs">
                  <span className="font-mono text-gray-400 w-6 text-right">{idx + 1}.</span>
                  {ua?.isCorrect ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                  )}
                  <span className="flex-1 text-gray-700 truncate">{q.question}</span>
                  <span className={`font-bold ${ua?.isCorrect ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {ua?.pointsEarned || 0}/{q.points}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // PHASE: REVIEW (answer key)
  if (phase === 'review' && result) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <button onClick={() => setPhase('result')} className="flex items-center gap-1 text-xs text-gray-500 hover:text-gray-700">
            <ArrowLeft className="w-3.5 h-3.5" /> Kembali ke Hasil
          </button>
          <span className="text-xs font-bold text-gray-600">📋 Kunci Jawaban: {exam.title}</span>
        </div>

        <div className="space-y-3">
          {exam.questions.map((q, idx) => {
            const ua = result.answers.find((a) => a.questionId === q.id);
            return (
              <div key={q.id} className={`bg-white rounded-xl border shadow-sm p-4 ${ua?.isCorrect ? 'border-emerald-200' : 'border-rose-200'}`}>
                <div className="flex items-start gap-2 mb-2">
                  <span className="font-mono text-gray-400 font-bold text-sm">#{idx + 1}</span>
                  {ua?.isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5" /> : <XCircle className="w-4 h-4 text-rose-500 mt-0.5" />}
                  <p className="text-sm text-gray-800 font-medium">{q.question}</p>
                </div>
                <div className="ml-8 space-y-1.5 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-500 shrink-0">Jawaban kamu:</span>
                    <span className={`font-mono font-bold ${ua?.isCorrect ? 'text-emerald-700' : 'text-rose-700'}`}>
                      {ua?.answer !== undefined && ua.answer !== '' ? String(ua.answer) : '(tidak dijawab)'}
                    </span>
                  </div>
                  {!ua?.isCorrect && (
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 shrink-0">Jawaban benar:</span>
                      <span className="font-mono font-bold text-emerald-700">{String(q.correctAnswer)}</span>
                    </div>
                  )}
                  <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 text-blue-800 mt-1">
                    💡 {q.explanation}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // PHASE: TAKING EXAM
  return (
    <div className="space-y-4">
      {/* Exam Header */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-between">
        <div>
          <button onClick={onBack} className="text-[11px] text-gray-400 hover:text-gray-600 flex items-center gap-1 mb-1">
            <ArrowLeft className="w-3 h-3" /> Keluar Ujian
          </button>
          <h2 className="font-bold text-sm text-gray-900">{exam.title}</h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-xs text-gray-500">
            Soal <strong className="text-gray-900">{currentIdx + 1}</strong>/{totalQ}
          </div>
          <div className="text-xs text-gray-400">
            Dijawab: {Object.keys(answers).length}/{totalQ}
          </div>
        </div>
      </div>

      {/* Question Navigation Dots */}
      <div className="bg-white rounded-xl border border-gray-200 px-4 py-2.5 shadow-sm flex items-center gap-1.5 overflow-x-auto">
        {exam.questions.map((q, idx) => {
          const isAnswered = answers[q.id] !== undefined && answers[q.id] !== '';
          const isFlagged = flagged.has(q.id);
          const isCurrent = idx === currentIdx;
          return (
            <button
              key={q.id}
              onClick={() => setCurrentIdx(idx)}
              className={`w-7 h-7 rounded-lg text-[11px] font-bold flex items-center justify-center shrink-0 transition-all relative ${
                isCurrent
                  ? 'bg-[#107c41] text-white ring-2 ring-emerald-300'
                  : isAnswered
                  ? 'bg-emerald-100 text-emerald-800'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {idx + 1}
              {isFlagged && (
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full border border-white" />
              )}
            </button>
          );
        })}
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-5">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono text-gray-400">Soal #{currentIdx + 1} • {question.points} poin</span>
            <button
              onClick={() => toggleFlag(question.id)}
              className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg transition-colors ${
                flagged.has(question.id) ? 'bg-amber-100 text-amber-700 font-bold' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <Flag className="w-3 h-3" />
              <span>{flagged.has(question.id) ? 'Ditandai' : 'Tandai'}</span>
            </button>
          </div>

          <p className="text-sm text-gray-900 font-medium leading-relaxed mb-4">{question.question}</p>

          {/* Data table for formula questions */}
          {question.type === 'formula' && question.columns && question.rows && (
            <div className="mb-4 overflow-x-auto">
              <table className="border-collapse text-xs font-mono border border-gray-300 rounded-lg overflow-hidden">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-2 py-1.5 border border-gray-300 text-gray-500 w-8">#</th>
                    {question.columns.map((col) => (
                      <th key={col.key} className="px-3 py-1.5 border border-gray-300 text-gray-700 min-w-[100px]">
                        <div className="text-[10px] text-gray-400">{col.letter}</div>
                        <div className="font-sans font-semibold text-[11px]">{col.label}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {question.rows.map((row) => (
                    <tr key={row.rowNumber} className="hover:bg-gray-50">
                      <td className="px-2 py-1.5 border border-gray-300 text-gray-500 text-center bg-gray-50">{row.rowNumber}</td>
                      {question.columns!.map((col) => {
                        const cellRef = `${col.letter}${row.rowNumber}`;
                        const isTarget = question.targetCell === cellRef;
                        return (
                          <td
                            key={col.key}
                            className={`px-3 py-1.5 border border-gray-300 ${isTarget ? 'bg-amber-50 font-bold' : ''}`}
                          >
                            {isTarget ? (
                              <span className="text-amber-600 text-[10px]">✎ Jawab di bawah</span>
                            ) : (
                              String(row.values[col.key])
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Answer Input */}
          <div className="space-y-2">
            {question.type === 'multiple_choice' && question.options && (
              <div className="space-y-2">
                {question.options.map((opt, optIdx) => {
                  const isSelected = answers[question.id] === opt;
                  return (
                    <button
                      key={optIdx}
                      onClick={() => setAnswer(question.id, opt)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl border-2 text-sm transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'border-[#107c41] bg-emerald-50 text-emerald-900 font-semibold'
                          : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold shrink-0 ${
                        isSelected ? 'border-[#107c41] bg-[#107c41] text-white' : 'border-gray-300 text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="font-mono">{opt}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {question.type === 'formula' && (
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">
                  Ketik rumus untuk sel {question.targetCell}:
                </label>
                <input
                  type="text"
                  value={answers[question.id] !== undefined ? String(answers[question.id]) : ''}
                  onChange={(e) => setAnswer(question.id, e.target.value)}
                  placeholder={`Contoh: =SUM(B2:B6)`}
                  className="w-full px-4 py-2.5 text-sm font-mono border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#107c41] focus:ring-2 focus:ring-emerald-100 bg-gray-50"
                  spellCheck={false}
                />
              </div>
            )}

            {question.type === 'fill_value' && (
              <div>
                <label className="text-xs font-semibold text-gray-600 block mb-1">Jawaban (angka):</label>
                <input
                  type="text"
                  value={answers[question.id] !== undefined ? String(answers[question.id]) : ''}
                  onChange={(e) => setAnswer(question.id, e.target.value)}
                  placeholder="Ketik jawaban angka..."
                  className="w-full px-4 py-2.5 text-sm font-mono border-2 border-gray-200 rounded-xl focus:outline-none focus:border-[#107c41] focus:ring-2 focus:ring-emerald-100 bg-gray-50"
                />
              </div>
            )}
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="px-5 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
            className="flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 disabled:opacity-40 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Sebelumnya
          </button>

          {currentIdx < totalQ - 1 ? (
            <button
              onClick={() => setCurrentIdx(currentIdx + 1)}
              className="flex items-center gap-1 px-4 py-1.5 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-xs rounded-lg transition-colors"
            >
              Berikutnya <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setShowConfirmSubmit(true)}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs rounded-lg shadow-sm transition-all"
            >
              <Send className="w-3.5 h-3.5" /> Kumpulkan Jawaban
            </button>
          )}
        </div>
      </div>

      {/* Confirm Submit Modal */}
      {showConfirmSubmit && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 text-center space-y-4 animate-fade-in">
            <div className="text-4xl">📝</div>
            <h3 className="text-lg font-bold text-gray-900">Kumpulkan Jawaban?</h3>
            <p className="text-sm text-gray-600">
              Kamu telah menjawab <strong>{Object.keys(answers).length}</strong> dari <strong>{totalQ}</strong> soal.
              {Object.keys(answers).length < totalQ && (
                <span className="text-amber-600 block mt-1">⚠️ Ada {totalQ - Object.keys(answers).length} soal yang belum dijawab.</span>
              )}
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setShowConfirmSubmit(false)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-sm rounded-xl transition-colors"
              >
                Kembali
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-sm rounded-xl shadow-sm transition-all"
              >
                Ya, Kumpulkan!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
