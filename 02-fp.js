import fs from "fs";
import pipe from "lodash/fp/pipe.js";

import { map, reduceToSum, split } from "./utils.js";

fs.readFile("./02-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // part i
  const legend = {
    "B X": 1,
    "C Y": 2,
    "A Z": 3,
    "A X": 4,
    "B Y": 5,
    "C Z": 6,
    "C X": 7,
    "A Y": 8,
    "B Z": 9,
  };

  pipe(
    split("\n"),
    map((x) => legend[x]),
    reduceToSum
  )(data)(console.log);

  // part ii
  const legend2 = {
    "B X": 1,
    "C X": 2,
    "A X": 3,
    "A Y": 4,
    "B Y": 5,
    "C Y": 6,
    "C Z": 7,
    "A Z": 8,
    "B Z": 9,
  };

  pipe(
    split("\n"),
    map((x) => legend2[x]),
    reduceToSum
  )(data)(console.log);
});
