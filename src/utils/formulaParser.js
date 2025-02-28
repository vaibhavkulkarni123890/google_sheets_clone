import { SUM, AVERAGE, MAX, MIN, COUNT, TRIM, UPPER, LOWER, REMOVE_DUPLICATES, FIND_AND_REPLACE } from './functions';

export const parseFormula = (formula, data) => {
  if (formula.startsWith('=SUM')) {
    const range = formula.match(/\((.*?)\)/)[1].split(':');
    const [start, end] = range;
    const values = getRangeValues(start, end, data);
    return SUM(values);
  }
  if (formula.startsWith('=AVERAGE')) {
    const range = formula.match(/\((.*?)\)/)[1].split(':');
    const [start, end] = range;
    const values = getRangeValues(start, end, data);
    return AVERAGE(values);
  }
  if (formula.startsWith('=MAX')) {
    const range = formula.match(/\((.*?)\)/)[1].split(':');
    const [start, end] = range;
    const values = getRangeValues(start, end, data);
    return MAX(values);
  }
  if (formula.startsWith('=MIN')) {
    const range = formula.match(/\((.*?)\)/)[1].split(':');
    const [start, end] = range;
    const values = getRangeValues(start, end, data);
    return MIN(values);
  }
  if (formula.startsWith('=COUNT')) {
    const range = formula.match(/\((.*?)\)/)[1].split(':');
    const [start, end] = range;
    const values = getRangeValues(start, end, data);
    return COUNT(values);
  }
  if (formula.startsWith('=TRIM')) {
    const cell = formula.match(/\((.*?)\)/)[1];
    const [col, row] = [cell.charCodeAt(0) - 65, parseInt(cell.slice(1)) - 1];
    return TRIM(data[row][col]);
  }
  if (formula.startsWith('=UPPER')) {
    const cell = formula.match(/\((.*?)\)/)[1];
    const [col, row] = [cell.charCodeAt(0) - 65, parseInt(cell.slice(1)) - 1];
    return UPPER(data[row][col]);
  }
  if (formula.startsWith('=LOWER')) {
    const cell = formula.match(/\((.*?)\)/)[1];
    const [col, row] = [cell.charCodeAt(0) - 65, parseInt(cell.slice(1)) - 1];
    return LOWER(data[row][col]);
  }
  if (formula.startsWith('=REMOVE_DUPLICATES')) {
    const range = formula.match(/\((.*?)\)/)[1].split(':');
    const [start, end] = range;
    const values = getRangeValues(start, end, data);
    return REMOVE_DUPLICATES(values).join(', ');
  }
  if (formula.startsWith('=FIND_AND_REPLACE')) {
    const [range, find, replace] = formula.match(/\((.*?)\)/)[1].split(',');
    const values = getRangeValues(range.split(':')[0], range.split(':')[1], data);
    return FIND_AND_REPLACE(values, find, replace).join(', ');
  }
  return formula;
};

const getRangeValues = (start, end, data) => {
  const [startCol, startRow] = [start.charCodeAt(0) - 65, parseInt(start.slice(1)) - 1];
  const [endCol, endRow] = [end.charCodeAt(0) - 65, parseInt(end.slice(1)) - 1];
  const values = [];
  for (let i = startRow; i <= endRow; i++) {
    for (let j = startCol; j <= endCol; j++) {
      values.push(data[i][j]);
    }
  }
  return values;
};