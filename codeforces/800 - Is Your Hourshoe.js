// https://codeforces.com/problemset/problem/228/A
n = readline().split(' ');
m = new Set(n);
print(4 - m.size);

// one liner yolo
var arr={};var g=0;readline().split(' ').forEach((v)=>{if(arr[v]) g++; else arr[v] = 1;});print(g);