function isPrime(x){
  console.log(Math.pow(x,2));
  if(x === 2) return true;

  for(let i=2; i<x; ++i){
    // jika hanya habis dimodulo
    // 0 dengan 1 dan dirinya sendiri
    if(x%i===0){
      return false
    }
  }
  return true;
}

ans = isPrime(1);
console.log(ans);