n = 4;
arr = [2, 3, 4, 1];
ans = [];

for (i = 0; i < n; i++) {
  ans[arr[i] - 1] = i + 1;
}

console.log(ans.join(' '));