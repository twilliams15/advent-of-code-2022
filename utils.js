import filter from "lodash/fp/filter.js";
import head from "lodash/fp/head.js";
import map from "lodash/fp/map.js";
import pipe from "lodash/fp/pipe.js";

export const slidingWindow =
  (length, steps = 1) =>
  (data) => {
    const window = [];
    for (let i = 0; i < data.length - length - 1; i += steps) {
      let result = "";
      for (let j = 0; j < length; j++) {
        result += data[i + j];
      }
      window.push(result);
    }

    return window;
  };

export const getFirstUniqueSet = (length) =>
  pipe(
    map((x) => new Set(x)),
    filter((x) => x.size === length),
    head
  );
