export type AppMode = 'learn' | 'sandbox' | 'progress';

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
  letter: string; // 'A', 'B', 'C', etc.
}

export interface TableRow {
  rowNumber: number; // 2, 3, 4, etc.
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
  targetCell: string; // e.g. 'D2'
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
  hints: string[]; // Now 3-level progressive: conceptual → technical → blueprint
  explanation: string;
  samplePlaceholder?: string;
  theory: {
    concept: string;
    whyItMatters: string;
    syntax: string;
    example: string;
  };
  // NEW v3.0 fields
  skillsLearned: string[];       // e.g. ['Fungsi SUM', 'Range Reference']
  jobRelevance: string[];        // e.g. ['Akuntan', 'Admin Kantor', 'HRD']
  realWorldExample: string;      // Real-world workplace scenario paragraph
  prerequisiteModules: number[]; // Module IDs that should be done first
}

export interface EvaluationResult {
  status: 'idle' | 'success' | 'error' | 'warning';
  message: string;
  calculatedValue?: string | number;
  details?: string;
}

export interface CellPosition {
  col: string; // 'A', 'B', etc.
  row: number; // 1, 2, 3, etc.
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

// NEW v3.0: Skill tracking types
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
