var f = (x,b) => 
['I hate ', 'I love '][Number(b)] + ['that ', 'it'][Number(x==1)] + (x==1 ? '' : f(x-1,!b))
print(f(Number(readline()),false))

// standard approach
// n = readline();
// s = "";
// for(i=0; i<n; i++){
//   s += "I"
//   if(i%2===0) s += " hate ";
//   else s += " love ";
 
//   if(i<n-1) s += "that ";
//   else s += "it";
// }
// print(s);