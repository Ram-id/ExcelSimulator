'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { LEVELS, TRACKS } from '@/lib/levels';
import { evaluateFormula } from '@/lib/formulaEvaluator';
import { EvaluationResult } from '@/types/simulator';
import { ExcelHeader } from '@/components/ExcelHeader';
import { FormulaBar } from '@/components/FormulaBar';
import { SpreadsheetGrid } from '@/components/SpreadsheetGrid';
import { ScenarioCard } from '@/components/ScenarioCard';
import { TrackSelector } from '@/components/TrackSelector';
import { LevelSelector } from '@/components/LevelSelector';
import { HintModal } from '@/components/HintModal';
import { CheatSheetModal } from '@/components/CheatSheetModal';
import { ResultBanner } from '@/components/ResultBanner';

const STORAGE_KEY = 'excelsimulator_v2_completed_levels';

export default function HomePage() {
  const [currentLevelIndex, setCurrentLevelIndex] = useState<number>(0);
  const [formula, setFormula] = useState<string>('');
  const [activeCell, setActiveCell] = useState<string>('D2');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [result, setResult] = useState<EvaluationResult>({ status: 'idle', message: '' });
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [isHintOpen, setIsHintOpen] = useState<boolean>(false);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);

  const currentLevel = LEVELS[currentLevelIndex];
  const activeTrackId = currentLevel.trackId;

  // Load progress from localStorage
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

  // Update activeCell and clear state when level changes
  useEffect(() => {
    setActiveCell(currentLevel.targetCell);
    setFormula('');
    setResult({ status: 'idle', message: '' });
  }, [currentLevelIndex, currentLevel.targetCell]);

  const handleSelectTrack = (trackId: string) => {
    const firstLevelInTrack = LEVELS.find((l) => l.trackId === trackId);
    if (firstLevelInTrack) {
      const idx = LEVELS.findIndex((l) => l.id === firstLevelInTrack.id);
      if (idx !== -1) {
        setCurrentLevelIndex(idx);
      }
    }
  };

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

    // Smartly append cell reference if user has already begun typing a formula
    if (formula.startsWith('=')) {
      if (/[\(,+\-*\/&]$/.test(formula.trim()) || formula.endsWith(':')) {
        setFormula((prev) => prev + cellRef);
      }
    }
  };

  const handleExecute = () => {
    setIsEvaluating(true);

    const evalResult = evaluateFormula(formula, currentLevel);
    setResult(evalResult);
    setIsEvaluating(false);

    if (evalResult.status === 'success') {
      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#107c41', '#22c55e', '#fbbf24', '#38bdf8', '#a855f7']
        });
      } catch (e) {
        // Fallback
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
    if (confirm('Apakah kamu yakin ingin mereset seluruh progres pembelajaran kamu?')) {
      setCompletedLevels([]);
      localStorage.removeItem(STORAGE_KEY);
      setResult({ status: 'idle', message: '' });
      setFormula('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 selection:bg-emerald-200">
      {/* Excel Ribbon Header */}
      <ExcelHeader
        completedLevels={completedLevels}
        totalLevels={LEVELS.length}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onResetProgress={handleResetProgress}
      />

      {/* Interactive Formula Bar with Live Tooltip */}
      <FormulaBar
        activeCell={activeCell}
        formula={formula}
        placeholder={currentLevel.samplePlaceholder}
        isEvaluating={isEvaluating}
        onFormulaChange={setFormula}
        onSubmit={handleExecute}
        onClear={() => setFormula('')}
      />

      {/* Main Educational Workspace */}
      <main className="flex-1 max-w-6xl w-full mx-auto p-4 md:p-6 space-y-5">
        {/* Track Curriculum Navigation */}
        <TrackSelector
          tracks={TRACKS}
          activeTrackId={activeTrackId}
          completedLevels={completedLevels}
          onSelectTrack={handleSelectTrack}
        />

        {/* Active Scenario & Theory Card */}
        <ScenarioCard
          level={currentLevel}
          onOpenHint={() => setIsHintOpen(true)}
          onPrevLevel={handlePrevLevel}
          onNextLevel={handleNextLevel}
          hasPrev={currentLevelIndex > 0}
          hasNext={currentLevelIndex < LEVELS.length - 1}
        />

        {/* Feedback Result Banner */}
        <ResultBanner
          result={result}
          onNextLevel={handleNextLevel}
          hasNextLevel={currentLevelIndex < LEVELS.length - 1}
        />

        {/* Spreadsheet Data Grid */}
        <SpreadsheetGrid
          level={currentLevel}
          activeCell={activeCell}
          result={result}
          onCellClick={handleCellClick}
        />

        {/* Track Modules & Level Selector */}
        <LevelSelector
          levels={LEVELS}
          currentLevelId={currentLevel.id}
          completedLevels={completedLevels}
          activeTrackId={activeTrackId}
          onSelectLevel={handleSelectLevel}
        />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        <p>
          ExcelSimulator © {new Date().getFullYear()} • Kurikulum Belajar Rumus Excel Interaktif untuk Pemula • Siap di-deploy di Vercel
        </p>
      </footer>

      {/* Modals */}
      <HintModal
        isOpen={isHintOpen}
        level={currentLevel}
        onClose={() => setIsHintOpen(false)}
      />

      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}
