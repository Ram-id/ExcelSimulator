'use client';

import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { CHAPTERS, MODULES } from '@/lib/curriculum';
import { EXAMS } from '@/lib/examBank';
import { AppMode, EvaluationResult, UserSession, ExamResult } from '@/types/simulator';
import { evaluateFormulaValue } from '@/lib/formulaEngine';
import { getSession, logout as doLogout, getUserData, setUserData } from '@/lib/auth';
import { ExcelHeader } from '@/components/ExcelHeader';
import { InteractiveSheet } from '@/components/InteractiveSheet';
import { MissionPanel } from '@/components/MissionPanel';
import { SandboxView } from '@/components/SandboxView';
import { CheatSheetModal } from '@/components/CheatSheetModal';
import { WelcomeOnboarding } from '@/components/WelcomeOnboarding';
import { ProgressDashboard } from '@/components/ProgressDashboard';
import { LearningRoadmap } from '@/components/LearningRoadmap';
import { FormulaAutocomplete } from '@/components/FormulaAutocomplete';
import { AuthScreen } from '@/components/AuthScreen';
import { ExamSelector } from '@/components/ExamSelector';
import { ExamMode } from '@/components/ExamMode';
import { Certificate } from '@/components/Certificate';
import { PanelLeftClose, PanelLeftOpen, Play, MapPin } from 'lucide-react';

export default function HomePage() {
  // Auth state
  const [session, setSession] = useState<UserSession | null>(null);
  const [authChecked, setAuthChecked] = useState(false);

  // App state
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

  // Exam state
  const [examResults, setExamResults] = useState<Record<string, ExamResult>>({});
  const [activeExamId, setActiveExamId] = useState<string | null>(null);
  const [viewingResultExamId, setViewingResultExamId] = useState<string | null>(null);
  const [certificateExamId, setCertificateExamId] = useState<string | null>(null);

  const currentModule = MODULES[currentModuleIndex] || MODULES[0];

  // Check session on mount
  useEffect(() => {
    const existing = getSession();
    if (existing) {
      setSession(existing);
    }
    setAuthChecked(true);
  }, []);

  // Load user data when session changes
  useEffect(() => {
    if (!session) return;
    const u = session.username;
    setCompletedModules(getUserData<number[]>(u, 'modules', []));
    setExamResults(getUserData<Record<string, ExamResult>>(u, 'exams', {}));
    const onboarded = getUserData<boolean>(u, 'onboarded', false);
    if (!onboarded) setShowOnboarding(true);
  }, [session]);

  // Initialize cellData when module changes
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

  // Helpers to save user-namespaced data
  const saveModules = useCallback((modules: number[]) => {
    if (!session) return;
    setCompletedModules(modules);
    setUserData(session.username, 'modules', modules);
  }, [session]);

  const saveExamResults = useCallback((results: Record<string, ExamResult>) => {
    if (!session) return;
    setExamResults(results);
    setUserData(session.username, 'exams', results);
  }, [session]);

  // Master Actions (Only available for Master Account)
  const handleUnlockAllModules = useCallback(() => {
    if (!session?.isMaster) return;
    const allIds = MODULES.map((m) => m.id);
    saveModules(allIds);
    try {
      confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 } });
    } catch { /* ignore */ }
    alert('👑 Akses Master: Seluruh 40 modul pembelajaran telah dibuka & ditandai selesai!');
  }, [session, saveModules]);

  const handleUnlockAllExams = useCallback(() => {
    if (!session?.isMaster) return;
    const results: Record<string, ExamResult> = {};
    EXAMS.forEach((exam) => {
      results[exam.id] = {
        examId: exam.id,
        score: exam.totalPoints,
        totalPoints: exam.totalPoints,
        percentage: 100,
        passed: true,
        answers: exam.questions.map((q) => ({
          questionId: q.id,
          answer: String(q.correctAnswer),
          isCorrect: true,
          pointsEarned: q.points,
        })),
        completedAt: new Date().toISOString(),
        predikat: 'Sangat Baik',
      };
    });
    saveExamResults(results);
    try {
      confetti({ particleCount: 200, spread: 120, origin: { y: 0.5 } });
    } catch { /* ignore */ }
    alert('👑 Akses Master: Seluruh 7 ujian (termasuk Ujian Akhir) telah lulus dengan skor 100% dan sertifikat siap diunduh!');
  }, [session, saveExamResults]);

  // Auth handlers
  const handleAuthSuccess = (s: UserSession) => {
    setSession(s);
  };

  const handleLogout = () => {
    if (confirm('Keluar dari akun?')) {
      doLogout();
      setSession(null);
      setMode('learn');
      setCompletedModules([]);
      setExamResults({});
      setActiveExamId(null);
      setViewingResultExamId(null);
      setCertificateExamId(null);
    }
  };

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    if (session) setUserData(session.username, 'onboarded', true);
  };

  // Module navigation
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

  // Cell interactions
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
  const handleEditChange = (val: string) => setEditValue(val);
  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditValue(cellData[activeCell] !== undefined ? String(cellData[activeCell]) : '');
  };

  const handleNavigate = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    const match = activeCell.match(/^([A-Z]+)(\d+)$/);
    if (!match) return;
    const colLetter = match[1];
    const rowNum = parseInt(match[2], 10);
    const colIdx = currentModule.columns.findIndex((c) => c.letter === colLetter);
    const rowIdx = currentModule.rows.findIndex((r) => r.rowNumber === rowNum);
    let nc = colIdx, nr = rowIdx;
    if (direction === 'up') nr = Math.max(0, rowIdx - 1);
    else if (direction === 'down') nr = Math.min(currentModule.rows.length - 1, rowIdx + 1);
    else if (direction === 'left') nc = Math.max(0, colIdx - 1);
    else if (direction === 'right') nc = Math.min(currentModule.columns.length - 1, colIdx + 1);
    if (nc >= 0 && nc < currentModule.columns.length && nr >= 0 && nr < currentModule.rows.length) {
      const ref = `${currentModule.columns[nc].letter}${currentModule.rows[nr].rowNumber}`;
      setActiveCell(ref);
      setIsEditing(false);
      setEditValue(cellData[ref] !== undefined ? String(cellData[ref]) : '');
    }
  }, [activeCell, currentModule, cellData]);

  const handleCommitEdit = (cellRef: string, value: string) => {
    const trimmed = value.trim();
    const updatedData = { ...cellData, [cellRef]: trimmed };
    setCellData(updatedData);
    setIsEditing(false);
    if (cellRef === currentModule.targetCell || trimmed.startsWith('=')) {
      evaluateUserAnswer(trimmed, updatedData);
    }
  };

  const evaluateUserAnswer = (formula: string, currentData: Record<string, string | number>) => {
    if (!formula.startsWith('=')) {
      setResult({ status: 'error', message: '❌ Rumus Excel harus diawali dengan tanda = (sama dengan).' });
      return;
    }
    const openP = (formula.match(/\(/g) || []).length;
    const closeP = (formula.match(/\)/g) || []).length;
    if (openP !== closeP) {
      setResult({ status: 'error', message: `❌ Tanda kurung belum seimbang — ${openP} "(" dan ${closeP} ")".` });
      return;
    }
    const normalizedUser = formula.replace(/\s+/g, '').replace(/;/g, ',').toUpperCase();
    const isCanonicalMatch = currentModule.validFormulas.some(
      (v) => v.replace(/\s+/g, '').replace(/;/g, ',').toUpperCase() === normalizedUser
    );
    const calculated = evaluateFormulaValue(formula, currentData);
    const expected = currentModule.acceptedAnswers[0];
    const isValueMatch = calculated !== null && calculated !== undefined && calculated !== '' &&
      String(calculated).trim().toUpperCase() === String(expected).trim().toUpperCase();

    if (isCanonicalMatch || isValueMatch) {
      try { confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, colors: ['#107c41', '#22c55e', '#fbbf24', '#38bdf8', '#a855f7'] }); } catch { /* */ }
      setResult({ status: 'success', message: `🎉 Tepat sekali! Hasilnya ${expected}.`, details: currentModule.explanation });
      if (!completedModules.includes(currentModule.id)) {
        const updated = [...completedModules, currentModule.id];
        saveModules(updated);
        // Chapter milestone
        const chId = currentModule.chapterId;
        const chMods = MODULES.filter((m) => m.chapterId === chId);
        if (chMods.every((m) => updated.includes(m.id))) {
          const ch = CHAPTERS.find((c) => c.id === chId);
          if (ch) { setChapterMilestone(ch.title); setTimeout(() => setChapterMilestone(null), 6000); }
        }
      }
    } else {
      let msg = `❌ Hasil (${calculated}) belum sesuai target (${expected}).`;
      if (!calculated && calculated !== 0) msg = '❌ Rumus tidak menghasilkan nilai. Periksa penulisan.';
      setResult({ status: 'error', message: msg });
    }
  };

  const handleResetProgress = () => {
    if (confirm('Reset seluruh progres akun ini? (modul & ujian)')) {
      saveModules([]);
      saveExamResults({});
      setResult({ status: 'idle', message: '' });
    }
  };

  // Exam handlers
  const handleStartExam = (examId: string) => {
    setActiveExamId(examId);
    setViewingResultExamId(null);
  };

  const handleExamFinish = (examResult: ExamResult) => {
    const existing = examResults[examResult.examId];
    // Keep best score
    if (!existing || examResult.percentage > existing.percentage) {
      const updated = { ...examResults, [examResult.examId]: examResult };
      saveExamResults(updated);
    }
  };

  const handleViewResult = (examId: string) => {
    setActiveExamId(examId);
    setViewingResultExamId(examId);
  };

  // Compute chapter module counts for exam unlock logic
  const chapterModuleCounts: Record<number, { total: number; completed: number }> = {};
  CHAPTERS.forEach((ch) => {
    const chMods = MODULES.filter((m) => m.chapterId === ch.id);
    chapterModuleCounts[ch.id] = {
      total: chMods.length,
      completed: chMods.filter((m) => completedModules.includes(m.id)).length,
    };
  });

  // Render Auth Screen if not logged in
  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-400 text-sm">Memuat...</div>
      </div>
    );
  }

  if (!session) {
    return <AuthScreen onAuthSuccess={handleAuthSuccess} />;
  }

  // Active exam
  const activeExam = activeExamId ? EXAMS.find((e) => e.id === activeExamId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-100 text-slate-900 selection:bg-emerald-200 font-sans">
      {showOnboarding && <WelcomeOnboarding onComplete={handleOnboardingComplete} />}

      {chapterMilestone && (
        <div className="fixed top-16 left-1/2 -translate-x-1/2 z-50 animate-fade-in">
          <div className="bg-gradient-to-r from-amber-400 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-xl font-bold text-sm">
            🎓 Kamu menyelesaikan {chapterMilestone}! Hebat!
          </div>
        </div>
      )}

      {/* Certificate Modal */}
      {certificateExamId && (() => {
        const cExam = EXAMS.find((e) => e.id === certificateExamId);
        const cResult = examResults[certificateExamId];
        if (cExam && cResult && cResult.passed) {
          return (
            <Certificate
              exam={cExam}
              examResult={cResult}
              displayName={session.displayName}
              username={session.username}
              onClose={() => setCertificateExamId(null)}
            />
          );
        }
        return null;
      })()}

      <ExcelHeader
        mode={mode}
        completedCount={completedModules.length}
        totalModules={MODULES.length}
        session={session}
        onSetMode={(m) => { setMode(m); setActiveExamId(null); }}
        onOpenCheatSheet={() => setIsCheatSheetOpen(true)}
        onResetProgress={handleResetProgress}
        onLogout={handleLogout}
        onUnlockAllModules={handleUnlockAllModules}
        onUnlockAllExams={handleUnlockAllExams}
      />

      <div className="flex-1 max-w-7xl w-full mx-auto p-3 sm:p-4 flex flex-col gap-3">
        {/* PROGRESS MODE */}
        {mode === 'progress' && <ProgressDashboard completedModuleIds={completedModules} />}

        {/* SANDBOX MODE */}
        {mode === 'sandbox' && <SandboxView />}

        {/* EXAM MODE */}
        {mode === 'exam' && (
          <>
            {activeExam ? (
              <ExamMode
                exam={activeExam}
                existingResult={viewingResultExamId ? examResults[viewingResultExamId] : undefined}
                onFinish={handleExamFinish}
                onBack={() => { setActiveExamId(null); setViewingResultExamId(null); }}
              />
            ) : (
              <ExamSelector
                exams={EXAMS}
                examResults={examResults}
                completedModuleIds={completedModules}
                chapterModuleCounts={chapterModuleCounts}
                isMaster={session.isMaster}
                onStartExam={handleStartExam}
                onViewResult={handleViewResult}
                onViewCertificate={(examId) => setCertificateExamId(examId)}
              />
            )}
          </>
        )}

        {/* LEARN MODE */}
        {mode === 'learn' && (
          <>
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
                      onChange={(e) => { setIsEditing(true); setEditValue(e.target.value); }}
                      onKeyDown={(e) => { if (e.key === 'Enter') handleCommitEdit(activeCell, editValue); }}
                      placeholder={currentModule.samplePlaceholder || 'Ketik rumus di sini...'}
                      className="w-full px-2.5 py-1.5 text-xs font-mono border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107c41] bg-white text-gray-900"
                    />
                    {isEditing && <FormulaAutocomplete query={editValue} onSelect={(func) => setEditValue(`=${func}(`)} />}
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
                    title="Peta Belajar"
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

      <footer className="bg-white border-t border-gray-200 py-2 text-center text-[11px] text-gray-400 mt-auto">
        ExcelSimulator v4.0 © {new Date().getFullYear()} • {session.displayName} {session.isMaster ? '👑' : ''} • 40 Modul • 7 Ujian • Sertifikat
      </footer>

      <CheatSheetModal isOpen={isCheatSheetOpen} onClose={() => setIsCheatSheetOpen(false)} />
    </div>
  );
}
