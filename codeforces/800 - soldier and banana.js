tc = [3, 17, 4];
tc1 = tc[0];
tc2 = tc[1];
tc3 = tc[2];
// ans = 0;
// while (tc3 > 0) {
//   ans += tc1 * tc3;
//   tc3--;
// }
// console.log(ans - tc2 > 0 ? ans - tc2 : 0);

// better approach
// sum 1 - n (tc3) = 1 + 2 + 3 + 4 = 10
// with formula n * (n + 1) / 2
// then multiple it with tc1
console.log((ans = tc3 * (tc3 + 1) / 2 * tc1 - tc2) > 0 ? ans : 0);