import fs from "fs";
import pipe from "lodash/fp/pipe.js";

import {
  map,
  reduceToSum,
  sortDesc,
  split,
  splitOnNewline,
  take,
} from "./utils.js";

fs.readFile("./01-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const foodPerElf = split("\n\n")(data);
  const calsPerElf = pipe(
    map((x) => pipe(splitOnNewline, map(Number), reduceToSum)(x)((x) => x)),
    sortDesc
  )(foodPerElf);

  // part i
  take(1)(calsPerElf)(console.log);

  // part ii
  pipe(take(3), reduceToSum)(calsPerElf)(console.log);
});
