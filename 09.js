import fs from "fs";

fs.readFile("./09-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const dirs = [];
  const steps = [];
  data.split("\n").forEach((x) => {
    const [dir, step] = x.split(" ");
    dirs.push(dir);
    steps.push(step);
  });
  const maxSteps = Math.max(...steps);
  const grid = Array(1000)
    .fill("")
    .map((x) => Array(1000).fill("."));

  let head = { x: 500, y: 500 };
  let tail = { x: 500, y: 500 };
  dirs.forEach((dir, i) => {
    while (steps[i]--) {
      switch (dir) {
        case "R":
          head.x++;
          break;
        case "D":
          head.y++;
          break;
        case "L":
          head.x--;
          break;
        case "U":
          head.y--;
          break;
      }
      if (tailCloseToHead(head, tail)) {
        const { x, y } = tail;
        grid[y][x] = "#";
      } else {
        const { x, y } = moveTailToHead(head, tail);
        grid[y][x] = "#";
      }
    }
  });

  function tailCloseToHead(head, tail) {
    return Math.abs(head.x - tail.x) < 2 && Math.abs(head.y - tail.y) < 2;
  }

  function moveTailToHead(head, tail) {
    if (head.x === tail.x) {
      head.y > tail.y ? tail.y++ : tail.y--;
    } else if (head.y === tail.y) {
      head.x > tail.x ? tail.x++ : tail.x--;
    } else {
      head.x > tail.x ? tail.x++ : tail.x--;
      head.y > tail.y ? tail.y++ : tail.y--;
    }
    return tail;
  }

  const getCount = (a) => {
    return a
      .map((x) => x.filter((val) => val === "#").length)
      .reduce((a, c) => (a += c));
  };

  const result = getCount(grid);

  // console.log(grid);
  console.log(result);
});
