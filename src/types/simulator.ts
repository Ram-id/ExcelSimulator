export type TrackId = 'aritmatika' | 'agregasi' | 'teks' | 'logika' | 'lookup';

export interface TrackData {
  id: TrackId;
  number: number;
  title: string;
  description: string;
  iconName: string;
  levelIds: number[];
}

export interface TableColumn {
  key: string;
  label: string;
  letter: string; // e.g. 'A', 'B', 'C', 'D'
}

export interface TableRow {
  rowNumber: number; // e.g. 2, 3, 4
  values: Record<string, string | number>;
}

export interface LevelData {
  id: number;
  trackId: TrackId;
  title: string;
  category: string;
  difficulty: 'Mudah' | 'Menengah' | 'Lanjutan';
  scenario: string;
  objective: string;
  theory: {
    concept: string;
    whyItMatters: string;
    syntax: string;
    example: string;
  };
  targetCell: string; // e.g. 'D5'
  targetRowNumber: number;
  targetColKey: string;
  targetColLetter: string;
  columns: TableColumn[];
  rows: TableRow[];
  totalLabelRow?: {
    label: string;
    colSpan: number;
  };
  validFormulas: string[]; // Normalized canonical formulas
  acceptedAnswers: (string | number)[];
  hints: string[];
  explanation: string;
  samplePlaceholder?: string;
}

export interface EvaluationResult {
  status: 'idle' | 'success' | 'error' | 'warning';
  message: string;
  calculatedValue?: string | number;
  details?: string;
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
