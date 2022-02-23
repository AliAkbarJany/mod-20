
// normal system----------
var penInch = 144;
var feet = penInch / 12;
console.log('pen feet', feet);

var bookInch = 68;
var feet = bookInch / 12;
console.log('book feet', feet);

var boardInch = 78;
var feet = boardInch / 12;
console.log('board feet', feet);

// function system--------

function inchTofeet(inches) {
    var feet = inches / 12;
    return feet;
}


var tableInch = 244;
var convertedFeet = inchTofeet(tableInch);

console.log('table feet', convertedFeet);


var cableInch = 132;
var convertedFeet = inchTofeet(cableInch);
console.log('cable feet', convertedFeet);


//  mile to km
function mileTokm(miles) {
    var km = miles * 1.60934;
    return km;
}
var highway = 23;
var convertedKm = mileTokm(highway);
console.log('mile of highway', convertedKm);




