var n = +readline();
var sum = readline().split(' ').reduce(function (a, b) { return a + +b; }, 0);

print(sum / n);