export const map = (mapper) => (source) => (cb) =>
  source((x) => cb(x.map(mapper)));
export const sort = (sorter) => (source) => (cb) =>
  source((x) => cb(x.sort(sorter)));
export const split = (splitter) => (str) => (cb) => cb(str.split(splitter));
export const reduce = (reducer) => (source) => (cb) =>
  source((x) => cb(x.reduce(reducer)));
export const take = (amount) => (source) => (cb) =>
  source((x) => cb(x.slice(0, amount)));
export const takeHead = (source) => (cb) =>
  source((x) => cb(x.slice(0, x.length / 2)));
export const takeTail = (source) => (cb) =>
  source((x) => cb(x.slice(x.length / 2)));

export const sortDesc = sort((a, b) => b - a);
export const reduceToSum = reduce((a, c) => (a += c));
export const splitOnNewline = split("\n");
