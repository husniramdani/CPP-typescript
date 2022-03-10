x = "512 4".split(' ')
n = x[0];
k = x[1];

for (i = 0; i < k; i++) {
  curN = String(n).length;
  if (String(n)[curN - 1] == '0') {
    n = Number(n) / 10;
  } else {
    n = Number(n) - 1;
  }
}

console.log(n);

// String(n) / n.toString() / just modulo with 10