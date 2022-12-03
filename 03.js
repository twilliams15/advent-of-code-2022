const fs = require("fs");

fs.readFile("./03-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const priorities = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // part i
  console.log(
    data
      .split("\n")
      .map((x) => {
        const h1 = x.slice(0, x.length / 2);
        const h2 = x.slice(x.length / 2);
        return [...h1].filter((item) => h2.includes(item)).shift();
      })
      .map((x) => priorities.indexOf(x))
      .reduce((a, c) => (a += c))
  );

  // part ii
  const result = [];
  const iter = data.split("\n").entries();

  while (true) {
    const a = iter.next();
    if (a.done) break;
    const [, b] = iter.next().value;
    const [, c] = iter.next().value;

    result.push(
      [...a.value[1]]
        .filter((item) => b.includes(item) && c.includes(item))
        .shift()
    );
  }

  console.log(
    result.map((x) => priorities.indexOf(x)).reduce((a, c) => (a += c))
  );
});
