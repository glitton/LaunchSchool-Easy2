function centerOf(string) {
  //odd string length
  if (string.length % 2 !== 0) {
    let centerIdx = (string.length - 1) / 2;
    return string[centerIdx];
  } else {
    let leftIndex = string.length / 2 - 1;
    // console.log("indexes", leftIndex, rightIndex);
    return string.substring(leftIndex, leftIndex + 2);
  }
}

// function centerOf(string) {
//   if (string.length % 2 === 1) {
//     let centerIndex = (string.length - 1) / 2;
//     return string[centerIndex];
//   } else {
//     let leftIndex = string.length / 2 - 1;
//     return string.substring(leftIndex, leftIndex + 2);
//   }
// }

console.log(centerOf("I Love JavaScript")); // "a"
console.log(centerOf("Launch School")); // " "
console.log(centerOf("Launch")); // "un"
console.log(centerOf("Launchschool")); // "hs"
console.log(centerOf("x")); // "x"
