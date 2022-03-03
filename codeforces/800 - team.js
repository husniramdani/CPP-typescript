const { readline, print } = require('@ip-algorithmics/codeforces-io');

let n = Number(readline());
let count = 0;
for (let i = 0; i < n; i++) {
    if (readline().split(" ").map(x => Number(x)).reduce((a, b) => a + b) > 1) count++;
}
print(count);