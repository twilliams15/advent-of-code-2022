const fs = require("fs");

fs.readFile("./01-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const calorieList = data.split("\n");

  // ---

  const toNumber = (s) => +s;
  const sumWhileNotZero = (arr) => {
    const result = [];
    let buffer = 0;
    arr.forEach((val) => {
      if (val) {
        buffer += val;
      } else {
        result.push(buffer);
        buffer = 0;
      }
    });
    return result;
  };

  const result = sumWhileNotZero(calorieList.map(toNumber));

  // part i
  console.log(Math.max(...result));

  // part ii
  console.log(
    result
      .sort((a, b) => b - a)
      .slice(0, 3)
      .reduce((a, c) => (a += c))
  );
});
