function reverseDigits(x) {
  // Your code starts here.
  const numberToString = x.toString();
  const answer = [...numberToString].reverse().join('');
  // if leading zero ? 100 => 001 or 1 ?
  return parseInt(answer);
}
exports.reverseDigits = reverseDigits;

