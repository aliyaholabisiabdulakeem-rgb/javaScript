function minimumNumber(a, b){
if(a < b) {
    return a;
}
else{
    return b;
}
}
console.log(minimumNumber(0,-10));

function isEven(n){
    if(n % 2 == 0){
        return true;
}
    else{
        return false;
}
}
console.log(isEven(50));
console.log(isEven(75));


function areaOfRectangle(width, height){
    return width * height;
}
console.log(areaOfRectangle(4, 5))


// arrow function showing suares of a number(from bigger code to a small code😀️)
const d3 = x => x * 2;
    console.log(d3(4));


// Default values, extra Arguments
function greet(name = "friend"){
    console.log("Hello, " + name + "!");
}
let name = "Aliyah";
greet("Precious");
greet("Ada", "extra", "ignored");


// rest Parameters (... is used instead of writing many parameters e.g a, b, c. etc.)
function sum(...numbers){
    let total = 0;
    for (const n of numbers) total += n;
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8,9));

 
