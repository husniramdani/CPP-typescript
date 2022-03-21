x = '447'
isLucky = [...x].filter(n => n == '4' || n == '7');
if (isLucky.length === 4 || isLucky.length === 7) console.log('YES');
else console.log('NO');

// better approach
// var n = readline().replace(/[^47]+/g, '').length;
// print(n === 4 || n === 7 ? 'YES' : 'NO');