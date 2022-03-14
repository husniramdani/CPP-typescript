var x = "5 1".split(' ');
n = x[0];
t = x[1];
s = 'BGGBG';
while(t--){
  s = s.replace(/BG/g, 'GB');
}
console.log(s);
