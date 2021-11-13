export let watermelon = function (value: number) {
  if (value % 2 === 0 && value > 2) {
    print();
  } else {
    console.log("NO");
  }
};

import * as read from "readline";

let rl = read.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export let readline = () => {
  rl.question("", (x) => {
    rl.close();
    return x;
  });
};

let n = readline()
console.log("ini n = ", n)
