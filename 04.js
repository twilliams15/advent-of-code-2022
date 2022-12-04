import fs from "fs";

fs.readFile("./04-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // part i
  console.log(
    data
      .split("\n")
      .map((x) => x.split(","))
      .filter((x) => {
        const pairs = x.map((range) => range.split("-").map(Number));
        const low1 = pairs[0][0];
        const low2 = pairs[1][0];
        const high1 = pairs[0][1];
        const high2 = pairs[1][1];

        return (
          (low1 <= low2 && high1 >= high2) || (low2 <= low1 && high2 >= high1)
        );
      }).length
  );

  // part i
  console.log(
    data
      .split("\n")
      .map((x) => x.split(","))
      .filter((x) => {
        const pairs = x.map((range) => range.split("-").map(Number));
        const low1 = pairs[0][0];
        const low2 = pairs[1][0];
        const high1 = pairs[0][1];
        const high2 = pairs[1][1];

        return high1 >= low2 && high2 >= low1;
      }).length
  );
});
