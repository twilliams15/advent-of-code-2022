import fs from "fs";
import { getFirstUniqueSet, slidingWindow } from "./utils.js";

fs.readFile("./06-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // part i
  const possibleMarkers1 = slidingWindow(4)(data);
  const startMarker1 = [...getFirstUniqueSet(4)(possibleMarkers1)].join("");
  console.log(data.indexOf(startMarker1) + 4);

  // part ii
  const possibleMarkers2 = slidingWindow(14)(data);
  const startMarker2 = [...getFirstUniqueSet(14)(possibleMarkers2)].join("");
  console.log(data.indexOf(startMarker2) + 14);
});
