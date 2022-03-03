// Greedy nasty code
const tc = ["3+2+1", "1+1+3+1+3", "2"];
const tcPos = 0;

let result = "";
let ans = "";
let plus = "";
for (let i = 0; i < tc[tcPos].length; i++) {
  ans += tc[tcPos][i] !== "+" ? tc[tcPos][i] : "";
}

// Sorting string
// convert string to array
// sort it then joining to string again
// [...ans] / ans.split()
console.log("ans => ", [...ans].sort().join(''))
sortAns = [...ans].sort().join('')

let j = 0;
for (let i = 0; i < tc[tcPos].length; i++) {
  if(i%2){
    result += "+";
  } else {
    result += sortAns[j];
    j++;
  }
}

console.log("Greedy => ", result);
console.log("Better => ", tc[tcPos].split`+`.sort().join`+`);

// better approach
// print(readline().split`+`.sort().join`+`)