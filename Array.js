//push add to the end, pop remove from th eend, unshift adds at the front abd shift removes from the front.
//const q = ["Ada", "Tunde", "Ife", "Zainab"];
//q.push("Zainab");
//console.log(q)
//console.log(q.shift());
//console.log(q);
//q.unshift("Ife");
//console.log(q)
//console.log(q.pop());
//console.log(q);
//q.shift("pp")
//console.log(q)
//q.shift("MK")
//console.log(q)
//
//
//
//const numbers = [1, 3, 5, 2, 6, 8, 9];
//numbers.pop()
//console.log(numbers.pop())
//console.log(numbers.shift())
//numbers.push([4, 10])
//console.log(numbers)
//console.log("[" + numbers.concat (q) + "]")
//
//
//
//const names = ["Ada", "Tunde", "Zainab", "Ife"]
//console.log(names.includes("MK"))
//console.log(names.indexOf("Zainab"))
//console.log(names.slice(-1, 4))
//
//
//
//
//const a = ["Ada", "Tunde"]
//const copy = [...a]
//copy.push("Zainab")
//console.log(a)
//console.log(copy)
//const same = a;
//console.log(same === a, copy === a)
//
//


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



const numbers = [1, 2, 3]
numbers.shift()
console.log(numbers)
numbers.unshift(1)
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.unshift()
console.log(numbers)
numbers.shift()
console.log(numbers)
numbers.unshift(3)
console.log(numbers)











//function minimumNumber(a, b){
//if(a < b) {
//    return a;
//}
//else{
//    return b;
//}
//}
//console.log(minimumNumber(0,-10));
//
//
//












