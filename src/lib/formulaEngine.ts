// Powerful Real-time Formula Calculation Engine for ExcelSimulator

export function normalizeFormulaInput(formula: string): string {
  let cleaned = formula.trim();
  cleaned = cleaned.replace(/['']/g, '"');
  const tokens = cleaned.split(/("[^"]*")/g);
  for (let i = 0; i < tokens.length; i++) {
    if (i % 2 === 0) {
      tokens[i] = tokens[i].replace(/;/g, ',').toUpperCase();
    } else {
      tokens[i] = tokens[i].toUpperCase();
    }
  }
  return tokens.join('');
}

export function expandCellRange(rangeStr: string): string[] {
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

export function evaluateFormulaValue(
  expr: string | number,
  cellValues: Record<string, string | number>,
  visited: Set<string> = new Set()
): string | number {
  if (typeof expr === 'number') return expr;
  if (!expr) return '';

  let clean = String(expr).trim();
  if (!clean.startsWith('=')) {
    // If it's a plain number formatted as string
    if (!isNaN(Number(clean)) && clean !== '') {
      return Number(clean);
    }
    return clean;
  }

  clean = clean.substring(1).trim();

  // Evaluate function calls e.g. SUM(...), IF(...)
  const funcMatch = clean.match(/^([A-Z0-9_]+)\s*\((.*)\)$/i);
  if (funcMatch) {
    const funcName = funcMatch[1].toUpperCase();
    const argsRaw = funcMatch[2];

    // Split args by comma (respecting quotes & nested parentheses)
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

    // Helper to get number value
    const getNum = (v: any) => {
      const n = Number(v);
      return isNaN(n) ? 0 : n;
    };

    // 1. SUM
    if (funcName === 'SUM') {
      let sum = 0;
      for (const arg of args) {
        if (arg.includes(':')) {
          for (const c of expandCellRange(arg)) {
            const v = evaluateFormulaValue(cellValues[c], cellValues, visited);
            const n = Number(v);
            if (!isNaN(n)) sum += n;
          }
        } else {
          const v = evaluateFormulaValue(`=${arg}`, cellValues, visited);
          const n = Number(v);
          if (!isNaN(n)) sum += n;
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
          for (const c of expandCellRange(arg)) {
            const v = evaluateFormulaValue(cellValues[c], cellValues, visited);
            const n = Number(v);
            if (!isNaN(n) && v !== '' && v !== undefined) {
              sum += n;
              count++;
            }
          }
        } else {
          const v = evaluateFormulaValue(`=${arg}`, cellValues, visited);
          const n = Number(v);
          if (!isNaN(n)) {
            sum += n;
            count++;
          }
        }
      }
      return count > 0 ? sum / count : 0;
    }

    // 3. MAX & MIN
    if (funcName === 'MAX' || funcName === 'MIN') {
      const nums: number[] = [];
      for (const arg of args) {
        if (arg.includes(':')) {
          for (const c of expandCellRange(arg)) {
            const v = evaluateFormulaValue(cellValues[c], cellValues, visited);
            const n = Number(v);
            if (!isNaN(n) && v !== '' && v !== undefined) nums.push(n);
          }
        } else {
          const v = evaluateFormulaValue(`=${arg}`, cellValues, visited);
          const n = Number(v);
          if (!isNaN(n)) nums.push(n);
        }
      }
      if (nums.length === 0) return 0;
      return funcName === 'MAX' ? Math.max(...nums) : Math.min(...nums);
    }

    // 4. COUNT & COUNTA & COUNTBLANK
    if (funcName === 'COUNT') {
      let count = 0;
      for (const arg of args) {
        const cells = arg.includes(':') ? expandCellRange(arg) : [arg];
        for (const c of cells) {
          const v = evaluateFormulaValue(cellValues[c] || c, cellValues, visited);
          if (!isNaN(Number(v)) && String(v).trim() !== '') count++;
        }
      }
      return count;
    }

    if (funcName === 'COUNTA') {
      let count = 0;
      for (const arg of args) {
        const cells = arg.includes(':') ? expandCellRange(arg) : [arg];
        for (const c of cells) {
          const v = evaluateFormulaValue(cellValues[c] || c, cellValues, visited);
          if (v !== undefined && String(v).trim() !== '') count++;
        }
      }
      return count;
    }

    if (funcName === 'COUNTBLANK') {
      let count = 0;
      for (const arg of args) {
        const cells = arg.includes(':') ? expandCellRange(arg) : [arg];
        for (const c of cells) {
          const v = cellValues[c];
          if (v === undefined || String(v).trim() === '') count++;
        }
      }
      return count;
    }

    // 5. LARGE & SMALL
    if (funcName === 'LARGE' || funcName === 'SMALL') {
      const rangeArg = args[0] || '';
      const k = parseInt(args[1] || '1', 10);
      const cells = expandCellRange(rangeArg);
      const nums: number[] = [];
      for (const c of cells) {
        const v = evaluateFormulaValue(cellValues[c], cellValues, visited);
        const n = Number(v);
        if (!isNaN(n)) nums.push(n);
      }
      nums.sort((a, b) => (funcName === 'LARGE' ? b - a : a - b));
      return nums[k - 1] !== undefined ? nums[k - 1] : 0;
    }

    // 6. PROPER, UPPER, LOWER, TRIM, LEN
    if (funcName === 'PROPER') {
      const text = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
    }

    if (funcName === 'UPPER') {
      return String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).toUpperCase();
    }

    if (funcName === 'LOWER') {
      return String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).toLowerCase();
    }

    if (funcName === 'TRIM') {
      return String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).trim().replace(/\s+/g, ' ');
    }

    if (funcName === 'LEN') {
      return String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).length;
    }

    // 7. LEFT, RIGHT, MID
    if (funcName === 'LEFT') {
      const text = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      const count = args[1] ? parseInt(args[1], 10) : 1;
      return text.substring(0, count);
    }

    if (funcName === 'RIGHT') {
      const text = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      const count = args[1] ? parseInt(args[1], 10) : 1;
      return text.substring(Math.max(0, text.length - count));
    }

    if (funcName === 'MID') {
      const text = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      const start = args[1] ? parseInt(args[1], 10) - 1 : 0;
      const count = args[2] ? parseInt(args[2], 10) : text.length;
      return text.substring(start, start + count);
    }

    // 8. CONCAT & TEXTJOIN
    if (funcName === 'CONCAT' || funcName === 'CONCATENATE') {
      return args
        .map((a) => {
          if (a.includes(':')) {
            return expandCellRange(a)
              .map((c) => String(evaluateFormulaValue(cellValues[c], cellValues, visited)))
              .join('');
          }
          return String(evaluateFormulaValue(`=${a}`, cellValues, visited));
        })
        .join('');
    }

    // 9. IF & IFS
    if (funcName === 'IF') {
      const condStr = args[0] || '';
      const trueVal = evaluateFormulaValue(`=${args[1]}`, cellValues, visited);
      const falseVal = args[2] !== undefined ? evaluateFormulaValue(`=${args[2]}`, cellValues, visited) : 'FALSE';

      // Evaluate condition
      let condPassed = false;
      const comp = condStr.match(/([A-Z0-9_\s"']+)\s*(>=|<=|<>|!=|>|<|==|=)\s*([A-Z0-9_\s"']+)/i);
      if (comp) {
        const leftVal = evaluateFormulaValue(`=${comp[1]}`, cellValues, visited);
        const op = comp[2];
        const rightVal = evaluateFormulaValue(`=${comp[3]}`, cellValues, visited);

        const leftNum = Number(leftVal);
        const rightNum = Number(rightVal);

        if (!isNaN(leftNum) && !isNaN(rightNum)) {
          if (op === '>=') condPassed = leftNum >= rightNum;
          else if (op === '<=') condPassed = leftNum <= rightNum;
          else if (op === '>') condPassed = leftNum > rightNum;
          else if (op === '<') condPassed = leftNum < rightNum;
          else if (op === '=' || op === '==') condPassed = leftNum === rightNum;
          else if (op === '<>' || op === '!=') condPassed = leftNum !== rightNum;
        } else {
          const lStr = String(leftVal).trim().toUpperCase();
          const rStr = String(rightVal).trim().toUpperCase();
          if (op === '=' || op === '==') condPassed = lStr === rStr;
          else if (op === '<>' || op === '!=') condPassed = lStr !== rStr;
        }
      }
      return condPassed ? trueVal : falseVal;
    }

    // 10. COUNTIF & COUNTIFS
    if (funcName === 'COUNTIF') {
      const rangeArg = args[0] || '';
      const criteria = String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited))
        .replace(/["']/g, '')
        .trim()
        .toUpperCase();
      const cells = expandCellRange(rangeArg);
      let count = 0;
      for (const c of cells) {
        const val = String(evaluateFormulaValue(cellValues[c], cellValues, visited)).trim().toUpperCase();
        if (criteria.startsWith('>=')) {
          const target = Number(criteria.slice(2));
          if (Number(val) >= target) count++;
        } else if (criteria.startsWith('<=')) {
          const target = Number(criteria.slice(2));
          if (Number(val) <= target) count++;
        } else if (criteria.startsWith('>')) {
          const target = Number(criteria.slice(1));
          if (Number(val) > target) count++;
        } else if (criteria.startsWith('<')) {
          const target = Number(criteria.slice(1));
          if (Number(val) < target) count++;
        } else if (val === criteria) {
          count++;
        }
      }
      return count;
    }

    // 11. SUMIF
    if (funcName === 'SUMIF') {
      const catRange = expandCellRange(args[0] || '');
      const criteria = String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited))
        .replace(/["']/g, '')
        .trim()
        .toUpperCase();
      const sumRange = args[2] ? expandCellRange(args[2]) : catRange;

      let sum = 0;
      for (let i = 0; i < catRange.length; i++) {
        const catVal = String(evaluateFormulaValue(cellValues[catRange[i]], cellValues, visited)).trim().toUpperCase();
        if (catVal === criteria) {
          const numVal = Number(evaluateFormulaValue(cellValues[sumRange[i]], cellValues, visited));
          if (!isNaN(numVal)) sum += numVal;
        }
      }
      return sum;
    }

    // 12. AVERAGEIF
    if (funcName === 'AVERAGEIF') {
      const catRange = expandCellRange(args[0] || '');
      const criteria = String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited))
        .replace(/["']/g, '')
        .trim()
        .toUpperCase();
      const avgRange = args[2] ? expandCellRange(args[2]) : catRange;

      let sum = 0;
      let count = 0;
      for (let i = 0; i < catRange.length; i++) {
        const catVal = String(evaluateFormulaValue(cellValues[catRange[i]], cellValues, visited)).trim().toUpperCase();
        if (catVal === criteria) {
          const numVal = Number(evaluateFormulaValue(cellValues[avgRange[i]], cellValues, visited));
          if (!isNaN(numVal)) {
            sum += numVal;
            count++;
          }
        }
      }
      return count > 0 ? sum / count : 0;
    }

    // 13. VLOOKUP
    if (funcName === 'VLOOKUP') {
      const lookupVal = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).trim().toUpperCase();
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
          const currentKey = String(evaluateFormulaValue(cellValues[keyCell], cellValues, visited)).trim().toUpperCase();
          if (currentKey === lookupVal) {
            const resCell = `${targetColLetter}${r}`;
            return evaluateFormulaValue(cellValues[resCell], cellValues, visited);
          }
        }
      }
      return '#N/A';
    }

    // 14. XLOOKUP
    if (funcName === 'XLOOKUP') {
      const lookupVal = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).trim().toUpperCase();
      const lookupArray = expandCellRange(args[1] || '');
      const returnArray = expandCellRange(args[2] || '');
      const ifNotFound = args[3] ? evaluateFormulaValue(`=${args[3]}`, cellValues, visited) : '#N/A';

      for (let i = 0; i < lookupArray.length; i++) {
        const keyVal = String(evaluateFormulaValue(cellValues[lookupArray[i]], cellValues, visited)).trim().toUpperCase();
        if (keyVal === lookupVal) {
          return evaluateFormulaValue(cellValues[returnArray[i]], cellValues, visited);
        }
      }
      return ifNotFound;
    }

    // 15. INDEX & MATCH
    if (funcName === 'INDEX') {
      const range = expandCellRange(args[0] || '');
      const rowIdx = parseInt(String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)), 10);
      const targetCell = range[rowIdx - 1];
      return targetCell ? evaluateFormulaValue(cellValues[targetCell], cellValues, visited) : '#REF!';
    }

    if (funcName === 'MATCH') {
      const lookupVal = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).trim().toUpperCase();
      const range = expandCellRange(args[1] || '');
      for (let i = 0; i < range.length; i++) {
        const val = String(evaluateFormulaValue(cellValues[range[i]], cellValues, visited)).trim().toUpperCase();
        if (val === lookupVal) return i + 1;
      }
      return '#N/A';
    }

    // 16. PMT (Financial Loan Payment)
    if (funcName === 'PMT') {
      const rate = Number(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      const nper = Number(evaluateFormulaValue(`=${args[1]}`, cellValues, visited));
      const pv = Number(evaluateFormulaValue(`=${args[2]}`, cellValues, visited));
      if (rate === 0) return -(pv / nper);
      const pmt = (rate * pv) / (1 - Math.pow(1 + rate, -nper));
      return Math.round(pmt);
    }
  }

  // String concatenation with &
  if (clean.includes('&')) {
    const parts = clean.split('&');
    return parts
      .map((p) => String(evaluateFormulaValue(`=${p.trim()}`, cellValues, visited)))
      .join('');
  }

  // Literal quoted string e.g. "Hello"
  if ((clean.startsWith('"') && clean.endsWith('"')) || (clean.startsWith("'") && clean.endsWith("'"))) {
    return clean.slice(1, -1);
  }

  // Single cell reference e.g. "B2"
  const cellRefMatch = clean.toUpperCase().match(/^[A-Z]+\d+$/);
  if (cellRefMatch) {
    const ref = clean.toUpperCase();
    if (visited.has(ref)) return '#CIRCULAR!';
    visited.add(ref);
    const result = evaluateFormulaValue(cellValues[ref], cellValues, visited);
    visited.delete(ref);
    return result !== undefined ? result : '';
  }

  // General Arithmetic e.g. "B2 + C2", "5 * 14000", "(A2+B2)*C2"
  try {
    let mathStr = clean.replace(/[A-Z]+\d+/gi, (matched) => {
      const cellRef = matched.toUpperCase();
      const val = evaluateFormulaValue(cellValues[cellRef], cellValues, visited);
      return val !== undefined && !isNaN(Number(val)) ? String(val) : '0';
    });

    // Support % symbol (e.g. 10% -> 0.10)
    mathStr = mathStr.replace(/([0-9.]+)\s*%/g, '($1/100)');

    // Support ^ for power (e.g. 2^3 -> Math.pow(2,3))
    mathStr = mathStr.replace(/([0-9.]+)\s*\^\s*([0-9.]+)/g, 'Math.pow($1,$2)');

    // Sanitize
    mathStr = mathStr.replace(/[^0-9+\-*/().\sMath,pow]/g, '');
    if (mathStr.trim()) {
      const fn = new Function(`return (${mathStr});`);
      const res = fn();
      if (!isNaN(res) && typeof res === 'number') {
        return Math.round(res * 100) / 100;
      }
      return res;
    }
  } catch (e) {
    // fallback
  }

  return clean;
}
