import fs from "fs";

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

  console.log(
    data
      .split("\n")
      .map((x) => legend[x])
      .reduce((a, c) => (a += c))
  );

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

  console.log(
    data
      .split("\n")
      .map((x) => legend2[x])
      .reduce((a, c) => (a += c))
  );
});
