const userInput = require("prompt-sync")();
while (true){ 
let number = Number(userInput("Enter a number: "));
if(Number.isNaN(number)){
    console.log("invalid!, enter a valid number");
} 
else{
    for (let count = 0; count <= 12; count++){

        let multiplication = number * count;
            console.log(number + " x " + count + "= " + multiplication);
}
break;
}
}


