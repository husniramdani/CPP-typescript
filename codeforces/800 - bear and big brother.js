tc1 = 4;
tc2 = 7;
ans = 0;
while (tc1 <= tc2) {
  tc1 *= 3;
  tc2 *= 2;
  ans++;
};
console.log(ans)

// better approach (recursive)
// const fn = (tc1, tc2, ans) => l > b ? print(t) : fn(tc1 * 3, tc2 * 2, ans + 1)
// const tc = readline().split(" ")
// fn(parseInt(tc[0]), parseInt(tc[1]), 0)

// better approach (math)
// var a = readline().split(' ');
// print(Math.floor(Math.log(a[1] / a[0]) / Math.log(1.5)) + 1);