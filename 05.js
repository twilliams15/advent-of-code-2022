import fs from "fs";

fs.readFile("./05-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const index = (n) => n - 1;

  function parseCrates(cratesRaw) {
    const crates = cratesRaw.split("\n");
    const columns = +crates.slice(-1).toString().slice(-2);
    const result = Array(columns).fill([]);

    for (let i = 0; i < columns; i++) {
      result[i] = crates
        .slice(0, columns - 1)
        .map((row) => row[1 + 4 * i])
        .filter((x) => x !== " ");
    }

    return result;
  }

  function parseSteps(stepsRaw) {
    return stepsRaw
      .split("\n")
      .map((x) => x.split(" "))
      .map((x) => x.map((s) => +s).filter((_, i) => i % 2 !== 0));
  }

  const [cratesRaw, stepsRaw] = data.split("\n\n");
  const steps = parseSteps(stepsRaw);

  // part i
  const result1 = parseCrates(cratesRaw);
  steps.forEach(([amount, from, to]) => {
    while (amount--) {
      result1[index(to)].unshift(result1[index(from)].shift());
    }
  });

  console.log(result1.map((x) => x[0]).join(""));

  // part ii
  const result2 = parseCrates(cratesRaw);
  steps.forEach(([amount, from, to]) => {
    result2[index(to)].unshift(...result2[index(from)].splice(0, amount));
  });

  console.log(result2.map((x) => x[0]).join(""));
});
