// function getFactorial(number) {
//     let factorial = 1;
//     let i = 1;
//     while (i <= number) {
//         factorial = factorial * i;
//         console.log(factorial);
//         i++;
//     }
//     return factorial;

// }

// const myFactorial = getFactorial(8);
// console.log('here is the factorial of', myFactorial);

// factorial "decrementing"==========

function decrementing(num) {
    let fact = 1;
    let i = num;
    while (i >= 1) {
        fact = fact * i;
        console.log(i, fact);
        i--;
        // return fact;
    }
    return fact;

}

const yourFactorial = decrementing(8);
console.log(yourFactorial);