function oddEvenCheck(num) {
    if (num % 2 == 0) {
        // result = 'Even';
        return 'Even';
    }
    else if (num % 2 == 1) {
        return 'Odd';
    }
}
var num = 34;
var checkNumber = oddEvenCheck(num);
console.log(checkNumber);