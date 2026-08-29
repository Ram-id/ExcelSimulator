'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import confetti from 'canvas-confetti';
import {
  CaseExamData,
  CaseExamResult,
  CaseRowEvaluation,
  getPredikat,
  TableColumn,
  TableRow,
} from '@/types/simulator';
import { evaluateFormulaValue } from '@/lib/formulaEngine';
import { FormulaAutocomplete } from './FormulaAutocomplete';
import {
  ArrowLeft,
  CheckCircle2,
  XCircle,
  Trophy,
  Eye,
  RotateCcw,
  Sparkles,
  Play,
  Download,
  AlertCircle,
  HelpCircle,
  FileSpreadsheet,
  Layers,
  Filter,
} from 'lucide-react';

interface CaseExamWorksheetProps {
  exam: CaseExamData;
  existingResult?: CaseExamResult;
  onFinishExam: (result: CaseExamResult) => void;
  onBack: () => void;
  onViewCertificate: (result: CaseExamResult) => void;
}

export const CaseExamWorksheet: React.FC<CaseExamWorksheetProps> = ({
  exam,
  existingResult,
  onFinishExam,
  onBack,
  onViewCertificate,
}) => {
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const [cellData, setCellData] = useState<Record<string, string | number>>({});
  const [activeCell, setActiveCell] = useState<string>('F3');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<string>('');
  const [evaluationResult, setEvaluationResult] = useState<CaseExamResult | null>(existingResult || null);
  const [showSolutionModal, setShowSolutionModal] = useState<boolean>(false);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [levelFilter, setLevelFilter] = useState<string>('ALL');

  const currentSheet = exam.sheets[activeSheetIndex] || exam.sheets[0];
  const targetCols = currentSheet.targetColumns || [];
  const targetKeys = useMemo(() => new Set(targetCols.map((tc) => tc.key)), [targetCols]);

  const cellInputRef = useRef<HTMLInputElement>(null);

  // Initialize sheet cellData with full cross-sheet keys
  useEffect(() => {
    const initial: Record<string, string | number> = {};
    exam.sheets.forEach((sh, shIdx) => {
      sh.rows.forEach((r) => {
        sh.columns.forEach((c) => {
          const rawVal = r.values[c.key];
          const cellRef = `${c.letter}${r.rowNumber}`;
          initial[`'${sh.name}'!${cellRef}`] = rawVal;
          initial[`${sh.name}!${cellRef}`] = rawVal;
          if (shIdx === 0) {
            initial[cellRef] = rawVal;
          }
        });
      });
    });
    setCellData(initial);

    // Default select first target cell
    if (targetCols.length > 0) {
      const firstTarget = `${targetCols[0].letter}3`;
      setActiveCell(firstTarget);
    }
  }, [exam]);

  // Focus input on edit
  useEffect(() => {
    if (isEditing && cellInputRef.current) {
      cellInputRef.current.focus();
      const len = cellInputRef.current.value.length;
      cellInputRef.current.setSelectionRange(len, len);
    }
  }, [isEditing, activeCell]);

  const handleCellClick = (cellRef: string) => {
    if (isEditing) {
      if (editValue.startsWith('=')) {
        if (/[\(,+\-*\/&:=;\s]$/.test(editValue.trim())) {
          setEditValue(editValue + cellRef);
          return;
        }
      }
      handleCommitEdit(activeCell, editValue);
    }
    setActiveCell(cellRef);
    setIsEditing(false);
    setEditValue(cellData[cellRef] !== undefined ? String(cellData[cellRef]) : '');
  };

  const handleCellDoubleClick = (cellRef: string) => {
    setActiveCell(cellRef);
    setIsEditing(true);
    setEditValue(cellData[cellRef] !== undefined && cellData[cellRef] !== '?' ? String(cellData[cellRef]) : '');
  };

  const handleCommitEdit = (cellRef: string, value: string) => {
    const trimmed = value.trim();
    setCellData((prev) => {
      const next = { ...prev };
      next[cellRef] = trimmed;
      next[`'${currentSheet.name}'!${cellRef}`] = trimmed;
      next[`${currentSheet.name}!${cellRef}`] = trimmed;
      return next;
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditValue(cellData[activeCell] !== undefined ? String(cellData[activeCell]) : '');
  };

  // Keyboard navigation
  const handleTableKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (isEditing) return;

      if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        setIsEditing(true);
        setEditValue(e.key);
        return;
      }

      const match = activeCell.match(/^([A-Z]+)(\d+)$/);
      if (!match) return;
      const colLetter = match[1];
      const rowNum = parseInt(match[2], 10);
      const colIdx = currentSheet.columns.findIndex((c) => c.letter === colLetter);
      const rowIdx = currentSheet.rows.findIndex((r) => r.rowNumber === rowNum);

      let nc = colIdx;
      let nr = rowIdx;

      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          nr = Math.max(0, rowIdx - 1);
          break;
        case 'ArrowDown':
        case 'Enter':
          e.preventDefault();
          nr = Math.min(currentSheet.rows.length - 1, rowIdx + 1);
          break;
        case 'ArrowLeft':
          e.preventDefault();
          nc = Math.max(0, colIdx - 1);
          break;
        case 'ArrowRight':
        case 'Tab':
          e.preventDefault();
          nc = Math.min(currentSheet.columns.length - 1, colIdx + 1);
          break;
        case 'F2':
          e.preventDefault();
          setIsEditing(true);
          setEditValue(
            cellData[activeCell] !== undefined && cellData[activeCell] !== '?'
              ? String(cellData[activeCell])
              : ''
          );
          return;
        case 'Delete':
        case 'Backspace':
          e.preventDefault();
          handleCommitEdit(activeCell, '');
          return;
      }

      if (nc >= 0 && nc < currentSheet.columns.length && nr >= 0 && nr < currentSheet.rows.length) {
        const nextRef = `${currentSheet.columns[nc].letter}${currentSheet.rows[nr].rowNumber}`;
        setActiveCell(nextRef);
        setIsEditing(false);
        setEditValue(cellData[nextRef] !== undefined ? String(cellData[nextRef]) : '');
      }
    },
    [isEditing, activeCell, currentSheet, cellData]
  );

  // AUTOMATIC GRADING
  const handleGradeExam = () => {
    if (isEditing) {
      handleCommitEdit(activeCell, editValue);
    }

    const evaluations: CaseRowEvaluation[] = [];
    let totalCells = 0;
    let correctCells = 0;

    exam.sheets.forEach((sh) => {
      const tgCols = sh.targetColumns || [];
      tgCols.forEach((tc) => {
        sh.rows.forEach((r) => {
          // Skip example rows (with points: 0 or game: Contoh)
          if (r.values.points === 0 || String(r.values.game || '').toLowerCase().includes('contoh')) {
            return;
          }

          totalCells++;
          const cellRef = `${tc.letter}${r.rowNumber}`;
          const userRaw =
            cellData[cellRef] !== undefined
              ? cellData[cellRef]
              : cellData[`'${sh.name}'!${cellRef}`] !== undefined
              ? cellData[`'${sh.name}'!${cellRef}`]
              : r.values[tc.key];

          const expected = tc.expectedRowAnswers[r.rowNumber];

          let isCorrect = false;
          let calculatedVal: any = userRaw;

          if (userRaw !== undefined && userRaw !== '?' && userRaw !== '') {
            const userStr = String(userRaw).trim();
            if (userStr.startsWith('=')) {
              calculatedVal = evaluateFormulaValue(userStr, cellData);
            }

            if (Array.isArray(expected)) {
              isCorrect = expected.some(
                (exp) =>
                  String(calculatedVal).trim().toUpperCase() === String(exp).trim().toUpperCase()
              );
            } else if (expected !== undefined) {
              const expectedStr = String(expected).trim().toUpperCase();
              const calcStr = String(calculatedVal).trim().toUpperCase();
              isCorrect = calcStr === expectedStr;

              // Number tolerance
              if (!isCorrect && !isNaN(Number(calculatedVal)) && !isNaN(Number(expected))) {
                isCorrect = Math.abs(Number(calculatedVal) - Number(expected)) < 0.01;
              }
            }
          }

          if (isCorrect) correctCells++;

          evaluations.push({
            cellRef,
            rowNumber: r.rowNumber,
            columnKey: tc.key,
            userValue: calculatedVal !== undefined ? calculatedVal : '',
            expectedValue: Array.isArray(expected) ? expected[0] : expected || '',
            isCorrect,
            userFormula: String(userRaw).startsWith('=') ? String(userRaw) : undefined,
          });
        });
      });
    });

    const score = totalCells > 0 ? Math.round((correctCells / totalCells) * 100) : 0;
    const passed = score >= exam.passingScore;

    const result: CaseExamResult = {
      examId: exam.id,
      examNumber: exam.number,
      examCode: exam.code,
      examTitle: exam.title,
      score,
      totalCells,
      correctCells,
      passed,
      evaluations,
      completedAt: new Date().toISOString(),
      predikat: getPredikat(score),
    };

    if (passed) {
      try {
        confetti({
          particleCount: 150,
          spread: 90,
          origin: { y: 0.5 },
          colors: ['#107c41', '#22c55e', '#fbbf24', '#38bdf8'],
        });
      } catch { /* ignore */ }
    }

    setEvaluationResult(result);
    setShowResultModal(true);
    onFinishExam(result);
  };

  // Filtered rows for current sheet
  const displayRows = useMemo(() => {
    if (levelFilter === 'ALL' || !currentSheet.columns.some((c) => c.key === 'level')) {
      return currentSheet.rows;
    }
    return currentSheet.rows.filter(
      (r) => String(r.values.level || '').toUpperCase() === levelFilter.toUpperCase()
    );
  }, [currentSheet, levelFilter]);

  return (
    <div className="space-y-3 pb-8">
      {/* Top Bar */}
      <div className="bg-white rounded-xl border border-gray-200 px-4 py-2.5 shadow-2xs flex flex-wrap items-center justify-between gap-3">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali ke Katalog Soal</span>
        </button>

        <div className="flex items-center gap-2">
          {/* View Solution Button */}
          <button
            onClick={() => setShowSolutionModal(true)}
            className="flex items-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-lg border border-blue-200 transition-colors"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Kunci Jawaban</span>
          </button>

          {/* CEK HASIL JAWABAN */}
          <button
            onClick={handleGradeExam}
            className="flex items-center gap-1.5 px-4 py-1.5 bg-[#107c41] hover:bg-[#0b5c2f] text-white text-xs font-bold rounded-lg shadow-xs transition-all animate-pulse"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Cek Hasil Jawaban</span>
          </button>
        </div>
      </div>

      {/* TOP INSTRUCTION PANEL (Matching Screenshot 2 Style) */}
      <div className="bg-white rounded-2xl border-2 border-emerald-800 shadow-sm overflow-hidden">
        {/* Teal Header */}
        <div className="bg-[#0f6b38] text-white py-2 px-4 flex items-center justify-between font-bold text-sm tracking-wide">
          <span>Instruksi Turnamen & Studi Kasus</span>
          <span className="text-xs text-emerald-200 font-mono">{exam.code}</span>
        </div>

        {/* Instruction Body */}
        <div className="p-4 sm:p-5 bg-gradient-to-b from-emerald-50/30 to-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left Instructions */}
            <div className="lg:col-span-8 space-y-3">
              <div>
                <span className="font-bold text-emerald-950 text-sm block">
                  {exam.instructions.title}
                </span>
                <p className="text-xs text-gray-700 mt-1 italic">
                  {exam.instructions.description}
                </p>
              </div>

              {/* Point-by-point rules */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[11px] font-bold text-gray-800 block">Panduan Pengerjaan :</span>
                {exam.instructions.points.map((pt, idx) => (
                  <div key={idx} className="text-xs text-slate-800 flex items-start gap-1.5">
                    <span className="font-bold text-emerald-700">{idx + 1}.</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Warning Notice in Red (matching screenshot 2) */}
              <div className="pt-2 text-rose-700 font-semibold text-xs italic flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>
                  {exam.instructions.notice ||
                    'Dilarang mengubah tabel referensi. Tulis formula langsung pada lembar pengerjaan.'}
                </span>
              </div>
            </div>

            {/* Right Helper / Reference Table */}
            {exam.instructions.helperTable && (
              <div className="lg:col-span-4 bg-sky-50 border border-sky-200 rounded-xl p-3 text-xs space-y-2">
                <span className="font-bold text-sky-950 block text-[11px] text-center border-b border-sky-200 pb-1">
                  {exam.instructions.helperTable.title}
                </span>
                <table className="w-full text-[11px] text-left">
                  <thead>
                    <tr className="border-b border-sky-200 text-sky-800 font-semibold">
                      {exam.instructions.helperTable.headers.map((h, i) => (
                        <th key={i} className="py-1 px-1">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {exam.instructions.helperTable.rows.map((r, i) => (
                      <tr key={i} className="border-b border-sky-100 text-sky-900">
                        {r.map((val, vi) => (
                          <td key={vi} className="py-1 px-1 font-mono">
                            {String(val)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FORMULA BAR */}
      <div className="bg-white border border-gray-300 rounded-xl px-3 py-1.5 flex items-center gap-2 shadow-2xs">
        <div className="w-16 px-1.5 py-1 bg-gray-50 border border-gray-300 rounded text-center text-[11px] font-bold font-mono text-gray-700">
          {activeCell}
        </div>
        <div className="text-gray-400 font-serif italic font-bold text-sm select-none">fx</div>
        <div className="flex-1 relative">
          <input
            type="text"
            value={
              isEditing
                ? editValue
                : cellData[activeCell] !== undefined
                ? String(cellData[activeCell])
                : ''
            }
            onChange={(e) => {
              setIsEditing(true);
              setEditValue(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCommitEdit(activeCell, editValue);
            }}
            placeholder="Ketik rumus Excel (misal =INDEX('Desk Layout'!A1:G11, C3, D3))"
            className="w-full px-2.5 py-1 text-xs font-mono border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#107c41] bg-white text-gray-900"
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
          className="px-3 py-1 bg-[#107c41] hover:bg-[#0b5c2f] text-white text-[11px] font-bold rounded-lg shadow-2xs transition-all"
        >
          Masuk
        </button>
      </div>

      {/* LEVEL FILTER TABS (When on Questions sheet) */}
      {currentSheet.columns.some((c) => c.key === 'level') && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <span className="text-gray-500 font-semibold text-[11px] flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3" /> Filter Level:
          </span>
          {['ALL', 'Level 1', 'Level 2', 'Level 3', 'Bonus'].map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLevelFilter(lvl)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                levelFilter === lvl
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
              }`}
            >
              {lvl === 'ALL' ? 'Semua Level' : lvl}
            </button>
          ))}
        </div>
      )}

      {/* Helper Guidance Banner for Questions Sheet */}
      {currentSheet.id === 'sheet_questions' && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-2.5 text-xs text-emerald-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="bg-[#107c41] text-white text-[10px] font-bold px-2 py-0.5 rounded-md">💡 Petunjuk Cepat</span>
            <span className="text-[11px]">
              Klik sel kuning di kolom <strong>Answer (F)</strong> untuk mengisi jawaban (bisa ketik nama langsung atau gunakan rumus <code className="bg-white px-1 py-0.5 rounded border border-emerald-300 font-mono text-[10px]">=INDEX(&apos;Desk Layout&apos;!A1:G11, C3, D3)</code>).
            </span>
          </div>
          <div className="flex items-center gap-1.5 shrink-0 text-[11px] text-emerald-800 font-semibold">
            <span>Lihat denah di 👉</span>
            <button
              onClick={() => setActiveSheetIndex(1)}
              className="bg-white border border-emerald-400 hover:bg-emerald-100 text-[#107c41] px-2.5 py-0.5 rounded-md font-bold transition-all shadow-2xs cursor-pointer"
            >
              [Desk Layout]
            </button>
          </div>
        </div>
      )}

      {/* MAIN SPREADSHEET TABLE */}
      <div
        className="bg-white rounded-xl border border-gray-300 shadow-sm overflow-hidden select-none focus:outline-none"
        tabIndex={0}
        onKeyDown={handleTableKeyDown}
      >
        <div className="overflow-x-auto min-h-[340px] max-h-[500px]">
          <table className="w-full border-collapse text-xs font-mono">
            <thead className="sticky top-0 z-10">
              {/* Row 1: Column Letters */}
              <tr className="bg-gray-100 border-b border-gray-300 text-gray-500 font-bold text-center text-[10px]">
                <th className="w-10 py-1 px-1 border-r border-gray-300 bg-gray-200/80"></th>
                {currentSheet.columns.map((col) => (
                  <th key={col.key} className="py-1 px-2 border-r border-gray-300 font-mono">
                    {col.letter}
                  </th>
                ))}
              </tr>

              {/* Row 2: Column Headers */}
              <tr className="bg-[#0f6b38] text-white font-bold border-b border-emerald-900 text-center text-xs">
                <th className="py-2 px-1 border-r border-emerald-900 bg-[#0c592e] text-[10px]">#</th>
                {currentSheet.columns.map((col) => {
                  const isTarget = targetKeys.has(col.key);
                  return (
                    <th
                      key={col.key}
                      className={`py-2 px-3 border-r border-emerald-900 min-w-[110px] ${
                        isTarget ? 'bg-[#094d26] text-amber-200' : ''
                      }`}
                    >
                      {col.label}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {displayRows.map((row) => (
                <tr
                  key={row.rowNumber}
                  className="border-b border-gray-200 hover:bg-slate-50/60 transition-colors"
                >
                  {/* Row Number */}
                  <td className="py-2 px-1 border-r border-gray-300 font-bold text-center select-none font-mono text-[11px] bg-gray-100 text-gray-500">
                    {row.rowNumber}
                  </td>

                  {/* Cells */}
                  {currentSheet.columns.map((col) => {
                    const cellRef = `${col.letter}${row.rowNumber}`;
                    const isTarget = targetKeys.has(col.key);
                    const isSelected = activeCell === cellRef;
                    const isCellCurrentlyEditing = isEditing && isSelected;

                    const rawVal =
                      cellData[cellRef] !== undefined
                        ? cellData[cellRef]
                        : cellData[`'${currentSheet.name}'!${cellRef}`] !== undefined
                        ? cellData[`'${currentSheet.name}'!${cellRef}`]
                        : row.values[col.key];

                    const displayVal =
                      rawVal !== undefined && String(rawVal).startsWith('=')
                        ? evaluateFormulaValue(rawVal, cellData)
                        : rawVal;

                    const evalRow = evaluationResult?.evaluations.find((e) => e.cellRef === cellRef);

                    return (
                      <td
                        key={col.key}
                        onClick={() => handleCellClick(cellRef)}
                        onDoubleClick={() => handleCellDoubleClick(cellRef)}
                        className={`relative py-2 px-2.5 border-r border-gray-200 cursor-cell transition-all text-[12px] ${
                          isTarget
                            ? evalRow
                              ? evalRow.isCorrect
                                ? 'bg-emerald-100 text-emerald-950 font-bold'
                                : 'bg-rose-100 text-rose-950 font-semibold'
                              : 'bg-emerald-50/50 text-slate-900 font-medium'
                            : 'text-gray-700'
                        } ${isSelected ? 'ring-2 ring-[#107c41] bg-emerald-50/40' : ''}`}
                      >
                        {isTarget && !evalRow && rawVal === '?' && !isCellCurrentlyEditing && (
                          <span className="text-[10px] text-amber-700 bg-amber-100/90 px-1.5 py-0.5 rounded font-sans font-semibold">
                            ✎ Isi Rumus
                          </span>
                        )}

                        {isCellCurrentlyEditing ? (
                          <div className="relative z-20 -m-1">
                            <input
                              ref={cellInputRef}
                              type="text"
                              value={editValue}
                              onChange={(e) => setEditValue(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  e.preventDefault();
                                  handleCommitEdit(activeCell, editValue);
                                } else if (e.key === 'Escape') {
                                  e.preventDefault();
                                  handleCancelEdit();
                                }
                              }}
                              className="w-full px-1.5 py-1 bg-white text-gray-900 font-mono text-xs border-2 border-[#107c41] shadow-lg focus:outline-none"
                              spellCheck={false}
                              autoComplete="off"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-between">
                            <span
                              className={
                                typeof displayVal === 'number'
                                  ? 'text-right w-full block'
                                  : 'truncate max-w-[200px]'
                              }
                            >
                              {displayVal !== undefined && displayVal !== '?' ? String(displayVal) : ''}
                            </span>
                            {evalRow && (
                              <span className="ml-1 shrink-0">
                                {evalRow.isCorrect ? (
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                ) : (
                                  <XCircle className="w-3.5 h-3.5 text-rose-600" />
                                )}
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* BOTTOM MULTI-SHEET TABS */}
        <div className="bg-gray-200 px-2 py-1.5 border-t border-gray-300 flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-gray-500 font-bold text-[10px] uppercase px-1 flex items-center gap-1">
            <Layers className="w-3 h-3" /> Sheets:
          </span>
          {exam.sheets.map((sh, idx) => (
            <button
              key={sh.id}
              onClick={() => {
                setActiveSheetIndex(idx);
                const firstCol = sh.columns[0]?.letter || 'A';
                setActiveCell(`${firstCol}2`);
              }}
              className={`px-3 py-1.5 rounded-md font-bold text-xs flex items-center gap-1.5 transition-all ${
                activeSheetIndex === idx
                  ? 'bg-white text-[#107c41] border border-gray-300 shadow-2xs ring-1 ring-emerald-400'
                  : 'bg-gray-100 text-gray-600 hover:bg-white hover:text-gray-900 border border-transparent'
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>{sh.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* RESULT MODAL */}
      {showResultModal && evaluationResult && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 space-y-4 animate-fade-in">
            <div className="text-center space-y-2">
              <div className="text-5xl">{evaluationResult.passed ? '🏆' : '📝'}</div>
              <h3 className="text-xl font-bold text-gray-900">
                {evaluationResult.passed
                  ? 'Selamat, Anda LULUS Tantangan Ini!'
                  : 'Hasil Evaluasi Turnamen'}
              </h3>
              <p className="text-xs text-gray-500">{exam.title}</p>
            </div>

            <div className="grid grid-cols-3 gap-2 bg-slate-50 border border-slate-200 rounded-xl p-3.5 text-center">
              <div>
                <div className="text-2xl font-bold text-[#107c41]">{evaluationResult.score}%</div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase">Skor Akurasi</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">
                  {evaluationResult.correctCells}/{evaluationResult.totalCells}
                </div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase">Jawaban Benar</div>
              </div>
              <div>
                <div
                  className={`text-base font-bold mt-1 ${
                    evaluationResult.passed ? 'text-emerald-700' : 'text-rose-700'
                  }`}
                >
                  {evaluationResult.predikat}
                </div>
                <div className="text-[10px] text-gray-400 font-semibold uppercase">Predikat</div>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              {evaluationResult.passed && (
                <button
                  onClick={() => {
                    setShowResultModal(false);
                    onViewCertificate(evaluationResult);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all"
                >
                  <Trophy className="w-4 h-4" />
                  <span>Unduh Sertifikat Kelulusan Turnamen (PNG)</span>
                </button>
              )}

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowResultModal(false);
                    setShowSolutionModal(true);
                  }}
                  className="flex-1 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold text-xs rounded-xl transition-colors border border-blue-200 flex items-center justify-center gap-1.5"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Lihat Kunci Jawaban</span>
                </button>

                <button
                  onClick={() => setShowResultModal(false)}
                  className="flex-1 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs rounded-xl transition-colors"
                >
                  Tutup & Lanjut Edit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SOLUTION BLUEPRINT MODAL */}
      {showSolutionModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 space-y-4 max-h-[85vh] overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <div>
                <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                  Kunci Jawaban Resmi Turnamen • {exam.code}
                </span>
                <h3 className="font-bold text-base text-gray-900 mt-1">{exam.title}</h3>
              </div>
              <button
                onClick={() => setShowSolutionModal(false)}
                className="text-gray-400 hover:text-gray-600 text-xs px-2 py-1 rounded-lg"
              >
                Tutup ✕
              </button>
            </div>

            <div className="space-y-3">
              {exam.solutionBlueprints.map((sol, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-1.5 text-xs">
                  <span className="font-bold text-slate-800 text-xs block">{sol.columnLabel}</span>
                  <code className="text-[#107c41] font-mono font-bold bg-white px-2.5 py-1.5 rounded-lg border border-gray-200 block text-xs">
                    {sol.formula}
                  </code>
                  <p className="text-gray-600 text-[11px]">{sol.explanation}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setShowSolutionModal(false)}
                className="px-5 py-2 bg-[#107c41] hover:bg-[#0b5c2f] text-white font-bold text-xs rounded-xl shadow-xs transition-all"
              >
                Mengerti & Kembali ke Lembar Kerja
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
