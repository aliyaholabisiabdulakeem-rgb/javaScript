//const prompt = require("prompt-sync")();
//  let numbers = Number(prompt("Enter a number: "));
//if (numbers < 0){
//numbers = numbers * -1;
//}
//while (numbers >= 10) {  
//    let sum = 0;
//while(numbers > 0){
//    let num = numbers % 10
//sum += num;
//     numbers = (numbers - num) / 10;
//}
//numbers = sum;
//}
//console.log(numbers);
//
//




const prompt = require("prompt-sync")();
let numbers = Number(prompt("Enter a number: "));


let isNegative = false;
if (numbers < 0) {
    isNegative = true;
    numbers = -numbers; 
}


while (numbers >= 10) {
    let sum = 0;
    while (numbers > 0) {
        let num = numbers % 10;
        sum += num;
        numbers = (numbers - num) / 10;
    }
    numbers = sum; 
}

if (isNegative && numbers > 0) {
    numbers = -numbers;
}

console.log(numbers);

