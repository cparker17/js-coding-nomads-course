function getRandomNumber(){
    return Math.floor((Math.random() * 100) + 1);
}

/**
 * 1. Create while loop equivalents of the loops in the previous exercises!
 *
 * 2. Using the random number generator above, write a while loop that generates
 *    random numbers until it has generated one that is divisible by 11. Do you
 *    remember what operator to use?
 */


//#1
let i = 5;
while (i <= 1000) {
    console.log(i);
    i +=5;
}

i = 100;
while (i >= -100) {
    console.log(i);
    i--;
}

i = 0;
let count = 0;
while (count < 5000) {
    if (i % 2 == 0) {
        i += 3;
        console.log(i);
    } else {
        i -= 1;
        console.log(i);
    }
    count++;
}


//#2
let number = 0;
while (true) {
    number = getRandomNumber();
    if (number % 11 != 0) {
        console.log(number);
    } else {
        console.log(`${number} is divisable by 11.`)
        break;
    }
}


