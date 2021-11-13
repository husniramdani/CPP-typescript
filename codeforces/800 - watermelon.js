const { readline, print } = require('@ip-algorithmics/codeforces-io');

n = readline()
if(n%2===0 && n > 2){
    print("YES")
} else {
    print("NO")
}
