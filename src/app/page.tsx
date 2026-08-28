'use client';

import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { LEVELS } from '@/lib/levels';
import { evaluateFormula } from '@/lib/formulaEvaluator';
import { EvaluationResult } from '@/types/simulator';
import { ExcelHeader } from '@/components/ExcelHeader';
import { FormulaBar } from '@/components/FormulaBar';
import { SpreadsheetGrid } from '@/components/SpreadsheetGrid';
import { ScenarioCard } from '@/components/ScenarioCard';
import { LevelSelector } from '@/components/LevelSelector';
import { HintModal } from '@/components/HintModal';
import { ResultBanner } from '@/components/ResultBanner';

const STORAGE_KEY = 'excelsimulator_completed_levels';

export default function HomePage() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [formula, setFormula] = useState<string>('');
  const [activeCell, setActiveCell] = useState<string>('D5');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [result, setResult] = useState<EvaluationResult>({ status: 'idle', message: '' });
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [isHintOpen, setIsHintOpen] = useState<boolean>(false);

  const currentLevel = LEVELS[currentLevelIndex];

  // Load completed levels from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompletedLevels(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
  }, []);

  // Update activeCell and clear formula when level changes
  useEffect(() => {
    setActiveCell(currentLevel.targetCell);
    setFormula('');
    setResult({ status: 'idle', message: '' });
  }, [currentLevelIndex, currentLevel.targetCell]);

  const handleSelectLevel = (levelId: number) => {
    const idx = LEVELS.findIndex((l) => l.id === levelId);
    if (idx !== -1) {
      setCurrentLevelIndex(idx);
    }
  };

  const handlePrevLevel = () => {
    if (currentLevelIndex > 0) {
      setCurrentLevelIndex(currentLevelIndex - 1);
    }
  };

  const handleNextLevel = () => {
    if (currentLevelIndex < LEVELS.length - 1) {
      setCurrentLevelIndex(currentLevelIndex + 1);
    }
  };

  const handleCellClick = (cellRef: string) => {
    setActiveCell(cellRef);

    // If formula is already started, smartly append or insert cellRef
    if (formula.startsWith('=')) {
      // If formula ends with an open parenthesis or comma or operator, append cellRef
      if (/[\(,+\-*\/]$/.test(formula.trim())) {
        setFormula(prev => prev + cellRef);
      } else if (formula.endsWith(':')) {
        setFormula(prev => prev + cellRef);
      }
    }
  };

  const handleExecute = () => {
    setIsEvaluating(true);

    const evalResult = evaluateFormula(formula, currentLevel);
    setResult(evalResult);
    setIsEvaluating(false);

    if (evalResult.status === 'success') {
      // Trigger confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#107c41', '#22c55e', '#fbbf24', '#38bdf8']
        });
      } catch (e) {
        // Safe fallback if confetti isn't available
      }

      // Mark level as completed
      if (!completedLevels.includes(currentLevel.id)) {
        const updated = [...completedLevels, currentLevel.id];
        setCompletedLevels(updated);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (e) {
          console.error('Failed to save to localStorage', e);
        }
      }
    }
  };

  const handleResetProgress = () => {
    if (confirm('Apakah kamu yakin ingin mereset seluruh progress level?')) {
      setCompletedLevels([]);
      localStorage.removeItem(STORAGE_KEY);
      setResult({ status: 'idle', message: '' });
      setFormula('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 selection:bg-emerald-200">
      {/* Excel Title & Ribbon Header */}
      <ExcelHeader
        completedLevels={completedLevels}
        totalLevels={LEVELS.length}
        onResetProgress={handleResetProgress}
      />

      {/* Formula Bar */}
      <FormulaBar
        activeCell={activeCell}
        formula={formula}
        placeholder={currentLevel.samplePlaceholder}
        isEvaluating={isEvaluating}
        onFormulaChange={setFormula}
        onSubmit={handleExecute}
        onClear={() => setFormula('')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 space-y-5">
        {/* Scenario & Objective Card */}
        <ScenarioCard
          level={currentLevel}
          onOpenHint={() => setIsHintOpen(true)}
          onPrevLevel={handlePrevLevel}
          onNextLevel={handleNextLevel}
          hasPrev={currentLevelIndex > 0}
          hasNext={currentLevelIndex < LEVELS.length - 1}
        />

        {/* Result & Feedback Notification */}
        <ResultBanner
          result={result}
          onNextLevel={handleNextLevel}
          hasNextLevel={currentLevelIndex < LEVELS.length - 1}
        />

        {/* Interactive Spreadsheet Grid */}
        <SpreadsheetGrid
          level={currentLevel}
          activeCell={activeCell}
          result={result}
          onCellClick={handleCellClick}
        />

        {/* Level Selector & Progression */}
        <LevelSelector
          levels={LEVELS}
          currentLevelId={currentLevel.id}
          completedLevels={completedLevels}
          onSelectLevel={handleSelectLevel}
        />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        <p>
          ExcelSimulator © {new Date().getFullYear()} • Dirancang untuk latihan rumus spreadsheet interaktif • Siap di-deploy di Vercel
        </p>
      </footer>

      {/* Hint Modal */}
      <HintModal
        isOpen={isHintOpen}
        level={currentLevel}
        onClose={() => setIsHintOpen(false)}
      />
    </div>
  );
}
