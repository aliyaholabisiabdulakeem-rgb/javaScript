const numbers = [2, 7, 11, 15];
    let  target = 18;
for(let index = 0; index < numbers.length; index++){
    for(let count = index + 1; count < numbers.length; count++){
        if(numbers[index] + numbers[count] == target){
            console.log(numbers[index], numbers[count]); 
            console.log(index , count);
}
}
}

