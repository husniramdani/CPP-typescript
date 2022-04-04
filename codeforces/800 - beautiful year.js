n = +readline(); // + to make it as number
ans = false;
current = n + 1;
while (!ans) {
  if (new Set(current.toString()).size === 4) ans = true;
  else current++;
}
print(current);
