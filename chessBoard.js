//const userInput = require("prompt-sync")(); 
//while (true){ 
//let number = Number(userInput("Enter a number: "));
// if(number >= number.length){
//    console.log("invalid!, enter a valid number between 1 and 100: ");
//break;
//}
//}
//
//let chessBoard = " ";
//for(let row = 0; row < number; row++){
//    for(column = 0; column < number; column++){
//        if((row + column) % 2 == 0){
//            chessBoard += "#";
//}
//        else{
//            chessBoard += " ";
//}
//}
//       chessBoard += "\n";
//}
//   console.log(chessBoard);
//
//

















let usernumber = 0;

console.log(usernumber);
const userInput = require("prompt-sync")();
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






























//for(let count = 0; count <= number - 5; count++){
//    console.log("# # # #")
//    console.log(" # # # #")
//}
//g
//
//for (let row = 1; row <= 8; row++) {
//
//    for (let count = 1; count <= 8; count++) {
//        if((row + count) % 2 == 0){
//        console.log("#");
//        }
//        else{
//        console.log(" ");
//        }
//          }
//          console.log("   "); 
//  }
//
