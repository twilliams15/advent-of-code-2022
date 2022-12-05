export const filter = (condition) => (source) =>
  source((x) => x.filter(condition));
export const includes = (search) => (source) =>
  source((x) => x.includes(search));
export const map = (mapper) => (source) => source((x) => x.map(mapper));
export const sort = (sorter) => (source) => source((x) => x.sort(sorter));
export const split = (splitter) => (str) => str.split(splitter);
export const reduce = (reducer) => (source) => source((x) => x.reduce(reducer));
export const take = (amount) => (source) => source((x) => x.slice(0, amount));
export const takeHead = (source) => source((x) => x.slice(0, x.length / 2));
export const takeTail = (source) => source((x) => x.slice(x.length / 2));

export const sortDesc = sort((a, b) => b - a);
export const reduceToSum = reduce((a, c) => (a += c));
export const splitOnNewline = split("\n");
