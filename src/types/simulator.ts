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

// ===== v4.0: Auth & Exam Types =====

export interface UserAccount {
  username: string;
  displayName: string;
  passwordHash: string;
  createdAt: string;
}

export interface UserSession {
  username: string;
  displayName: string;
}

export interface ExamQuestion {
  id: number;
  chapterId: number; // 1-6 for chapter exams, 0 for final
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
  id: string; // 'exam_ch1', 'exam_ch2', ..., 'exam_final'
  title: string;
  chapterId: number; // 1-6, or 0 for final
  description: string;
  questions: ExamQuestion[];
  totalPoints: number;
  passingScore: number; // minimum to pass (e.g. 70)
  timeLimit?: number; // minutes, undefined = unlimited
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

export function getPredikat(percentage: number): ExamResult['predikat'] {
  if (percentage >= 90) return 'Sangat Baik';
  if (percentage >= 80) return 'Baik';
  if (percentage >= 70) return 'Cukup';
  return 'Gagal';
}
