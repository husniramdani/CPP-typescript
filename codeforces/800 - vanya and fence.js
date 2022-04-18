n = 3, h = 7
a = [4, 5, 14]

function isMorethan(fence, height) {
  return Number(height > fence);
}

function countingTheFence(n, h, a) {
  var result = 0;
  for (var i = 0; i < n; i++) {
    result += (isMorethan(h, a[i]) + 1);
  }
  return result;
}

console.log(countingTheFence(Number(n), h, a));

// when u need async condition, better use callback
// function countingTheFence(callback, n, h, a) {
//   let result = 0;
//   for (let i = 0; i < n; i++) {
//     result += (callback(h, a[i]) + 1);
//   }
//   return result;
// }
// console.log(countingTheFence(isMorethan, n, h, a));

// better approache
// v = readline().split(" ").map(Number);
// print(readline().split(" ").map(Number).reduce((a, x) => a + (x > v[1]), v[0]));