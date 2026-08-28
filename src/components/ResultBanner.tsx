'use client';

import React from 'react';
import { EvaluationResult } from '@/types/simulator';
import { CheckCircle2, AlertCircle, Sparkles, ArrowRight, BookOpen } from 'lucide-react';

interface ResultBannerProps {
  result: EvaluationResult;
  onNextLevel?: () => void;
  hasNextLevel: boolean;
}

export const ResultBanner: React.FC<ResultBannerProps> = ({
  result,
  onNextLevel,
  hasNextLevel,
}) => {
  if (result.status === 'idle') return null;

  const isSuccess = result.status === 'success';

  return (
    <div
      className={`rounded-xl p-4 border transition-all shadow-sm ${
        isSuccess
          ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
          : 'bg-rose-50 border-rose-300 text-rose-950'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start space-x-3">
          <div className="shrink-0 mt-0.5">
            {isSuccess ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 animate-bounce" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-600" />
            )}
          </div>
          <div className="space-y-1">
            <div className="font-bold text-sm">{result.message}</div>
            {result.details && (
              <div className="text-xs text-emerald-800 flex items-start gap-1.5 mt-1 bg-emerald-100/60 p-2.5 rounded-lg border border-emerald-200">
                <BookOpen className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-emerald-900">Penjelasan: </strong>
                  {result.details}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Next Level Button on Success */}
        {isSuccess && hasNextLevel && onNextLevel && (
          <button
            onClick={onNextLevel}
            className="flex items-center justify-center gap-1.5 px-4 py-2 bg-[#107c41] hover:bg-[#0b5c2f] text-white text-xs font-bold rounded-lg shadow-md hover:shadow-lg transition-all shrink-0 cursor-pointer active:scale-98"
          >
            <span>Lanjut Level Berikutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
