n = readline();
last = '00'
ans = 0;

for (i = 0; i < n; i++) {
  x = readline();
  if (last !== x) {
    ans++;
  }
  last = x;
}

print(ans);

//