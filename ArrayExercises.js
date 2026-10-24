function OfRange(start, end){
    const result = [];
    for(let numbers = start; numbers <= end; numbers++){
        result.push(numbers);
}
    return result;
}

function sum(numbers){
let sum = 0;
for(const number of numbers){
    sum += number;
}
return sum;
}
console.log(OfRange(1, 5))
console.log(sum(OfRange(1, 10)))



function Reversedarray(numbers){
    const result = [];
    for ( let count = numbers.length - 1; count >= 0; count-- ){
        result.push(numbers[count]);
}
            return result;
}
console.log(Reversedarray([1,2,3]));




function reverseArrayInPlace(numbers){
    for(let start = 0, end = numbers.length - 1; start < end; start++,end--){
        const result = numbers[start]
        numbers[start] = numbers[end]
        numbers[end] = result 
}
return numbers
}
console.log(reverseArrayInPlace([1, 2, 3, 4, 5]))



function outer() {
  let a = 1;
  function inner() { 
    return a + 1; 
}
  return inner();
}
console.log(outer());
console.log(typeof inner);





const text = "JavaScript";
console.log(text.slice(-1, 11)); // "Java"
console.log(text.slice(5));   // "cript"




