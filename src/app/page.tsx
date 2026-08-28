'use client';

import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { CHAPTERS, MODULES } from '@/lib/curriculum';
import { AppMode, EvaluationResult } from '@/types/simulator';
import { evaluateFormulaValue } from '@/lib/formulaEngine';
import { ExcelHeader } from '@/components/ExcelHeader';
import { InteractiveSheet } from '@/components/InteractiveSheet';
import { MissionPanel } from '@/components/MissionPanel';
import { SandboxView } from '@/components/SandboxView';
import { CheatSheetModal } from '@/components/CheatSheetModal';
import { WelcomeOnboarding } from '@/components/WelcomeOnboarding';
import { ProgressDashboard } from '@/components/ProgressDashboard';
import { LearningRoadmap } from '@/components/LearningRoadmap';
import { FormulaAutocomplete } from '@/components/FormulaAutocomplete';
import { PanelLeftClose, PanelLeftOpen, Play, MapPin } from 'lucide-react';

const STORAGE_KEY = 'excelsimulator_v3_completed_modules';
const ONBOARDING_KEY = 'excelsimulator_v3_onboarded';

export default function HomePage() {
  const [mode, setMode] = useState<AppMode>('learn');
  const [currentModuleIndex, setCurrentModuleIndex] = useState<number>(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  const [activeCell, setActiveCell] = useState<string>('D2');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>('');
  const [cellData, setCellData] = useState<Record<string, string | number>>({});
  const [result, setResult] = useState<EvaluationResult>({ status: 'idle', message: '' });
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isCheatSheetOpen, setIsCheatSheetOpen] = useState<boolean>(false);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);
  const [showRoadmap, setShowRoadmap] = useState<boolean>(false);
  const [chapterMilestone, setChapterMilestone] = useState<string | null>(null);

  const currentModule = MODULES[currentModuleIndex] || MODULES[0];

  // Load progress and check onboarding
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
      const onboarded = localStorage.getItem(ONBOARDING_KEY);
      if (!onboarded) {
        setShowOnboarding(true);
      }
    } catch (e) {
      console.error('Failed to load state', e);
    }
  }, []);

  // Initialize cellData when switching modules
  useEffect(() => {
    const initialData: Record<string, string | number> = {};
    currentModule.rows.forEach((r) => {
      currentModule.columns.forEach((c) => {
        const ref = `${c.letter}${r.rowNumber}`;
        initialData[ref] = r.values[c.key];
      });
    });

    setCellData(initialData);
    setActiveCell(currentModule.targetCell);
    setIsEditing(false);
    setEditValue('');
    setResult({ status: 'idle', message: '' });
  }, [currentModuleIndex, currentModule]);

  const handleSelectModule = useCallback((moduleId: number) => {
    const idx = MODULES.findIndex((m) => m.id === moduleId);
    if (idx !== -1) {
      setCurrentModuleIndex(idx);
      setMode('learn');
      setShowRoadmap(false);
    }
  }, []);

  const handlePrevModule = () => {
    if (currentModuleIndex > 0) setCurrentModuleIndex(currentModuleIndex - 1);
  };

  const handleNextModule = () => {
    if (currentModuleIndex < MODULES.length - 1) setCurrentModuleIndex(currentModuleIndex + 1);
  };

  const handleCellSelect = (cellRef: string) => {
    setActiveCell(cellRef);
    setIsEditing(false);
    setEditValue(cellData[cellRef] !== undefined ? String(cellData[cellRef]) : '');
  };

  const handleStartEdit = (cellRef: string, initialVal: string = '') => {
    setActiveCell(cellRef);
    setIsEditing(true);
    setEditValue(initialVal);
  };

  const handleEditChange = (val: string) => {
    setEditValue(val);
  };

  // Navigate between cells
  const handleNavigate = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    const match = activeCell.match(/^([A-Z]+)(\d+)$/);
    if (!match) return;

    const colLetter = match[1];
    const rowNum = parseInt(match[2], 10);

    const colIdx = currentModule.columns.findIndex((c) => c.letter === colLetter);
    const rowIdx = currentModule.rows.findIndex((r) => r.rowNumber === rowNum);

    let newColIdx = colIdx;
    let newRowIdx = rowIdx;

    switch (direction) {
      case 'up':
        newRowIdx = Math.max(0, rowIdx - 1);
        break;
      case 'down':
        newRowIdx = Math.min(currentModule.rows.length - 1, rowIdx + 1);
        break;
      case 'left':
        newColIdx = Math.max(0, colIdx - 1);
        break;
      case 'right':
        newColIdx = Math.min(currentModule.columns.length - 1, colIdx + 1);
        break;
    }

    if (newColIdx >= 0 && newColIdx < currentModule.columns.length &&
        newRowIdx >= 0 && newRowIdx < currentModule.rows.length) {
      const newCellRef = `${currentModule.columns[newColIdx].letter}${currentModule.rows[newRowIdx].rowNumber}`;
      setActiveCell(newCellRef);
      setIsEditing(false);
      setEditValue(cellData[newCellRef] !== undefined ? String(cellData[newCellRef]) : '');
    }
  }, [activeCell, currentModule, cellData]);

  const handleCommitEdit = (cellRef: string, value: string) => {
    const trimmed = value.trim();
    const updatedData = { ...cellData, [cellRef]: trimmed };
    setCellData(updatedData);
    setIsEditing(false);

    // Evaluate if it's the target cell or any formula
    if (cellRef === currentModule.targetCell || trimmed.startsWith('=')) {
      evaluateUserAnswer(trimmed, updatedData);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditValue(cellData[activeCell] !== undefined ? String(cellData[activeCell]) : '');
  };

  const evaluateUserAnswer = (formula: string, currentData: Record<string, string | number>) => {
    if (!formula.startsWith('=')) {
      setResult({
        status: 'error',
        message: '❌ Rumus Excel harus diawali dengan tanda = (sama dengan).',
      });
      return;
    }

    const openP = (formula.match(/\(/g) || []).length;
    const closeP = (formula.match(/\)/g) || []).length;
    if (openP !== closeP) {
      setResult({
        status: 'error',
        message: `❌ Tanda kurung belum seimbang — kamu punya ${openP} "(" dan ${closeP} ")". ${openP > closeP ? 'Tambahkan ")" di akhir.' : 'Hapus ")" yang berlebih.'}`,
      });
      return;
    }

    const normalizedUser = formula.replace(/\s+/g, '').replace(/;/g, ',').toUpperCase();
    const isCanonicalMatch = currentModule.validFormulas.some(
      (v) => v.replace(/\s+/g, '').replace(/;/g, ',').toUpperCase() === normalizedUser
    );

    const calculated = evaluateFormulaValue(formula, currentData);
    const expected = currentModule.acceptedAnswers[0];

    const isValueMatch =
      calculated !== null &&
      calculated !== undefined &&
      calculated !== '' &&
      String(calculated).trim().toUpperCase() === String(expected).trim().toUpperCase();

    if (isCanonicalMatch || isValueMatch) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#107c41', '#22c55e', '#fbbf24', '#38bdf8', '#a855f7'],
        });
      } catch { /* fallback */ }

      setResult({
        status: 'success',
        message: `🎉 Tepat sekali! Hasilnya ${expected}.`,
        details: currentModule.explanation,
      });

      // Save progress
      if (!completedModules.includes(currentModule.id)) {
        const updated = [...completedModules, currentModule.id];
        setCompletedModules(updated);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch { /* ignore */ }

        // Check chapter milestone
        const chapterId = currentModule.chapterId;
        const chapterModules = MODULES.filter((m) => m.chapterId === chapterId);
        const chapterDone = chapterModules.every((m) => updated.includes(m.id));
        if (chapterDone) {
          const chapter = CHAPTERS.find((c) => c.id === chapterId);
          if (chapter) {
            setChapterMilestone(chapter.title);
            setTimeout(() => setChapterMilestone(null), 6000);
            try {
              confetti({
                particleCount: 150,
                spread: 120,
                origin: { y: 0.5 },
                colors: ['#fbbf24', '#f59e0b', '#107c41', '#22c55e'],
              });
            } catch { /* ignore */ }
          }
        }

        // Check complete milestone
        if (updated.length === MODULES.length) {
          try {
            confetti({
              particleCount: 300,
              spread: 180,
              origin: { y: 0.4 },
            });
          } catch { /* ignore */ }
        }
      }
    } else {
      // Contextual error message
      let errorMsg = `❌ Hasil kalkulasi (${calculated}) belum sesuai target (${expected}).`;
      if (calculated === '' || calculated === null || calculated === undefined) {
        errorMsg = '❌ Rumus tidak menghasilkan nilai. Periksa nama fungsi dan referensi sel.';
      } else if (typeof calculated === 'string' && calculated.startsWith('#')) {
        errorMsg = `❌ Terjadi error: ${calculated}. Periksa penulisan rumus dan referensi sel.`;
      }
      setResult({
        status: 'error',
        message: errorMsg,
      });
    }
  };

  const handleResetProgress = () => {
    if (confirm('Apakah kamu yakin ingin mereset seluruh progres?')) {
      setCompletedModules([]);
      localStorage.removeItem(STORAGE_KEY);
      setResult({ status: 'idle', message: '' });
      setEditValue('');
    }
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    try {
      localStorage.setItem(ONBOARDING_KEY, 'true');
    } catch { /* ignore */ }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 selection:bg-emerald-200 font-sans">
      {/* Onboarding Modal */}
      {showOnboarding && <WelcomeOnboarding onComplete={handleOnboardingComplete} />}

      {/* Chapter Milestone Banner */}
      {chapterMilestone && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-amber-400 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-xl font-bold text-sm flex items-center gap-2">
            🎓 <span>Kamu menyelesaikan {chapterMilestone}! Hebat!</span>
          </div>
        </div>
      )}

      {/* Header */}
      <ExcelHeader
        mode={mode}
        completedCount={completedModules.length}
        totalModules={MODULES.length}
        onSetMode={setMode}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onResetProgress={handleResetProgress}
      />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-4 flex flex-col gap-3">
        {/* Progress Mode */}
        {mode === 'progress' && (
          <ProgressDashboard completedModuleIds={completedModules} />
        )}

        {/* Sandbox Mode */}
        {mode === 'sandbox' && <SandboxView />}

        {/* Learn Mode */}
        {mode === 'learn' && (
          <>
            {/* Learning Roadmap View */}
            {showRoadmap ? (
              <LearningRoadmap
                completedModuleIds={completedModules}
                currentModuleId={currentModule.id}
                onSelectModule={handleSelectModule}
                onClose={() => setShowRoadmap(false)}
              />
            ) : (
              <div className="space-y-3">
                {/* Formula Bar */}
                <div className="bg-white border border-gray-300 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-xs relative">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="text-gray-400 hover:text-[#107c41] p-1 rounded-lg hover:bg-emerald-50 transition-colors shrink-0"
                    title={isSidebarOpen ? 'Sembunyikan Panel' : 'Tampilkan Panel'}
                  >
                    {isSidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
                  </button>

                  <div className="w-14 px-1.5 py-1 bg-gray-50 border border-gray-300 rounded text-center text-[11px] font-bold font-mono text-gray-700">
                    {activeCell}
                  </div>

                  <div className="text-gray-300 font-serif italic font-bold text-sm select-none">fx</div>

                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={isEditing ? editValue : cellData[activeCell] !== undefined ? String(cellData[activeCell]) : ''}
                      onChange={(e) => {
                        setIsEditing(true);
                        setEditValue(e.target.value);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleCommitEdit(activeCell, editValue);
                      }}
                      placeholder={currentModule.samplePlaceholder || 'Ketik rumus di sini...'}
                      className="w-full px-2.5 py-1.5 text-xs font-mono border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107c41] bg-white text-gray-900"
                    />
                    {isEditing && (
                      <FormulaAutocomplete
                        query={editValue}
                        onSelect={(func) => setEditValue(`=${func}(`)}
                      />
                    )}
                  </div>

                  <button
                    onClick={() => handleCommitEdit(activeCell, editValue)}
                    className="px-3 py-1.5 bg-[#107c41] hover:bg-[#0b5c2f] text-white text-[11px] font-bold rounded-lg shadow-xs flex items-center gap-1 transition-all"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span className="hidden sm:inline">Eksekusi</span>
                  </button>

                  <button
                    onClick={() => setShowRoadmap(true)}
                    className="p-1.5 text-gray-400 hover:text-[#107c41] hover:bg-emerald-50 rounded-lg transition-colors shrink-0"
                    title="Lihat Peta Belajar"
                  >
                    <MapPin className="w-4 h-4" />
                  </button>
                </div>

                {/* Split Layout */}
                <div className={`grid gap-3 items-start ${isSidebarOpen ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'}`}>
                  {isSidebarOpen && (
                    <div className="lg:col-span-4 xl:col-span-4">
                      <MissionPanel
                        chapters={CHAPTERS}
                        modules={MODULES}
                        currentModule={currentModule}
                        completedModuleIds={completedModules}
                        result={result}
                        onSelectModule={handleSelectModule}
                        onNextModule={handleNextModule}
                        onPrevModule={handlePrevModule}
                        onSwitchToSandbox={() => setMode('sandbox')}
                        onOpenRoadmap={() => setShowRoadmap(true)}
                        hasNext={currentModuleIndex < MODULES.length - 1}
                        hasPrev={currentModuleIndex > 0}
                      />
                    </div>
                  )}

                  <div className={`${isSidebarOpen ? 'lg:col-span-8 xl:col-span-8' : 'col-span-1'}`}>
                    <InteractiveSheet
                      columns={currentModule.columns}
                      rows={currentModule.rows}
                      targetCell={currentModule.targetCell}
                      targetRowNumber={currentModule.targetRowNumber}
                      totalLabelRow={currentModule.totalLabelRow}
                      cellData={cellData}
                      activeCell={activeCell}
                      isEditing={isEditing}
                      editValue={editValue}
                      result={result}
                      onCellSelect={handleCellSelect}
                      onStartEdit={handleStartEdit}
                      onEditChange={handleEditChange}
                      onCommitEdit={handleCommitEdit}
                      onCancelEdit={handleCancelEdit}
                      onNavigate={handleNavigate}
                    />
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-2 text-center text-[11px] text-gray-400 mt-auto">
        ExcelSimulator v3.0 © {new Date().getFullYear()} • 40 Modul • Sandbox • Peta Belajar
      </footer>

      {/* Cheat Sheet Modal */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}
