export const SUM = (range) => {
  return range.reduce((acc, val) => acc + (Number(val) || 0), 0);
};

export const AVERAGE = (range) => {
  const sum = SUM(range);
  return sum / range.length;
};

export const MAX = (range) => {
  return Math.max(...range.map((val) => Number(val)).filter((val) => !isNaN(val)));
};

export const MIN = (range) => {
  return Math.min(...range.map((val) => Number(val)).filter((val) => !isNaN(val)));
};

export const COUNT = (range) => {
  return range.filter((val) => !isNaN(Number(val))).length;
};

export const TRIM = (text) => {
  return text.trim();
};

export const UPPER = (text) => {
  return text.toUpperCase();
};

export const LOWER = (text) => {
  return text.toLowerCase();
};

export const REMOVE_DUPLICATES = (range) => {
  return [...new Set(range)];
};

export const FIND_AND_REPLACE = (range, find, replace) => {
  return range.map((val) => val.replace(new RegExp(find, 'g'), replace));
};