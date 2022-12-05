export const split = (splitter) => (str) => (cb) => cb(str.split(splitter));
export const map = (mapper) => (source) => (cb) =>
  source((x) => cb(x.map(mapper)));
export const sort = (sorter) => (source) => (cb) =>
  source((x) => cb(x.sort(sorter)));
export const take = (amount) => (source) => (cb) =>
  source((x) => cb(x.slice(0, amount)));
export const reduce = (reducer) => (source) => (cb) =>
  source((x) => cb(x.reduce(reducer)));

export const sortDesc = sort((a, b) => b - a);
export const reduceToSum = reduce((a, c) => (a += c));
