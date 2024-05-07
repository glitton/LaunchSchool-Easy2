const input = require("readline-sync");

function retire() {
  let currentAge = parseFloat(input.question(`What is your age? `));
  let retirementAge = parseFloat(
    input.question(`At what age would you like to retire? `)
  );
  let today = new Date();
  let currentYear = today.getFullYear();

  let numberOfYearsLeft = retirementAge - currentAge;
  let retirementYear = currentYear + numberOfYearsLeft;
  console.log(`It's ${currentYear}.  You will retire in ${retirementYear}`);
  console.log(`You only have ${numberOfYearsLeft} years of work to go!`);
}

retire();
