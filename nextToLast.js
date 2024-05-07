// Convert a string to an array using split(), return second to last item

function nextToLast(string) {
  const arr1 = string.split(" ");
  return arr1[arr1.length - 2];
}

// console.log(nextToLast("last word"));

function middleWord(str) {
  const arr = str.split(" ");

  /* Edge cases: no strings or only one string so no middle, 
  or there are even number of strings, so there is no middle */

  if (arr.length === 0) {
    console.log("There is no word to return");
  }
  if (arr.length === 1) {
    console.log("You only supplied one word, which is the only word");
  }

  if (arr.length % 2 === 0) {
    console.log(`There are even number of strings so there is no middle word`);
  } else {
    let middleIndex = (arr.length - 1) / 2;
    console.log(`This is the middle word: ${arr[middleIndex]}`);
  }
}

middleWord("how are you?");
