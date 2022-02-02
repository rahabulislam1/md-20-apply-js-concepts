function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}
let myInch = 144;
var result = inchToFeet(myInch);
console.log('Total Feet: ', result);

//Mile to kilometer
function mileToKm(miles) {
    var km = miles * 1.60934;
    return km;
}

var myKm = mileToKm(236);
console.log('Total km: ', myKm);