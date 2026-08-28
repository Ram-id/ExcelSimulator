'use client';

import React from 'react';
import { LevelData } from '@/types/simulator';
import { Lightbulb, X, BookOpen } from 'lucide-react';

interface HintModalProps {
  isOpen: boolean;
  level: LevelData;
  onClose: () => void;
}

export const HintModal: React.FC<HintModalProps> = ({
  isOpen,
  level,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
      <div className="bg-white rounded-xl max-w-md w-full shadow-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="bg-emerald-800 text-white px-5 py-3.5 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lightbulb className="w-5 h-5 text-yellow-300" />
            <h3 className="font-bold text-sm">Petunjuk & Bantuan Rumus</h3>
          </div>
          <button
            onClick={onClose}
            className="text-emerald-200 hover:text-white p-1 rounded transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-4">
          <div>
            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Langkah Penyelesaian
            </h4>
            <ul className="space-y-2 text-xs text-gray-700">
              {level.hints.map((hint, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-100">
                  <span className="bg-[#107c41] text-white rounded-full w-4 h-4 flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{hint}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div className="flex items-center gap-1.5 text-gray-800 font-bold text-xs mb-1">
              <BookOpen className="w-3.5 h-3.5 text-[#107c41]" />
              <span>Contoh Format Penulisan:</span>
            </div>
            <code className="text-xs font-mono font-bold text-[#107c41] bg-white px-2 py-1 rounded border border-gray-200 inline-block">
              {level.samplePlaceholder}
            </code>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-5 py-3 border-t border-gray-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#107c41] hover:bg-[#0b5c2f] text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
          >
            Mengerti, Coba Lagi
          </button>
        </div>
      </div>
    </div>
  );
};
