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

  // part i
  function getStartMarker(markerLength) {
    const codes = [];
    for (let i = 0; i < data.length - markerLength - 1; i++) {
      let result = "";
      for (let j = 0; j < markerLength; j++) {
        result += data[i + j];
      }
      codes.push(result);
    }

    const firstSet = pipe(
      map((x) => new Set(x)),
      filter((x) => x.size === markerLength),
      head
    );

    const startMarker = join("")([...firstSet(codes)]);

    return startMarker;
  }

  // part i
  console.log(data.indexOf(getStartMarker(4)) + 4);

  // part ii
  console.log(data.indexOf(getStartMarker(14)) + 14);
});
