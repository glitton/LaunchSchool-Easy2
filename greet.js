// function greetings(arr, { title, occupation }) {
//   let arrayItems = "";
//   for (let i = 0; i < arr.length; i++) {
//     arrayItems = arrayItems + arr[i] + " ";
//   }
//   return `Hello, ${arrayItems}!  Nice to have ${title} ${occupation} around.`;
// }

function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have ${status["title"]} ${
    status["occupation"]
  } around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
