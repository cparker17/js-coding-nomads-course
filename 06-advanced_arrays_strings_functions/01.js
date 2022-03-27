/**
 * In these questions you will be practicing how to use the forEach syntax.
 *
 * 1. Use a random number generator to generate an array of 100 values.
 * 2. Use forEach on the array to output the sum, count and average.
 * 3. Use forEach to create a new array from the first one that halves all the
 *    values.
 * 4. Use forEach on the new array to output the sum, count and average again.
 * 5. Refactor: define the sum, count and average function as a separate
 *    function and pass it to the forEach functions as a name.
 */


//#1
function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

let randomNums = [];
for (let i = 0; i < 100; i++) {
    randomNums[i] = getRandomNumber();
}
console.log(randomNums);

//#2
let sum = 0;
let count = 0;
let average = 0;

randomNums.forEach(randomNumber => sum += randomNumber);
console.log(sum);

randomNums.forEach(() => count++);
console.log(count);

console.log(sum / count);

//#3
let randomNumsHalved = [];
randomNums.forEach(randomNumber => randomNumsHalved.push(randomNumber /= 2));
console.log(randomNumsHalved);

//#4
sum = 0;
count = 0;
average = 0;

randomNumsHalved.forEach(randomNumber => sum += randomNumber);
console.log(sum);

randomNumsHalved.forEach(() => count++);
console.log(count);

console.log(sum / count);

//#5
function sumTwoValues(number) {
    sum += number;
}

function countTotalValues() {
    count++;
}

sum = 0;
count = 0;
average = 0;

randomNumsHalved.forEach(randomNumber => sumTwoValues(randomNumber));
console.log(sum);

randomNumsHalved.forEach(() => countTotalValues());
console.log(count);

console.log(sum / count);

