import fs from "fs";
import filter from "lodash/fp/filter.js";
import join from "lodash/fp/join.js";
import head from "lodash/fp/head.js";
import map from "lodash/fp/map.js";
import pipe from "lodash/fp/pipe.js";

fs.readFile("./06-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const getConsecutiveUniques = (uniqueLength) => (data) => {
    const codes = [];
    for (let i = 0; i < data.length - uniqueLength - 1; i++) {
      let result = "";
      for (let j = 0; j < uniqueLength; j++) {
        result += data[i + j];
      }
      codes.push(result);
    }

    const firstSet = pipe(
      map((x) => new Set(x)),
      filter((x) => x.size === uniqueLength),
      head
    );

    const startMarker = join("")([...firstSet(codes)]);

    return startMarker;
  };

  // part i
  const uniqueFour = getConsecutiveUniques(4);
  console.log(data.indexOf(uniqueFour(data)) + 4);

  // part ii
  const uniqueFourteen = getConsecutiveUniques(14);
  console.log(data.indexOf(uniqueFourteen(data)) + 14);
});
