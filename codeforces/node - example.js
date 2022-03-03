const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let lineNumber = 0
rl.on('line',(line)=>{
    if (lineNumber !== 0) {
        if (line.length > 10) {
            console.log(line.slice(0,1)+(line.length-2)+line.slice(-1))
        } else {
            console.log(line)
        }
    }
    lineNumber++
})