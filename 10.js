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

  const result = signals.reduce((a, c) => (a += c));

  console.log(result);
});
