'use client';

import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CHAPTERS, MODULES } from '@/lib/curriculum';
import { AppMode, ModuleData, EvaluationResult } from '@/types/simulator';
import { evaluateFormulaValue } from '@/lib/formulaEngine';
import { ExcelHeader } from '@/components/ExcelHeader';
import { InteractiveSheet } from '@/components/InteractiveSheet';
import { MissionPanel } from '@/components/MissionPanel';
import { SandboxView } from '@/components/SandboxView';
import { CheatSheetModal } from '@/components/CheatSheetModal';
import { PanelLeftClose, PanelLeftOpen, Play, X } from 'lucide-react';
import { FormulaAutocomplete } from '@/components/FormulaAutocomplete';

const STORAGE_KEY = 'excelsimulator_v3_completed_modules';

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

  const currentModule = MODULES[currentModuleIndex] || MODULES[0];

  // Load progress from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setCompletedModules(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load progress', e);
    }
  }, []);

  // Initialize cellData and target cell when switching modules
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

  const handleSelectModule = (moduleId: number) => {
    const idx = MODULES.findIndex((m) => m.id === moduleId);
    if (idx !== -1) {
      setCurrentModuleIndex(idx);
    }
  };

  const handlePrevModule = () => {
    if (currentModuleIndex > 0) {
      setCurrentModuleIndex(currentModuleIndex - 1);
    }
  };

  const handleNextModule = () => {
    if (currentModuleIndex < MODULES.length - 1) {
      setCurrentModuleIndex(currentModuleIndex + 1);
    }
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

  const handleCommitEdit = (cellRef: string, value: string) => {
    const trimmed = value.trim();
    const updatedData = { ...cellData, [cellRef]: trimmed };
    setCellData(updatedData);
    setIsEditing(false);

    // Evaluate module objective if editing target cell or formula entered
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
        message: '❌ Rumus Excel wajib diawali dengan tanda sama dengan (=).',
      });
      return;
    }

    // Check balanced parentheses
    const openP = (formula.match(/\(/g) || []).length;
    const closeP = (formula.match(/\)/g) || []).length;
    if (openP !== closeP) {
      setResult({
        status: 'error',
        message: '❌ Tanda kurung buka "(" dan kurung tutup ")" belum seimbang.',
      });
      return;
    }

    // Normalize formula strings for canonical check
    const normalizedUser = formula.replace(/\s+/g, '').replace(/;/g, ',').toUpperCase();
    const isCanonicalMatch = currentModule.validFormulas.some(
      (v) => v.replace(/\s+/g, '').replace(/;/g, ',').toUpperCase() === normalizedUser
    );

    // Evaluate dynamic value in calculation engine
    const calculated = evaluateFormulaValue(formula, currentData);
    const expected = currentModule.acceptedAnswers[0];

    const isValueMatch =
      calculated !== null &&
      calculated !== undefined &&
      calculated !== '' &&
      String(calculated).trim().toUpperCase() === String(expected).trim().toUpperCase();

    if (isCanonicalMatch || isValueMatch) {
      // Trigger celebration
      try {
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#107c41', '#22c55e', '#fbbf24', '#38bdf8', '#a855f7'],
        });
      } catch (e) {
        // Fallback
      }

      setResult({
        status: 'success',
        message: `🎉 Tepat sekali! Rumus berhasil menghasilkan nilai ${expected}.`,
        details: currentModule.explanation,
      });

      // Save to completed modules
      if (!completedModules.includes(currentModule.id)) {
        const updated = [...completedModules, currentModule.id];
        setCompletedModules(updated);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        } catch (e) {
          console.error('Failed to save to localStorage', e);
        }
      }
    } else {
      setResult({
        status: 'error',
        message: `❌ Hasil kalkulasi (${calculated}) belum sesuai target (${expected}). Periksa rumus atau lihat Petunjuk!`,
      });
    }
  };

  const handleResetProgress = () => {
    if (confirm('Apakah kamu yakin ingin mereset seluruh progres pembelajaran kamu?')) {
      setCompletedModules([]);
      localStorage.removeItem(STORAGE_KEY);
      setResult({ status: 'idle', message: '' });
      setEditValue('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 selection:bg-emerald-200 font-sans">
      {/* Clean Minimalist Header */}
      <ExcelHeader
        mode={mode}
        completedCount={completedModules.length}
        totalModules={MODULES.length}
        onSetMode={setMode}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onResetProgress={handleResetProgress}
      />

      {/* Main Container */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-5 flex flex-col gap-4">
        {mode === 'sandbox' ? (
          // Sandbox Free-Play View
          <SandboxView />
        ) : (
          // Guided Learning Mode View
          <div className="space-y-3">
            {/* Top Compact Formula Bar */}
            <div className="bg-white border border-gray-300 rounded-xl px-4 py-2 flex items-center gap-2 shadow-xs relative">
              {/* Sidebar toggle button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="text-gray-500 hover:text-[#107c41] p-1.5 rounded-lg hover:bg-emerald-50 transition-colors shrink-0"
                title={isSidebarOpen ? 'Sembunyikan Panel Misi' : 'Tampilkan Panel Misi'}
              >
                {isSidebarOpen ? <PanelLeftClose className="w-4 h-4" /> : <PanelLeftOpen className="w-4 h-4" />}
              </button>

              {/* Name box (Active Cell) */}
              <div className="w-16 px-2 py-1.5 bg-gray-50 border border-gray-300 rounded text-center text-xs font-bold font-mono text-gray-700 shadow-inner">
                {activeCell}
              </div>

              {/* FX Icon */}
              <div className="text-gray-400 font-serif italic font-bold text-sm select-none px-1">fx</div>

              {/* Formula Input */}
              <div className="flex-1 relative flex items-center">
                <input
                  type="text"
                  value={isEditing ? editValue : cellData[activeCell] !== undefined ? String(cellData[activeCell]) : ''}
                  onChange={(e) => {
                    setIsEditing(true);
                    setEditValue(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleCommitEdit(activeCell, editValue);
                    }
                  }}
                  placeholder={currentModule.samplePlaceholder || 'Ketik rumus di sini...'}
                  className="w-full px-3 py-1.5 text-xs font-mono border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107c41] bg-white text-gray-900"
                />

                {isEditing && (
                  <FormulaAutocomplete
                    query={editValue}
                    onSelect={(func) => setEditValue(`=${func}(`)}
                  />
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleCommitEdit(activeCell, editValue)}
                className="px-4 py-1.5 bg-[#107c41] hover:bg-[#0b5c2f] text-white text-xs font-bold rounded-lg shadow-sm flex items-center gap-1 cursor-pointer transition-all active:scale-98"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Eksekusi</span>
              </button>
            </div>

            {/* Split Workspace: Left Mission Sidebar + Right Interactive Sheet */}
            <div className={`grid gap-4 items-start ${isSidebarOpen ? 'grid-cols-1 lg:grid-cols-12' : 'grid-cols-1'}`}>
              {/* Mission & Guidance Sidebar */}
              {isSidebarOpen && (
                <div className="lg:col-span-4 xl:col-span-4 space-y-3">
                  <MissionPanel
                    chapters={CHAPTERS}
                    modules={MODULES}
                    currentModule={currentModule}
                    completedModuleIds={completedModules}
                    result={result}
                    onSelectModule={handleSelectModule}
                    onNextModule={handleNextModule}
                    onPrevModule={handlePrevModule}
                    hasNext={currentModuleIndex < MODULES.length - 1}
                    hasPrev={currentModuleIndex > 0}
                  />
                </div>
              )}

              {/* Main Interactive Spreadsheet Grid */}
              <div className={`${isSidebarOpen ? 'lg:col-span-8 xl:col-span-8' : 'col-span-1'} space-y-3`}>
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
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Clean Footer */}
      <footer className="bg-white border-t border-gray-200 py-3 text-center text-xs text-gray-500 mt-auto">
        <p>ExcelSimulator © {new Date().getFullYear()} • 40 Modul Belajar & Sandbox Spreadsheet Interaktif</p>
      </footer>

      {/* Kamus Rumus Modal */}
      <CheatSheetModal
        isOpen={isCheatSheetOpen}
        onClose={() => setIsCheatSheetOpen(false)}
      />
    </div>
  );
}
