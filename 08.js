import fs from "fs";

fs.readFile("./08-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const trees = data.split("\n");
  const gridLength = trees[0].length;
  const gridHeight = trees.length;

  // part i
  let visible = 0;
  for (let i = 0; i < gridHeight; i++) {
    if (i === 0 || i === gridHeight) {
      visible += gridLength;
      continue;
    }
    for (let j = 0; j < gridLength; j++) {
      if (i === 0 || i === gridLength) {
        visible++;
        continue;
      }

      const t = trees[i][j];

      // left
      if (
        trees[i]
          .slice(0, j)
          .split("")
          .every((tree) => t > tree)
      ) {
        visible++;
        continue;
      }

      // right
      if (
        trees[i]
          .slice(j + 1)
          .split("")
          .every((tree) => t > tree)
      ) {
        visible++;
        continue;
      }

      // top
      const top = [];
      for (let x = 0; x < i; x++) {
        top.push(trees[x][j]);
      }
      if (top.every((tree) => t > tree)) {
        visible++;
        continue;
      }

      // bottom
      const bot = [];
      for (let x = i + 1; x < gridHeight; x++) {
        bot.push(trees[x][j]);
      }
      if (bot.every((tree) => t > tree)) {
        visible++;
        continue;
      }
    }
  }

  console.log(visible);

  // part ii
  let result = [];
  for (let i = 0; i < gridHeight; i++) {
    for (let j = 0; j < gridLength; j++) {
      const t = trees[i][j];

      // left
      let skip = false;
      let score1 = 0;
      trees[i]
        .slice(0, j)
        .split("")
        .reverse()
        .forEach((tree) => {
          if (skip) return;
          if (t > tree) score1++;
          else {
            score1++;
            skip = true;
          }
        });

      // right
      skip = false;
      let score2 = 0;
      trees[i]
        .slice(j + 1)
        .split("")
        .forEach((tree) => {
          if (skip) return;
          if (t > tree) score2++;
          else {
            score2++;
            skip = true;
          }
        });

      // top
      skip = false;
      let score3 = 0;
      const top = [];
      for (let x = 0; x < i; x++) {
        top.push(trees[x][j]);
      }
      top.reverse().forEach((tree) => {
        if (skip) return;
        if (t > tree) score3++;
        else {
          score3++;
          skip = true;
        }
      });

      // bottom
      skip = false;
      let score4 = 0;
      const bot = [];
      for (let x = i + 1; x < gridHeight; x++) {
        bot.push(trees[x][j]);
      }
      bot.forEach((tree) => {
        if (skip) return;
        if (t > tree) score4++;
        else {
          score4++;
          skip = true;
        }
      });

      result.push(score1 * score2 * score3 * score4);
    }
  }

  console.log(Math.max(...result));
});
