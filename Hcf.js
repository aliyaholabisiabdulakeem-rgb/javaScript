let numbers = [];
let count = 0;
const prompt = require("prompt-sync")();

while (true) {
  let numbers = Number(prompt("Enter a number (-1 to stop):"));
  
  if (numbers == -1) {
    break;
  }
  
  numbers[count] = numbers;
  count = count + 1;
}

let small = numbers[0];
for (let count = 1; count < count; count++) {
  if (numbers[count] < small) {
    small = numbers[count];
  }
}

let hcf = 1;
for (let index = 1; index <= small; index++) {
  let isCommon = true;
  
  for (let counter = 0; counter < count; counter++) {
    if (numbers[counter] % index != 0) {
      isCommon = false;
    }
  }
  
  if (isCommon) {
    hcf = index;
  }
}

console.log("Your numbers: " + numbers);
console.log("HCF is: " + hcf);
