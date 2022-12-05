import fs from "fs";
import pipe from "lodash/fp/pipe.js";

import { map, reduceToSum, splitOnNewline, take, takeTail } from "./utils.js";

fs.readFile("./03-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const priorities = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // part i
  pipe(
    splitOnNewline,
    map((x) => {
      pipe(filter((item) => pipe(includes(item)(takeTail(x)))(take(1))));
      const h1 = x.slice(0, x.length / 2);
      const h2 = x.slice(x.length / 2);
      return [...h1].filter((item) => h2.includes(item)).shift();
    }),
    map((x) => priorities.indexOf(x)),
    reduceToSum
  )(data)(console.log);

  // part ii
  const result = [];
  const iter = data.split("\n").entries();

  while (true) {
    const a = iter.next();
    if (a.done) break;
    const [, b] = iter.next().value;
    const [, c] = iter.next().value;

    result.push(
      [...a.value[1]]
        .filter((item) => b.includes(item) && c.includes(item))
        .shift()
    );
  }

  console.log(
    result.map((x) => priorities.indexOf(x)).reduce((a, c) => (a += c))
  );
});
