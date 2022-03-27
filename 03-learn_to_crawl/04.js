/**
 * Create three variables with numbers assigned to them.
 * Do not use zero.
 * Make the numbers at least 4 digits long, e.g. 3874, 2398.
 * Create a 4th variable with the number 7 and call it "luckyNumber".
 * 
 * After creating the variables, do the
 * following without typing any more numbers.
 * 
 * Output the following to the console:
 *      1. The sum of the numbers.
 *      2. The result of subtracting the two smallest
 *         numbers from the larger one.
 *      3. The result of multiplying all the numbers.
 *      4. The result of the largest number divided
 *         by the difference between the smaller ones.
 *      5. The result of the the numbers modulo 7.
 * 
 * Finally, label all of the outputs by using console log in the way
 * that is demonstrated below. For the labels, be sure to come up 
 * with clear and descriptive names.
 */

let num1 = 1234;
let num2 = 4567;
let num3 = 2345;
let luckyNumber = 7;

console.log("Sum of all numbers:", num1 + num2 + num3 + luckyNumber);
console.log("Largest minus two smallest numbers:", num2 - num1 - num3);
console.log("Product of all numbers:", num1 * num2 * num3);
console.log("Largest divided by difference of smallest:", num2 / (num3 - num1));
console.log("First number modulus 7:", num1 % luckyNumber);
console.log("Second number modulus 7:", num2 % luckyNumber);
console.log("Third number modulus 7:", num3 % luckyNumber);

let result = 0
console.log("Label", result)