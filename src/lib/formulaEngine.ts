// Powerful Real-time Formula Calculation Engine for ExcelSimulator (Multi-Sheet & 2D Matrix Support)

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

export function parseCellOrRange(token: string): { sheet?: string; range: string } {
  const trimmed = token.trim();
  const bangIdx = trimmed.indexOf('!');
  if (bangIdx !== -1) {
    let sheetName = trimmed.substring(0, bangIdx).replace(/^['"]|['"]$/g, '');
    let rangeStr = trimmed.substring(bangIdx + 1);
    return { sheet: sheetName, range: rangeStr };
  }
  return { range: trimmed };
}

export function expandCellRange(rangeStr: string, defaultSheet?: string): string[] {
  const parsed = parseCellOrRange(rangeStr);
  const sheet = parsed.sheet || defaultSheet;
  const sheetPrefix = sheet ? `'${sheet}'!` : '';

  const [start, end] = parsed.range.split(':').map((s) => s.trim().toUpperCase());
  if (!start || !end) return [`${sheetPrefix}${parsed.range.trim().toUpperCase()}`];

  const startCol = start.match(/[A-Z]+/)?.[0] || '';
  const startRow = parseInt(start.match(/\d+/)?.[0] || '0', 10);
  const endCol = end.match(/[A-Z]+/)?.[0] || '';
  const endRow = parseInt(end.match(/\d+/)?.[0] || '0', 10);

  if (!startCol || !endCol || !startRow || !endRow) return [`${sheetPrefix}${start}`, `${sheetPrefix}${end}`];

  const startColCode = startCol.charCodeAt(0);
  const endColCode = endCol.charCodeAt(0);

  const cells: string[] = [];
  for (let r = Math.min(startRow, endRow); r <= Math.max(startRow, endRow); r++) {
    for (let c = Math.min(startColCode, endColCode); c <= Math.max(startColCode, endColCode); c++) {
      cells.push(`${sheetPrefix}${String.fromCharCode(c)}${r}`);
    }
  }
  return cells;
}

// Resolve cell value taking sheet prefix into account
function getCellValue(ref: string, cellValues: Record<string, string | number>): any {
  if (cellValues[ref] !== undefined) return cellValues[ref];

  // Try without quotes on sheet e.g. Sheet1!A1 vs 'Sheet1'!A1
  const cleanRef = ref.replace(/['"]/g, '');
  if (cellValues[cleanRef] !== undefined) return cellValues[cleanRef];

  // Try just cell if single sheet
  const bangIdx = ref.indexOf('!');
  if (bangIdx !== -1) {
    const justCell = ref.substring(bangIdx + 1);
    if (cellValues[justCell] !== undefined) return cellValues[justCell];
  }

  return undefined;
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
      if (char === '"' || char === "'") inQuotes = !inQuotes;
      else if (char === '(' && !inQuotes) depth++;
      else if (char === ')' && !inQuotes) depth--;
      else if ((char === ',' || char === ';') && !inQuotes && depth === 0) {
        args.push(current.trim());
        current = '';
        continue;
      }
      current += char;
    }
    if (current.trim() || args.length > 0) {
      args.push(current.trim());
    }

    // Helper to resolve cell range into values
    const resolveRangeValues = (arg: string): (string | number)[] => {
      const trimmed = arg.trim();
      if (trimmed.includes(':')) {
        const cells = expandCellRange(trimmed);
        return cells
          .map((c) => {
            const raw = getCellValue(c, cellValues);
            return raw !== undefined ? evaluateFormulaValue(raw, cellValues, visited) : '';
          })
          .filter((v) => v !== '' && v !== undefined);
      }
      const val = evaluateFormulaValue(`=${trimmed}`, cellValues, visited);
      return [val];
    };

    // 1. SUM
    if (funcName === 'SUM') {
      let sum = 0;
      args.forEach((arg) => {
        const vals = resolveRangeValues(arg);
        vals.forEach((v) => {
          const n = Number(v);
          if (!isNaN(n)) sum += n;
        });
      });
      return sum;
    }

    // 2. AVERAGE
    if (funcName === 'AVERAGE') {
      let sum = 0;
      let count = 0;
      args.forEach((arg) => {
        const vals = resolveRangeValues(arg);
        vals.forEach((v) => {
          const n = Number(v);
          if (!isNaN(n)) {
            sum += n;
            count++;
          }
        });
      });
      return count > 0 ? Math.round((sum / count) * 100) / 100 : 0;
    }

    // 3. MAX & MIN
    if (funcName === 'MAX') {
      let max = -Infinity;
      args.forEach((arg) => {
        const vals = resolveRangeValues(arg);
        vals.forEach((v) => {
          const n = Number(v);
          if (!isNaN(n) && n > max) max = n;
        });
      });
      return max === -Infinity ? 0 : max;
    }

    if (funcName === 'MIN') {
      let min = Infinity;
      args.forEach((arg) => {
        const vals = resolveRangeValues(arg);
        vals.forEach((v) => {
          const n = Number(v);
          if (!isNaN(n) && n < min) min = n;
        });
      });
      return min === Infinity ? 0 : min;
    }

    // 4. COUNT, COUNTA, COUNTBLANK
    if (funcName === 'COUNT') {
      let count = 0;
      args.forEach((arg) => {
        const vals = resolveRangeValues(arg);
        vals.forEach((v) => {
          if (!isNaN(Number(v)) && String(v).trim() !== '') count++;
        });
      });
      return count;
    }

    if (funcName === 'COUNTA') {
      let count = 0;
      args.forEach((arg) => {
        const vals = resolveRangeValues(arg);
        vals.forEach((v) => {
          if (v !== '' && v !== undefined && v !== null) count++;
        });
      });
      return count;
    }

    // 5. LARGE & SMALL
    if (funcName === 'LARGE') {
      const range = resolveRangeValues(args[0])
        .map((n) => Number(n))
        .filter((n) => !isNaN(n));
      const k = parseInt(String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)), 10) || 1;
      range.sort((a, b) => b - a);
      return range[k - 1] !== undefined ? range[k - 1] : '#NUM!';
    }

    if (funcName === 'SMALL') {
      const range = resolveRangeValues(args[0])
        .map((n) => Number(n))
        .filter((n) => !isNaN(n));
      const k = parseInt(String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)), 10) || 1;
      range.sort((a, b) => a - b);
      return range[k - 1] !== undefined ? range[k - 1] : '#NUM!';
    }

    // 6. TEXT FUNCTIONS
    if (funcName === 'PROPER') {
      const str = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      return str.toLowerCase().replace(/(?:^|\s|\/|-)\w/g, (c) => c.toUpperCase());
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

    if (funcName === 'LEFT') {
      const text = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      const num = args[1] ? parseInt(String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)), 10) : 1;
      return text.substring(0, num);
    }

    if (funcName === 'RIGHT') {
      const text = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      const num = args[1] ? parseInt(String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)), 10) : 1;
      return text.substring(text.length - num);
    }

    if (funcName === 'MID') {
      const text = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited));
      const start = parseInt(String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)), 10);
      const len = parseInt(String(evaluateFormulaValue(`=${args[2]}`, cellValues, visited)), 10);
      return text.substring(start - 1, start - 1 + len);
    }

    if (funcName === 'CONCAT' || funcName === 'CONCATENATE') {
      return args
        .map((a) => String(evaluateFormulaValue(`=${a}`, cellValues, visited)))
        .join('');
    }

    // 7. IF & IFS
    if (funcName === 'IF') {
      const conditionStr = args[0];
      const trueVal = evaluateFormulaValue(`=${args[1]}`, cellValues, visited);
      const falseVal = args[2] !== undefined ? evaluateFormulaValue(`=${args[2]}`, cellValues, visited) : 'FALSE';

      let isTrue = false;
      const opMatch = conditionStr.match(/(.*?)(>=|<=|<>|!=|>|<|=)(.*)/);
      if (opMatch) {
        const left = evaluateFormulaValue(`=${opMatch[1].trim()}`, cellValues, visited);
        const op = opMatch[2];
        const right = evaluateFormulaValue(`=${opMatch[3].trim()}`, cellValues, visited);

        const leftNum = Number(left);
        const rightNum = Number(right);
        const isNumeric = !isNaN(leftNum) && !isNaN(rightNum) && String(left).trim() !== '' && String(right).trim() !== '';

        if (op === '=') isTrue = isNumeric ? leftNum === rightNum : String(left).toUpperCase() === String(right).toUpperCase();
        else if (op === '>' || op === '>') isTrue = isNumeric ? leftNum > rightNum : String(left) > String(right);
        else if (op === '<') isTrue = isNumeric ? leftNum < rightNum : String(left) < String(right);
        else if (op === '>=') isTrue = isNumeric ? leftNum >= rightNum : String(left) >= String(right);
        else if (op === '<=') isTrue = isNumeric ? leftNum <= rightNum : String(left) <= String(right);
        else if (op === '<>' || op === '!=') isTrue = isNumeric ? leftNum !== rightNum : String(left) !== String(right);
      } else {
        const val = evaluateFormulaValue(`=${conditionStr}`, cellValues, visited);
        isTrue = Boolean(val && val !== '0' && val !== 0 && val !== 'FALSE');
      }

      return isTrue ? trueVal : falseVal;
    }

    // 8. COUNTIF & SUMIF
    if (funcName === 'COUNTIF') {
      const cells = expandCellRange(args[0]);
      let criteria = String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)).trim().toUpperCase();
      criteria = criteria.replace(/^"|"$/g, '');

      let count = 0;
      cells.forEach((c) => {
        const val = String(evaluateFormulaValue(getCellValue(c, cellValues), cellValues, visited)).trim().toUpperCase();
        if (criteria.startsWith('>=')) {
          if (Number(val) >= Number(criteria.slice(2))) count++;
        } else if (criteria.startsWith('<=')) {
          if (Number(val) <= Number(criteria.slice(2))) count++;
        } else if (criteria.startsWith('>')) {
          if (Number(val) > Number(criteria.slice(1))) count++;
        } else if (criteria.startsWith('<')) {
          if (Number(val) < Number(criteria.slice(1))) count++;
        } else if (criteria.endsWith('*')) {
          const prefix = criteria.slice(0, -1);
          if (val.startsWith(prefix)) count++;
        } else {
          if (val === criteria) count++;
        }
      });
      return count;
    }

    if (funcName === 'SUMIF') {
      const rangeCells = expandCellRange(args[0]);
      let criteria = String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)).trim().toUpperCase();
      criteria = criteria.replace(/^"|"$/g, '');
      const sumCells = args[2] ? expandCellRange(args[2]) : rangeCells;

      let sum = 0;
      rangeCells.forEach((c, idx) => {
        const val = String(evaluateFormulaValue(getCellValue(c, cellValues), cellValues, visited)).trim().toUpperCase();
        let match = false;
        if (criteria.startsWith('>=')) match = Number(val) >= Number(criteria.slice(2));
        else if (criteria.startsWith('<=')) match = Number(val) <= Number(criteria.slice(2));
        else if (criteria.startsWith('>')) match = Number(val) > Number(criteria.slice(1));
        else if (criteria.startsWith('<')) match = Number(val) < Number(criteria.slice(1));
        else match = val === criteria;

        if (match && sumCells[idx]) {
          const sVal = Number(evaluateFormulaValue(getCellValue(sumCells[idx], cellValues), cellValues, visited));
          if (!isNaN(sVal)) sum += sVal;
        }
      });
      return sum;
    }

    // 9. VLOOKUP
    if (funcName === 'VLOOKUP') {
      const lookupVal = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).trim().toUpperCase();
      const rangeArg = args[1] || '';
      const colIdx = parseInt(String(evaluateFormulaValue(`=${args[2]}`, cellValues, visited)), 10);

      const parsed = parseCellOrRange(rangeArg);
      const sheetPrefix = parsed.sheet ? `'${parsed.sheet}'!` : '';
      const [start, end] = parsed.range.split(':');

      if (start && end && colIdx > 0) {
        const startCol = start.match(/[A-Z]+/)?.[0] || 'A';
        const startRow = parseInt(start.match(/\d+/)?.[0] || '1', 10);
        const endRow = parseInt(end.match(/\d+/)?.[0] || '1', 10);

        const targetColCode = startCol.charCodeAt(0) + (colIdx - 1);
        const targetColLetter = String.fromCharCode(targetColCode);

        for (let r = startRow; r <= endRow; r++) {
          const keyCell = `${sheetPrefix}${startCol}${r}`;
          const currentKey = String(evaluateFormulaValue(getCellValue(keyCell, cellValues), cellValues, visited)).trim().toUpperCase();
          if (currentKey === lookupVal) {
            const resCell = `${sheetPrefix}${targetColLetter}${r}`;
            return evaluateFormulaValue(getCellValue(resCell, cellValues), cellValues, visited);
          }
        }
      }
      return '#N/A';
    }

    // 10. XLOOKUP
    if (funcName === 'XLOOKUP') {
      const lookupVal = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).trim().toUpperCase();
      const lookupArray = expandCellRange(args[1] || '');
      const returnArray = expandCellRange(args[2] || '');
      const ifNotFound = args[3] ? evaluateFormulaValue(`=${args[3]}`, cellValues, visited) : '#N/A';

      for (let i = 0; i < lookupArray.length; i++) {
        const keyVal = String(evaluateFormulaValue(getCellValue(lookupArray[i], cellValues), cellValues, visited)).trim().toUpperCase();
        if (keyVal === lookupVal) {
          return evaluateFormulaValue(getCellValue(returnArray[i], cellValues), cellValues, visited);
        }
      }
      return ifNotFound;
    }

    // 11. INDEX & MATCH (With 2D Matrix Support)
    if (funcName === 'INDEX') {
      const rangeArg = args[0] || '';
      const parsed = parseCellOrRange(rangeArg);
      const sheetPrefix = parsed.sheet ? `'${parsed.sheet}'!` : '';
      const [start, end] = parsed.range.split(':');

      const rowIdx = parseInt(String(evaluateFormulaValue(`=${args[1]}`, cellValues, visited)), 10);
      const colIdx = args[2] ? parseInt(String(evaluateFormulaValue(`=${args[2]}`, cellValues, visited)), 10) : 1;

      if (start && end) {
        const startCol = start.match(/[A-Z]+/)?.[0] || 'A';
        const startRow = parseInt(start.match(/\d+/)?.[0] || '1', 10);
        const targetColCode = startCol.charCodeAt(0) + (colIdx - 1);
        const targetCol = String.fromCharCode(targetColCode);
        const targetRow = startRow + (rowIdx - 1);

        const targetRef = `${sheetPrefix}${targetCol}${targetRow}`;
        return evaluateFormulaValue(getCellValue(targetRef, cellValues), cellValues, visited);
      }

      const flatRange = expandCellRange(rangeArg);
      const targetCell = flatRange[rowIdx - 1];
      return targetCell ? evaluateFormulaValue(getCellValue(targetCell, cellValues), cellValues, visited) : '#REF!';
    }

    if (funcName === 'MATCH') {
      const lookupVal = String(evaluateFormulaValue(`=${args[0]}`, cellValues, visited)).trim().toUpperCase();
      const range = expandCellRange(args[1] || '');
      for (let i = 0; i < range.length; i++) {
        const val = String(evaluateFormulaValue(getCellValue(range[i], cellValues), cellValues, visited)).trim().toUpperCase();
        if (val === lookupVal) return i + 1;
      }
      return '#N/A';
    }

    // 12. PMT
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

  // Single cell reference (e.g. "B2" or "'Desk Layout'!B3")
  const parsedSingle = parseCellOrRange(clean);
  if (parsedSingle.range.toUpperCase().match(/^[A-Z]+\d+$/)) {
    const sheetPrefix = parsedSingle.sheet ? `'${parsedSingle.sheet}'!` : '';
    const fullRef = `${sheetPrefix}${parsedSingle.range.toUpperCase()}`;
    if (visited.has(fullRef)) return '#CIRCULAR!';
    visited.add(fullRef);
    const result = evaluateFormulaValue(getCellValue(fullRef, cellValues), cellValues, visited);
    visited.delete(fullRef);
    return result !== undefined ? result : '';
  }

  // General Arithmetic
  try {
    let mathStr = clean.replace(/('[^']+'!|[A-Za-z0-9_]+!)?[A-Z]+\d+/gi, (matched) => {
      const val = evaluateFormulaValue(getCellValue(matched, cellValues), cellValues, visited);
      return val !== undefined && !isNaN(Number(val)) ? String(val) : '0';
    });

    mathStr = mathStr.replace(/([0-9.]+)\s*%/g, '($1/100)');
    mathStr = mathStr.replace(/([0-9.]+)\s*\^\s*([0-9.]+)/g, 'Math.pow($1,$2)');
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
