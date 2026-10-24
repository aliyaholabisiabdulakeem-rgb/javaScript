let inputnumber = 0;

const userInput = require("prompt-sync")(); 
while (true){ 
let number = Number(userInput("Enter a number: "));
 if(Number.isNaN(number)){
    console.log("invalid!, enter a valid number");
} 
else{
    inputnumber += number;
break;
}
}

let chessBoard = " ";
for(let row = 0; row < inputnumber; row++){
    for(column = 0; column < inputnumber; column++){
        if((row + column) % 2 == 0){
            chessBoard += "#";
}
        else{
            chessBoard += " ";
}

}
       chessBoard += "\n";
}
   console.log(chessBoard);












let usernumber = 0;

console.log(usernumber);

while (true){ 
let number = Number(userInput("Enter a number: "));
 if(number >= 100){
    console.log("invalid!, enter a valid number between 1 and 100: ");
 }
else{
    usernumber += number
break;
}
}

    for(let count = 0; count < usernumber; count++){
        console.log("# # # #");
        console.log(" # # # #");

}


