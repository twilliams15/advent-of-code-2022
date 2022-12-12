import fs from "fs";

fs.readFile("./11-input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  let result = [];
  let monkeys = data.split("\n\n");
  monkeys.forEach((monkey) => {
    let [i, items, operation, test, ifTrue, ifFalse] = monkey.split("\n");
    items = items
      .trim()
      .replace("Starting items: ", "")
      .split(" ")
      .map((x) => x.replace(",", ""));
    operation = operation
      .trim()
      .replace("Operation: new = old ", "")
      .split(" ");
    test = +test.split(" ").pop();
    ifTrue = +ifTrue.split(" ").pop();
    ifFalse = +ifFalse.split(" ").pop();
    result.push({
      monkey: +i.split(" ").pop().replace(":", ""),
      items,
      operation,
      test,
      ifTrue,
      ifFalse,
      inspections: 0,
    });
  });

  let commonDenominator = result.map((x) => x.test).reduce((a, c) => (a *= c));

  let count = 10000;
  while (count--) {
    for (let i = 0; i < monkeys.length; i++) {
      let { items, operation, test, ifTrue, ifFalse } = result[i];
      while (items.length) {
        let worry = items.shift();
        worry = eval(worry + operation.join("").replace("old", worry));
        // worry = Math.floor(worry / 3);
        worry = Math.floor(worry % commonDenominator);
        worry % test === 0
          ? result[ifTrue].items.push(worry)
          : result[ifFalse].items.push(worry);
        result[i].inspections++;
      }
    }
  }

  let monkeyBusiness = result
    .map((x) => x.inspections)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((a, c) => (a *= c));

  console.log(monkeyBusiness);
});
