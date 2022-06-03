a = readline();
b = readline().split(' ').slice(1);
c = readline().split(' ').slice(1);
print(new Set(b.concat(c)).size == a ? "I become the guy." : "Oh, my keyboard!");