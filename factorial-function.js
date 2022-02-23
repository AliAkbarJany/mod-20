let factorial = 1;
for (let i = 1; i <= 9; i++) {

    factorial = factorial * i;
    console.log(factorial);
}
console.log('factorial of 9', factorial);




function factor(number) {

    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact = fact * i;
        console.log(fact);
        // return fact;
    }
    return fact;

}

let isFactorial = factor(7);
console.log('factorial of 7', isFactorial);