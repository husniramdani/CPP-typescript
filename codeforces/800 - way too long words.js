const { readline, print } = require('@ip-algorithmics/codeforces-io');

n = readline();
for(i=0; i<n; i++){
    s = readline();
    p = s.length;
    if(p > 10) print(s[0]+(p-2)+s[p-1]);
    else print(s)
}