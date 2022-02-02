// const factorial = 9;
// var fact = 1;
// for (var i = 1; i <= factorial; i++) {
//     fact = fact * i;
//     // console.log(fact);
// }
// console.log(fact);


function getFactorial(number) {
    var i = 1, fact = 1;
    while (i <= number) {
        fact = fact * i;
        i++;
    }
    return fact;
}

const number = 5;
var myFactorial = getFactorial(number);
console.log(myFactorial);