import fs from "fs";

fs.readFile("./01-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // --- helpers ---

  const toNumber = (s) => +s;
  const toSum = (a, c) => (a += c);
  const desc = (a, b) => b - a;

  // ---

  const result = data
    .split("\n")
    .join(",")
    .split(",,")
    .map((x) => x.split(","))
    .map((x) => x.map(toNumber).reduce(toSum))
    .sort(desc);

  // part i
  console.log(result[0]);

  // part ii
  console.log(result.slice(0, 3).reduce(toSum));
});
