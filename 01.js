const fs = require("fs");

fs.readFile("./01-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // --- helpers ---

  const toNumber = (s) => +s;
  const toSum = (a, c) => (a += c);
  const desc = (a, b) => b - a;
  const splitArray = (splitOn) => (arr) => {
    const result = [];
    let buffer = [];
    arr.forEach((val) => {
      if (val !== splitOn) {
        buffer.push(val);
      } else {
        result.push(buffer);
        buffer = [];
      }
    });
    return result;
  };
  const splitOnEmpty = splitArray("");

  // ---

  const calorieListByElf = splitOnEmpty(data.split("\n"));
  const result = calorieListByElf.map((cals) =>
    cals.map(toNumber).reduce(toSum)
  );

  // part i
  console.log(Math.max(...result));

  // part ii
  console.log(result.sort(desc).slice(0, 3).reduce(toSum));
});
