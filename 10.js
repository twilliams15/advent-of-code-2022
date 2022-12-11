import fs from "fs";
import { buffer } from "stream/consumers";

fs.readFile("./10-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let signals = [];

  let cycles = 0;
  let x = 1;
  let instructions = data.split("\n");

  // part i
  const checkForSignal = () => {
    if ((cycles + 20) % 40 === 0) {
      signals.push(cycles * x);
    }
  };

  for (let i of instructions) {
    let [cmd, val] = i.split(" ");
    if (cmd === "noop") {
      cycles++;
      checkForSignal();
      continue;
    }
    if (cmd === "addx") {
      cycles++;
      checkForSignal();
      cycles++;
      checkForSignal();
      x += +val;
    }
  }

  let result = signals.reduce((a, c) => (a += c));

  console.log(result);

  // part ii
  cycles = 0;
  x = 1;
  let screen = Array(6)
    .fill("")
    .map((x) => Array(40).fill("."));

  const drawPixels = () => {
    let row = Math.floor(cycles / 40);
    let pixel = cycles - 40 * row;
    if (row === 6) return;
    console.log(row, pixel);
    screen[row][pixel] = x > pixel - 2 && x < pixel + 2 ? "#" : ".";
  };

  for (let i of instructions) {
    let [cmd, val] = i.split(" ");
    if (cmd === "noop") {
      drawPixels();
      cycles++;
      continue;
    }
    if (cmd === "addx") {
      drawPixels();
      cycles++;
      drawPixels();
      cycles++;
      x += +val;
    }
  }

  result = screen.map((x) => x.join(""));

  console.log(result);
});
