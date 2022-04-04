function factorial(N) {
  // Your code starts here.
  // recursive
  if(N===1) return N;
  return N * factorial(N-1);
}

console.log(factorial(4));