n = readline().toString();
s = readline().toString();
ans = "";
for (i = 0; i < n.length; i++) {
  ans += n[i] === s[i] ? "0" : "1";
}
print(ans);