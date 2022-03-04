ntc = 6;
tc = "RRGBBR"
ans = 0;
for (var i = 0; i < ntc-1; i++) {
  ans += tc[i] === tc[i+1] ? 1 : 0;
}
console.log(ans);