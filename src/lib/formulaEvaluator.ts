import { LevelData, EvaluationResult } from '@/types/simulator';

export function normalizeFormula(formula: string): string {
  let cleaned = formula.trim();
  // Standardize quotes
  cleaned = cleaned.replace(/['']/g, '"');
  // Upper-case formula keywords and cell letters while preserving inner quoted strings
  // Example: =countif(c2:c5, "Lunas") -> =COUNTIF(C2:C5, "LUNAS")
  const parts = cleaned.split(/("[^"]*")/g);
  for (let i = 0; i < parts.length; i++) {
    // Even indices are outside quotes
    if (i % 2 === 0) {
      parts[i] = parts[i].toUpperCase();
    } else {
      // Inside quotes: standardize to uppercase for comparison
      parts[i] = parts[i].toUpperCase();
    }
  }
  return parts.join('');
}

export function evaluateFormula(userInput: string, level: LevelData): EvaluationResult {
  const rawInput = userInput.trim();

  if (!rawInput) {
    return {
      status: 'error',
      message: '❌ Masukkan rumus terlebih dahulu pada formula bar.'
    };
  }

  if (!rawInput.startsWith('=')) {
    return {
      status: 'error',
      message: '❌ Rumus Excel wajib diawali dengan tanda sama dengan (=).'
    };
  }

  // Check balanced parentheses
  const openCount = (rawInput.match(/\(/g) || []).length;
  const closeCount = (rawInput.match(/\)/g) || []).length;
  if (openCount !== closeCount) {
    return {
      status: 'error',
      message: '❌ Tanda kurung buka dan kurung tutup tidak seimbang.'
    };
  }

  const normalizedInput = normalizeFormula(rawInput);

  // Normalize canonical list
  const normalizedValid = level.validFormulas.map(f => normalizeFormula(f));

  // Check if direct match with or without space
  const isMatch = normalizedValid.some(valid => {
    // Strict comparison
    if (valid === normalizedInput) return true;
    // Strip all whitespaces comparison
    if (valid.replace(/\s+/g, '') === normalizedInput.replace(/\s+/g, '')) return true;
    return false;
  });

  if (isMatch) {
    const calculatedValue = level.acceptedAnswers[0];
    return {
      status: 'success',
      message: '🎉 Jawaban Benar! Rumus berhasil dieksekusi dengan tepat.',
      calculatedValue: calculatedValue,
      details: level.explanation
    };
  }

  // Check if function name matches but wrong range/syntax
  const funcMatch = normalizedInput.match(/^=([A-Z]+)\(/);
  if (funcMatch) {
    const usedFunction = funcMatch[1];
    const expectedFunc = level.samplePlaceholder?.match(/^=([A-Z]+)\(/)?.[1];

    if (expectedFunc && usedFunction !== expectedFunc) {
      return {
        status: 'error',
        message: `❌ Kamu menggunakan fungsi =${usedFunction}(). Pada level ini coba gunakan fungsi =${expectedFunc}().`
      };
    }

    return {
      status: 'error',
      message: `❌ Argumen atau rentang sel tidak tepat. Periksa kembali baris & kolom yang kamu pilih!`
    };
  }

  return {
    status: 'error',
    message: '❌ Sintaks rumus tidak valid atau belum sesuai dengan instruksi soal.'
  };
}
