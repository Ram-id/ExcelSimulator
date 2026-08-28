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
  const parts = str.split(/("[^"]*")/g);
  for (let i = 0; i < parts.length; i++) {
    if (i % 2 === 0) {
      parts[i] = parts[i].replace(/\s+/g, '');
    }
  }
  return parts.join('');
}

// Build map of all cell values in the active level
function getCellMap(level: LevelData): Record<string, string | number> {
  const map: Record<string, string | number> = {};
  for (const row of level.rows) {
    for (const col of level.columns) {
      const cellRef = `${col.letter}${row.rowNumber}`.toUpperCase();
      const val = row.values[col.key];
      if (val !== undefined && val !== '?') {
        map[cellRef] = val;
      }
    }
  }
  return map;
}

// Expand a range like "B2:C2" or "C2:C6" into cell addresses ["B2", "C2"]
function expandRange(rangeStr: string): string[] {
  const [start, end] = rangeStr.split(':').map((s) => s.trim().toUpperCase());
  if (!start || !end) return [rangeStr.trim().toUpperCase()];

  const startCol = start.match(/[A-Z]+/)?.[0] || '';
  const startRow = parseInt(start.match(/\d+/)?.[0] || '0', 10);
  const endCol = end.match(/[A-Z]+/)?.[0] || '';
  const endRow = parseInt(end.match(/\d+/)?.[0] || '0', 10);

  if (!startCol || !endCol || !startRow || !endRow) return [start, end];

  const startColCode = startCol.charCodeAt(0);
  const endColCode = endCol.charCodeAt(0);

  const cells: string[] = [];
  for (let r = Math.min(startRow, endRow); r <= Math.max(startRow, endRow); r++) {
    for (let c = Math.min(startColCode, endColCode); c <= Math.max(startColCode, endColCode); c++) {
      cells.push(`${String.fromCharCode(c)}${r}`);
    }
  }
  return cells;
}

// Evaluate values inside Excel functions or arithmetic
function evaluateExpression(expr: string, cellMap: Record<string, string | number>): any {
  let clean = expr.trim();
  if (clean.startsWith('=')) clean = clean.substring(1).trim();

  // Function regex: NAME(arguments...)
  const funcMatch = clean.match(/^([A-Z_]+)\s*\((.*)\)$/i);
  if (funcMatch) {
    const funcName = funcMatch[1].toUpperCase();
    const argsRaw = funcMatch[2];

    // Split args by comma (outside quotes and parentheses)
    const args: string[] = [];
    let current = '';
    let inQuotes = false;
    let depth = 0;

    for (let i = 0; i < argsRaw.length; i++) {
      const char = argsRaw[i];
      if (char === '"') inQuotes = !inQuotes;
      else if (char === '(' && !inQuotes) depth++;
      else if (char === ')' && !inQuotes) depth--;
      else if ((char === ',' || char === ';') && !inQuotes && depth === 0) {
        args.push(current.trim());
        current = '';
        continue;
      }
      current += char;
    }
    if (current.trim()) args.push(current.trim());

    // 1. SUM
    if (funcName === 'SUM') {
      let sum = 0;
      for (const arg of args) {
        if (arg.includes(':')) {
          // Range argument
          const cells = expandRange(arg);
          for (const cell of cells) {
            const val = Number(cellMap[cell]);
            if (!isNaN(val)) sum += val;
          }
        } else {
          // Could be cell, number, or subexpression like B2+C2
          const val = evaluateExpression(arg, cellMap);
          const num = Number(val);
          if (!isNaN(num)) sum += num;
        }
      }
      return sum;
    }

    // 2. AVERAGE
    if (funcName === 'AVERAGE') {
      let sum = 0;
      let count = 0;
      for (const arg of args) {
        if (arg.includes(':')) {
          const cells = expandRange(arg);
          for (const cell of cells) {
            const val = Number(cellMap[cell]);
            if (!isNaN(val)) {
              sum += val;
              count++;
            }
          }
        } else {
          const val = evaluateExpression(arg, cellMap);
          const num = Number(val);
          if (!isNaN(num)) {
            sum += num;
            count++;
          }
        }
      }
      return count > 0 ? sum / count : 0;
    }

    // 3. MAX
    if (funcName === 'MAX') {
      const nums: number[] = [];
      for (const arg of args) {
        if (arg.includes(':')) {
          const cells = expandRange(arg);
          for (const cell of cells) {
            const val = Number(cellMap[cell]);
            if (!isNaN(val)) nums.push(val);
          }
        } else {
          const val = Number(evaluateExpression(arg, cellMap));
          if (!isNaN(val)) nums.push(val);
        }
      }
      return nums.length > 0 ? Math.max(...nums) : 0;
    }

    // 4. MIN
    if (funcName === 'MIN') {
      const nums: number[] = [];
      for (const arg of args) {
        if (arg.includes(':')) {
          const cells = expandRange(arg);
          for (const cell of cells) {
            const val = Number(cellMap[cell]);
            if (!isNaN(val)) nums.push(val);
          }
        } else {
          const val = Number(evaluateExpression(arg, cellMap));
          if (!isNaN(val)) nums.push(val);
        }
      }
      return nums.length > 0 ? Math.min(...nums) : 0;
    }

    // 5. COUNT
    if (funcName === 'COUNT') {
      let count = 0;
      for (const arg of args) {
        if (arg.includes(':')) {
          const cells = expandRange(arg);
          for (const cell of cells) {
            const val = Number(cellMap[cell]);
            if (!isNaN(val)) count++;
          }
        } else {
          const val = Number(evaluateExpression(arg, cellMap));
          if (!isNaN(val)) count++;
        }
      }
      return count;
    }

    // 6. COUNTA
    if (funcName === 'COUNTA') {
      let count = 0;
      for (const arg of args) {
        if (arg.includes(':')) {
          const cells = expandRange(arg);
          for (const cell of cells) {
            if (cellMap[cell] !== undefined && String(cellMap[cell]).trim() !== '') count++;
          }
        } else {
          const val = evaluateExpression(arg, cellMap);
          if (val !== undefined && String(val).trim() !== '') count++;
        }
      }
      return count;
    }

    // 7. PROPER
    if (funcName === 'PROPER') {
      const text = String(evaluateExpression(args[0] || '', cellMap));
      return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    }

    // 8. UPPER
    if (funcName === 'UPPER') {
      const text = String(evaluateExpression(args[0] || '', cellMap));
      return text.toUpperCase();
    }

    // 9. LOWER
    if (funcName === 'LOWER') {
      const text = String(evaluateExpression(args[0] || '', cellMap));
      return text.toLowerCase();
    }

    // 10. LEFT
    if (funcName === 'LEFT') {
      const text = String(evaluateExpression(args[0] || '', cellMap));
      const count = args[1] ? parseInt(args[1], 10) : 1;
      return text.substring(0, count);
    }

    // 11. CONCAT / CONCATENATE
    if (funcName === 'CONCAT' || funcName === 'CONCATENATE') {
      return args.map((a) => String(evaluateExpression(a, cellMap))).join('');
    }

    // 12. IF
    if (funcName === 'IF') {
      const conditionStr = args[0] || '';
      const trueVal = evaluateExpression(args[1] || '', cellMap);
      const falseVal = evaluateExpression(args[2] || '', cellMap);

      // Evaluate condition like C2>=75
      let pass = false;
      const compMatch = conditionStr.match(/([A-Z0-9]+)\s*(>=|<=|>|<|==|=|!=|<>)\s*(.+)/i);
      if (compMatch) {
        const left = Number(evaluateExpression(compMatch[1], cellMap));
        const op = compMatch[2];
        const right = Number(evaluateExpression(compMatch[3], cellMap));

        if (op === '>=') pass = left >= right;
        else if (op === '<=') pass = left <= right;
        else if (op === '>') pass = left > right;
        else if (op === '<') pass = left < right;
        else if (op === '=' || op === '==') pass = left === right;
        else if (op === '!=' || op === '<>') pass = left !== right;
      }
      return pass ? trueVal : falseVal;
    }

    // 13. COUNTIF
    if (funcName === 'COUNTIF') {
      const rangeArg = args[0] || '';
      let criteria = (args[1] || '').replace(/["']/g, '').trim().toUpperCase();
      const cells = expandRange(rangeArg);
      let count = 0;
      for (const c of cells) {
        const val = String(cellMap[c] || '').trim().toUpperCase();
        if (val === criteria) count++;
      }
      return count;
    }

    // 14. SUMIF
    if (funcName === 'SUMIF') {
      const rangeArg = args[0] || '';
      let criteria = (args[1] || '').replace(/["']/g, '').trim().toUpperCase();
      const sumRangeArg = args[2] || rangeArg;
      const catCells = expandRange(rangeArg);
      const sumCells = expandRange(sumRangeArg);

      let sum = 0;
      for (let i = 0; i < catCells.length; i++) {
        const catVal = String(cellMap[catCells[i]] || '').trim().toUpperCase();
        if (catVal === criteria) {
          const numVal = Number(cellMap[sumCells[i]]);
          if (!isNaN(numVal)) sum += numVal;
        }
      }
      return sum;
    }

    // 15. VLOOKUP
    if (funcName === 'VLOOKUP') {
      const lookupVal = String(evaluateExpression(args[0] || '', cellMap)).trim().toUpperCase();
      const tableRange = args[1] || '';
      const colIdx = parseInt(args[2] || '1', 10);

      const [start, end] = tableRange.split(':').map((s) => s.trim().toUpperCase());
      if (start && end) {
        const startCol = start.match(/[A-Z]+/)?.[0] || 'A';
        const startRow = parseInt(start.match(/\d+/)?.[0] || '1', 10);
        const endRow = parseInt(end.match(/\d+/)?.[0] || '1', 10);

        const targetColCode = startCol.charCodeAt(0) + (colIdx - 1);
        const targetColLetter = String.fromCharCode(targetColCode);

        for (let r = startRow; r <= endRow; r++) {
          const keyCell = `${startCol}${r}`;
          const currentKey = String(cellMap[keyCell] || '').trim().toUpperCase();
          if (currentKey === lookupVal) {
            const resCell = `${targetColLetter}${r}`;
            return cellMap[resCell];
          }
        }
      }
      return null;
    }

    // 16. XLOOKUP
    if (funcName === 'XLOOKUP') {
      const lookupVal = String(evaluateExpression(args[0] || '', cellMap)).trim().toUpperCase();
      const lookupArray = expandRange(args[1] || '');
      const returnArray = expandRange(args[2] || '');

      for (let i = 0; i < lookupArray.length; i++) {
        const keyVal = String(cellMap[lookupArray[i]] || '').trim().toUpperCase();
        if (keyVal === lookupVal) {
          return cellMap[returnArray[i]];
        }
      }
      return null;
    }
  }

  // String concatenation with &
  if (clean.includes('&')) {
    const parts = clean.split('&');
    return parts.map((p) => String(evaluateExpression(p, cellMap))).join('');
  }

  // Check if string literal "something"
  if ((clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))) {
    return clean.slice(1, -1);
  }

  // Check if direct single cell reference e.g. "B2"
  const cellRefMatch = clean.toUpperCase().match(/^[A-Z]+\d+$/);
  if (cellRefMatch && cellMap[clean.toUpperCase()] !== undefined) {
    return cellMap[clean.toUpperCase()];
  }

  // Arithmetic evaluation e.g. "B2 + C2" or "5 * 14000" or "B2*C2"
  try {
    // Replace cell references with their numeric values
    let mathStr = clean.replace(/[A-Z]+\d+/gi, (matched) => {
      const val = cellMap[matched.toUpperCase()];
      return val !== undefined ? String(val) : '0';
    });

    // Clean any invalid chars for safety
    mathStr = mathStr.replace(/[^0-9+\-*/().\s]/g, '');
    if (mathStr.trim()) {
      // Evaluate basic arithmetic
      const fn = new Function(`return (${mathStr});`);
      return fn();
    }
  } catch (e) {
    // fallback
  }

  return clean;
}

export function evaluateFormula(userInput: string, level: LevelData): EvaluationResult {
  const rawInput = userInput.trim();

  if (!rawInput) {
    return {
      status: 'error',
      message: '❌ Masukkan rumus terlebih dahulu pada formula bar.',
    };
  }

  if (!rawInput.startsWith('=')) {
    return {
      status: 'error',
      message: '❌ Rumus Excel wajib diawali dengan tanda sama dengan (=).',
    };
  }

  // Check balanced parentheses
  const openCount = (rawInput.match(/\(/g) || []).length;
  const closeCount = (rawInput.match(/\)/g) || []).length;
  if (openCount !== closeCount) {
    return {
      status: 'error',
      message:
        '❌ Tanda kurung buka "(" dan kurung tutup ")" tidak seimbang. Pastikan setiap kurung buka memiliki pasangan kurung tutup.',
    };
  }

  // Check balanced quotes
  const quoteCount = (rawInput.match(/["']/g) || []).length;
  if (quoteCount % 2 !== 0) {
    return {
      status: 'error',
      message: '❌ Tanda petik teks belum ditutup dengan benar.',
    };
  }

  const normalizedInput = normalizeFormula(rawInput);
  const strippedInput = stripSpaces(normalizedInput);

  // 1. Direct match with canonical valid formulas list
  const normalizedValidList = level.validFormulas.map((f) => normalizeFormula(f));
  const strippedValidList = normalizedValidList.map((f) => stripSpaces(f));

  if (strippedValidList.some((valid) => valid === strippedInput)) {
    const calculatedValue = level.acceptedAnswers[0];
    return {
      status: 'success',
      message: '🎉 Luar Biasa! Rumus kamu 100% tepat dan berhasil dieksekusi.',
      calculatedValue: calculatedValue,
      details: level.explanation,
    };
  }

  // 2. Dynamic Evaluation using cell map
  const cellMap = getCellMap(level);
  const evaluatedVal = evaluateExpression(rawInput, cellMap);

  // Compare evaluated result with expected answers
  const expectedVal = level.acceptedAnswers[0];

  const isValueMatch =
    evaluatedVal !== null &&
    evaluatedVal !== undefined &&
    String(evaluatedVal).trim().toUpperCase() === String(expectedVal).trim().toUpperCase();

  if (isValueMatch) {
    // Check if user combined SUM with + on Level 1
    let tipsNote = '';
    if (level.id === 1 && /SUM.*[+]/i.test(rawInput)) {
      tipsNote =
        ' (Tips: Rumus kamu berhasil! Di Excel, kamu juga cukup menulis =B2+C2 tanpa fungsi =SUM() karena tanda "+" sudah bertindak sebagai penjumlahan).';
    }

    return {
      status: 'success',
      message: `🎉 Benar! Rumus berhasil menghasilkan nilai ${expectedVal}.${tipsNote}`,
      calculatedValue: expectedVal,
      details: level.explanation,
    };
  }

  // 3. Helpful diagnostic feedback for beginners
  const funcMatch = normalizedInput.match(/^=([A-Z]+)\(/);
  if (funcMatch) {
    const usedFunction = funcMatch[1];
    const expectedFunc = level.samplePlaceholder?.match(/^=([A-Z]+)\(/)?.[1];

    if (expectedFunc && usedFunction !== expectedFunc && !['SUM', 'PRODUCT'].includes(usedFunction)) {
      return {
        status: 'error',
        message: `❌ Kamu menggunakan fungsi =${usedFunction}(). Pada materi level ini, fokus gunakan formula =${expectedFunc}().`,
      };
    }

    if (usedFunction === 'VLOOKUP' && !normalizedInput.includes('FALSE') && !normalizedInput.includes('0')) {
      return {
        status: 'warning',
        message:
          '💡 Tips VLOOKUP: Tambahkan argumen FALSE (atau 0) di akhir rumus untuk memastikan pencarian persis (Exact Match).',
      };
    }

    if (usedFunction === 'IF' && !normalizedInput.includes('"') && !normalizedInput.includes("'")) {
      return {
        status: 'warning',
        message:
          '💡 Tips IF: Nilai teks (seperti "LULUS" atau "REMIDI") harus diapit oleh tanda petik dua (").',
      };
    }

    return {
      status: 'error',
      message: `❌ Argumen, rentang sel, atau kriteria di dalam =${usedFunction}() belum tepat. Periksa petunjuk atau lihat contoh sintaks!`,
    };
  }

  // 4. Arithmetic operator mistakes
  if (['+', '-', '*', '/'].some((op) => normalizedInput.includes(op))) {
    return {
      status: 'error',
      message: `❌ Nilai hasil kalkulasi (${evaluatedVal || 'tidak valid'}) belum sesuai dengan target ${expectedVal}. Periksa kembali alamat sel yang kamu masukkan.`,
    };
  }

  return {
    status: 'error',
    message: '❌ Format rumus belum tepat. Pastikan mengetik sesuai instruksi soal atau klik tombol "Petunjuk".',
  };
}
