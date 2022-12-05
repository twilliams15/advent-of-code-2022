import fs from "fs";
import map from "lodash/fp/map.js";
import pipe from "lodash/fp/pipe.js";
import orderBy from "lodash/fp/orderBy.js";
import split from "lodash/fp/split.js";
import sum from "lodash/fp/sum.js";
import take from "lodash/fp/take.js";

fs.readFile("./01-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const foodPerElf = split("\n\n")(data);
  const calsPerElf = pipe(
    map(pipe(split("\n"), map(Number), sum)),
    orderBy([], ["desc"])
  )(foodPerElf);

  // part i
  console.log(take(1)(calsPerElf));

  // part ii
  console.log(pipe(take(3), sum)(calsPerElf));
});
