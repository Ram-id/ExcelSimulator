'use client';

import React, { useRef, useEffect } from 'react';
import { Play, CornerDownLeft, X, FunctionSquare } from 'lucide-react';

interface FormulaBarProps {
  activeCell: string;
  formula: string;
  placeholder?: string;
  isEvaluating: boolean;
  onFormulaChange: (value: string) => void;
  onSubmit: () => void;
  onClear: () => void;
}

export const FormulaBar: React.FC<FormulaBarProps> = ({
  activeCell,
  formula,
  placeholder = "=SUM(D2:D4)",
  isEvaluating,
  onFormulaChange,
  onSubmit,
  onClear,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center gap-2 shadow-xs">
      {/* Active Cell Box (Name Box) */}
      <div className="w-16 sm:w-20 px-2 py-1.5 bg-gray-50 border border-gray-300 rounded text-center text-xs font-bold font-mono text-gray-700 shadow-inner">
        {activeCell}
      </div>

      {/* Function FX symbol */}
      <div className="flex items-center text-gray-400 px-1 font-serif italic font-bold text-sm select-none">
        <span className="text-gray-500 font-sans not-italic text-xs font-bold mr-1">fx</span>
      </div>

      {/* Formula Input */}
      <div className="flex-1 relative flex items-center">
        <input
          ref={inputRef}
          type="text"
          value={formula}
          onChange={(e) => onFormulaChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-3 pr-8 py-1.5 text-sm font-mono border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#107c41] focus:border-transparent transition-all shadow-xs bg-white text-gray-900"
          spellCheck={false}
          autoComplete="off"
        />

        {formula && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-2 text-gray-400 hover:text-gray-600 p-1 rounded transition-colors"
            title="Hapus formula"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Action Button */}
      <button
        type="button"
        onClick={onSubmit}
        disabled={isEvaluating}
        className="flex items-center gap-1.5 px-4 py-1.5 bg-[#107c41] hover:bg-[#0b5c2f] disabled:bg-gray-400 text-white font-medium text-xs rounded-md shadow-sm transition-all hover:shadow cursor-pointer active:scale-98"
      >
        <Play className="w-3.5 h-3.5 fill-current" />
        <span>{isEvaluating ? 'Mengevaluasi...' : 'Eksekusi'}</span>
        <span className="hidden sm:inline text-[10px] opacity-75 bg-emerald-900/50 px-1 py-0.2 rounded ml-0.5">↵</span>
      </button>
    </div>
  );
};
