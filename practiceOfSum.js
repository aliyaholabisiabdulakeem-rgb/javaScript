const prompt = require("prompt-sync")();
let numbers = Number(prompt("Enter a number: "));

let isNegative = numbers < 0;

let checkValue;
    if(isNegative){
        checkValue = -numbers;
}
else{
    checkValue = numbers;
}

while (checkValue >= 10) {
    let sum = 0;
    
    while (numbers !== 0) {
        let num = numbers % 10;
        

        if (isNegative && (numbers - num) / 10 == 0) {
            sum += num;
} 
        else if (num < 0) {
            sum += -num; 
} 
        else {
            sum += num;
}

        
        numbers = (numbers - num) / 10;
    }
    
    numbers = sum;
    
    isNegative = numbers < 0;
    checkValue = isNegative ? -numbers : numbers;
}

console.log(numbers);


