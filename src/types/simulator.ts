export type AppMode = 'learn' | 'sandbox' | 'progress' | 'exam';

export interface ChapterData {
  id: number;
  title: string;
  description: string;
  iconName: string;
  moduleIds: number[];
}

export interface TableColumn {
  key: string;
  label: string;
  letter: string;
}

export interface TableRow {
  rowNumber: number;
  values: Record<string, string | number>;
}

export interface ModuleData {
  id: number;
  chapterId: number;
  title: string;
  category: string;
  difficulty: 'Pemula' | 'Menengah' | 'Lanjutan';
  scenario: string;
  objective: string;
  targetCell: string;
  targetRowNumber: number;
  targetColKey: string;
  targetColLetter: string;
  columns: TableColumn[];
  rows: TableRow[];
  totalLabelRow?: {
    label: string;
    colSpan: number;
  };
  validFormulas: string[];
  acceptedAnswers: (string | number)[];
  hints: string[];
  explanation: string;
  samplePlaceholder?: string;
  theory: {
    concept: string;
    whyItMatters: string;
    syntax: string;
    example: string;
  };
  skillsLearned: string[];
  jobRelevance: string[];
  realWorldExample: string;
  prerequisiteModules: number[];
}

export interface EvaluationResult {
  status: 'idle' | 'success' | 'error' | 'warning';
  message: string;
  calculatedValue?: string | number;
  details?: string;
}

export interface CellPosition {
  col: string;
  row: number;
}

export interface GridCell {
  raw: string | number;
  display: string | number;
  isTarget?: boolean;
  isHeader?: boolean;
}

export type SheetGridData = Record<string, string | number>;

export interface SandboxTemplate {
  id: string;
  name: string;
  description: string;
  columns: TableColumn[];
  rows: TableRow[];
}

export interface CheatSheetItem {
  id: string;
  category: string;
  name: string;
  syntax: string;
  description: string;
  example: string;
  useCase: string;
  tips: string;
}

export interface SkillDimension {
  label: string;
  chapterId: number;
  completedCount: number;
  totalCount: number;
  percentage: number;
}

export type UserLevel = 'Pemula' | 'Menengah' | 'Mahir';

export function getUserLevel(completedCount: number, totalModules: number): UserLevel {
  const pct = (completedCount / totalModules) * 100;
  if (pct >= 71) return 'Mahir';
  if (pct >= 31) return 'Menengah';
  return 'Pemula';
}

export function getLevelEmoji(level: UserLevel): string {
  if (level === 'Mahir') return '🏆';
  if (level === 'Menengah') return '📈';
  return '🌱';
}

// ===== Auth Types =====

export interface UserAccount {
  username: string;
  displayName: string;
  passwordHash: string;
  createdAt: string;
  isMaster?: boolean;
}

export interface UserSession {
  username: string;
  displayName: string;
  isMaster?: boolean;
}

// ===== 50 Case-Based Exam Types (XL-Test Style) =====

export type CaseDifficulty = 'PEMULA' | 'MENENGAH' | 'MAHIR' | 'EXTREME' | 'CHAMPIONSHIP';

export interface CaseHelperTable {
  title: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface CaseInstruction {
  title: string;
  description: string;
  points: string[];
  helperTable?: CaseHelperTable;
  notice?: string;
}

export interface CaseTargetColumn {
  key: string;
  letter: string;
  label: string;
  description: string;
  sampleFormula?: string;
  validFormulaPatterns?: string[];
  // Mapping row number -> accepted value (or array of accepted values)
  expectedRowAnswers: Record<number, string | number | (string | number)[]>;
}

export interface CaseSheet {
  id: string;
  name: string; // e.g. 'XL-Test', 'Daftar Nama', 'Data Master'
  columns: TableColumn[];
  rows: TableRow[];
  targetColumns?: CaseTargetColumn[];
}

export interface CaseSolutionBlueprint {
  columnLabel: string;
  formula: string;
  explanation: string;
}

export interface CaseExamData {
  id: string; // e.g. 'EX-001'
  number: number; // 1 to 50
  code: string; // e.g. '#SBEM011'
  title: string;
  category: 'Aritmatika' | 'Statistik' | 'Teks' | 'Logika' | 'Lookup' | 'Keuangan' | 'Kombinasi';
  difficulty: CaseDifficulty;
  difficultyStars: number; // 1 to 5
  tags: string[];
  instructions: CaseInstruction;
  sheets: CaseSheet[];
  passingScore: number; // typically 70
  solutionBlueprints: CaseSolutionBlueprint[];
}

export interface CaseRowEvaluation {
  cellRef: string;
  rowNumber: number;
  columnKey: string;
  userValue: string | number;
  expectedValue: string | number;
  isCorrect: boolean;
  userFormula?: string;
}

export interface CaseExamResult {
  examId: string;
  examNumber: number;
  examCode: string;
  examTitle: string;
  score: number; // 0 - 100
  totalCells: number;
  correctCells: number;
  passed: boolean;
  evaluations: CaseRowEvaluation[];
  completedAt: string;
  predikat: 'Gagal' | 'Cukup' | 'Baik' | 'Sangat Baik';
}

// Legacy Exam types kept for backward compatibility if needed
export interface ExamQuestion {
  id: number;
  chapterId: number;
  question: string;
  type: 'multiple_choice' | 'formula' | 'fill_value';
  options?: string[];
  columns?: TableColumn[];
  rows?: TableRow[];
  targetCell?: string;
  correctAnswer: string | number;
  acceptedFormulas?: string[];
  explanation: string;
  points: number;
}

export interface ExamData {
  id: string;
  title: string;
  chapterId: number;
  description: string;
  questions: ExamQuestion[];
  totalPoints: number;
  passingScore: number;
  timeLimit?: number;
}

export interface UserAnswer {
  questionId: number;
  answer: string | number;
  isCorrect: boolean;
  pointsEarned: number;
}

export interface ExamResult {
  examId: string;
  score: number;
  totalPoints: number;
  percentage: number;
  passed: boolean;
  answers: UserAnswer[];
  completedAt: string;
  predikat: 'Gagal' | 'Cukup' | 'Baik' | 'Sangat Baik';
}

export function getPredikat(percentage: number): 'Gagal' | 'Cukup' | 'Baik' | 'Sangat Baik' {
  if (percentage >= 90) return 'Sangat Baik';
  if (percentage >= 80) return 'Baik';
  if (percentage >= 70) return 'Cukup';
  return 'Gagal';
}
