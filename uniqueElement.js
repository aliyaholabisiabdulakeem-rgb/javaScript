function sumOfUnique(numbers) {
        let  sum = 0;
        for (let count = 0; count < numbers.length; count++) {
            let occurrences = 0;
            for (let index = 0; index < numbers.length; index++) {
                if (numbers[count] == numbers[index]) {
                    occurrences++;
                }
            }
            if (occurrences == 1) {
                sum += numbers[count];
            }
        }
        return sum;
    }

        let numbers1 = [1, 2, 3, 2];
        console.log(sumOfUnique(numbers1)); 

        let numbers2 = [1, 1, 1, 1, 1];
        console.log(sumOfUnique(numbers2)); 
































function sumOfUnique(numbers) {
    let sum = 0;
    let count = 0;

    while (count < numbers.length) {
        let occurrences = 0;
        let index = 0;

        while (index < numbers.length) {
            if (numbers[count] == numbers[index]) {
                occurrences++;
            }
            index = index + 1;
        }

        if (occurrences == 1) {
            sum = sum + numbers[count];
        }

        count++;
    }

    return sum;
}

let numbers1 = [1, 2, 3, 2];
console.log(sumOfUnique(numbers1)); 

let numbers2 = [1, 1, 1, 1, 1];
console.log(sumOfUnique(numbers2)); 


