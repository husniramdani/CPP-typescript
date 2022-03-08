s = readline();

upper = s.replace(/[^A-Z]/g, '').length;
lower = s.length - upper;

if (upper > lower) {
  print(s.toUpperCase());
} else {
  print(s.toLowerCase());
}

// better approach
// var s = readline();
// var upper = s.split(/[A-Z]/g).length - 1;
// var lower = s.length - upper;
// upper > lower ? print(s.toUpperCase()) : print(s.toLowerCase());