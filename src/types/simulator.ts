export type AppMode = 'learn' | 'sandbox';

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
  hints: string[];
  explanation: string;
  samplePlaceholder?: string;
  theory: {
    concept: string;
    whyItMatters: string;
    syntax: string;
    example: string;
  };
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
