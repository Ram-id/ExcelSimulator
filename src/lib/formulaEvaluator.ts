import { LevelData, EvaluationResult } from '@/types/simulator';

export function normalizeFormula(formula: string): string {
  let cleaned = formula.trim();
  
  // Standardize single quotes to double quotes for string literals
  cleaned = cleaned.replace(/['']/g, '"');
  
  // Replace semicolons (used in some regional Excel setups) with commas
  // but preserve inside string literals
  const tokens = cleaned.split(/("[^"]*")/g);
  for (let i = 0; i < tokens.length; i++) {
    // Even indices are outside quotes
    if (i % 2 === 0) {
      tokens[i] = tokens[i].replace(/;/g, ',').toUpperCase();
    } else {
      // Inside quotes: standardize to uppercase for comparison
      tokens[i] = tokens[i].toUpperCase();
    }
  }
  return tokens.join('');
}

function stripSpaces(str: string): string {
  // Strip spaces outside string literals
  const parts = str.split(/("[^"]*")/g);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      parts[i] = parts[i].replace(/\s+/g, '');
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
      message: '❌ Tanda kurung buka "(" dan kurung tutup ")" tidak seimbang. Pastikan setiap kurung buka memiliki pasangan kurung tutup.'
    };
  }

  // Check balanced quotes
  const quoteCount = (rawInput.match(/["']/g) || []).length;
  if (quoteCount % 2 !== 0) {
    return {
      status: 'error',
      message: '❌ Tanda petik teks belum ditutup dengan benar.'
    };
  }

  const normalizedInput = normalizeFormula(rawInput);
  const strippedInput = stripSpaces(normalizedInput);

  // Normalize all valid formulas
  const normalizedValidList = level.validFormulas.map(f => normalizeFormula(f));
  const strippedValidList = normalizedValidList.map(f => stripSpaces(f));

  // Check direct or stripped match
  const isMatch = strippedValidList.some(valid => valid === strippedInput);

  if (isMatch) {
    const calculatedValue = level.acceptedAnswers[0];
    return {
      status: 'success',
      message: '🎉 Luar Biasa! Rumus kamu 100% benar dan berhasil dieksekusi.',
      calculatedValue: calculatedValue,
      details: level.explanation
    };
  }

  // Helpful diagnostic errors for beginners:

  // 1. Function name mistyped or wrong function
  const funcMatch = normalizedInput.match(/^=([A-Z]+)\(/);
  if (funcMatch) {
    const usedFunction = funcMatch[1];
    const expectedFunc = level.samplePlaceholder?.match(/^=([A-Z]+)\(/)?.[1];

    if (expectedFunc && usedFunction !== expectedFunc) {
      return {
        status: 'error',
        message: `❌ Kamu menggunakan fungsi =${usedFunction}(). Pada materi level ini, gunakan fungsi =${expectedFunc}().`
      };
    }

    // Specific function checks:
    if (usedFunction === 'VLOOKUP' && !normalizedInput.includes('FALSE') && !normalizedInput.includes('0')) {
      return {
        status: 'warning',
        message: '💡 Tips VLOOKUP: Tambahkan argumen FALSE (atau 0) di akhir rumus untuk memastikan pencarian persis (Exact Match).'
      };
    }

    if (usedFunction === 'IF' && !normalizedInput.includes('"') && !normalizedInput.includes("'")) {
      return {
        status: 'warning',
        message: '💡 Tips IF: Nilai teks (seperti "LULUS" atau "REMIDI") harus diapit oleh tanda petik dua (").'
      };
    }

    return {
      status: 'error',
      message: `❌ Argumen, rentang sel, atau kriteria di dalam =${usedFunction}() belum tepat. Periksa petunjuk atau lihat contoh sintaks!`
    };
  }

  // 2. Arithmetic operator mistakes
  if (['+', '-', '*', '/'].some(op => normalizedInput.includes(op))) {
    return {
      status: 'error',
      message: `❌ Periksa kembali alamat sel atau operator matematika yang kamu masukkan.`
    };
  }

  return {
    status: 'error',
    message: '❌ Format rumus belum tepat. Pastikan mengetik sesuai instruksi soal atau klik tombol "Lihat Petunjuk".'
  };
}
