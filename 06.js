import fs from "fs";
import filter from "lodash/fp/filter.js";
import join from "lodash/fp/join.js";
import head from "lodash/fp/head.js";
import map from "lodash/fp/map.js";
import pipe from "lodash/fp/pipe.js";
import { slidingWindow } from "./utils.js";

fs.readFile("./06-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const getConsecutiveUniques = (length) => (data) => {
    const firstUniqueSet = pipe(
      map((x) => new Set(x)),
      filter((x) => x.size === length),
      head
    );

    return join("")([...firstUniqueSet(slidingWindow(length)(data))]);
  };

  // part i
  const uniqueFour = getConsecutiveUniques(4);
  console.log(data.indexOf(uniqueFour(data)) + 4);

  // part ii
  const uniqueFourteen = getConsecutiveUniques(14);
  console.log(data.indexOf(uniqueFourteen(data)) + 14);
});
