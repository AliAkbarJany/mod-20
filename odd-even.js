// var number = 8;
// var reminder = number % 2;
// console.log(reminder);
// console.log(reminder == 0);


// chec the 'even' number======
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
var myNumber = 20;
var isMyNumberEven = isEven(myNumber)
console.log('is my number even', isMyNumberEven);

// check the "odd" number=====

function isOdd(number) {
    if (number % 2 == 1) {
        return true;
    }
    return false;
}

const herNumber = 78;
const isHerNumberOdd = isOdd(herNumber);
console.log('is her number odd', isHerNumberOdd);

// alternative "odd" checking=

function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const hisNumber = 23;
const isHisNumberOdd = isOdd(hisNumber);
console.log('is his number odd', isHisNumberOdd);