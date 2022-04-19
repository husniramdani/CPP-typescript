n = readline();

function countTheRoom(n) {
  result = 0;
  for (i = 0; i < n; i++) {
    room = readline().split(' ');
    result += Number((+room[1] - +room[0]) >= 2);
  }
  return result;
}

print(countTheRoom(n));