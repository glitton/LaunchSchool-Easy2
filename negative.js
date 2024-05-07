function negative(num) {
  if (Math.sign(num) === -1) {
    return num;
  }
  return num * -1;
}

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));

// function negative(number) {
//   return Math.abs(number) * -1;
// }
