import fs from "fs";

fs.readFile("./07-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split("\n");

  function buildSystem(inputs, dir = "~", system = {}) {
    const input = inputs.shift();
    if (input === undefined) {
      return system;
    }
    if (input === "$ ls") {
      return buildSystem(inputs, dir, system);
    }
    if (input === "$ cd ..") {
      const prevDir = dir.slice(0, dir.lastIndexOf("/"));
      return buildSystem(inputs, prevDir, system);
    }
    if (input === "$ cd /") {
      return buildSystem(inputs, "~", system);
    }
    if (input.includes("$ cd")) {
      const newDir = input.split(" ").pop();
      return buildSystem(inputs, `${dir}/${newDir}`, system);
    }
    if (!system[dir]?.contents) {
      system[dir] = { contents: [] };
    }
    system[dir].contents.push(input);
    return buildSystem(inputs, dir, system);
  }

  const system = buildSystem(lines);

  const dirSizes = {};
  for (let dir in system) {
    const simpleDir = dir.slice(dir.lastIndexOf("/") + 1);
    console.log(simpleDir);
    dirSizes[simpleDir] = system[dir].contents
      .map((x) => +x.split(" ")[0] || 0)
      .reduce((a, x) => (a += x));
  }

  for (let dir in system) {
    system[dir].contents.map((x, i) => {
      if (x.includes("dir")) {
        const simpleDir = x.replace("dir ", "");
        system[dir].contents.splice(
          i,
          1,
          `${dirSizes[simpleDir]} ${simpleDir}`
        );
      }
    });
  }

  const result = [];
  for (let dir in system) {
    result.push(system[dir].contents.map((x) => +x.split(" ")[0] || 0));
  }

  console.log(system);

  console.log(
    result
      .map((x) => x.reduce((a, x) => (a += x)))
      .filter((x) => x <= 100000)
      .reduce((a, x) => (a += x))
  );
});
