function tAmount(pAmount, year, interest) {
    for (var i = 1; i <= year; i++) {
        sum = pAmount + (pAmount * (interest / 100));
        pAmount = sum;
    }
    return pAmount;
}

const pAmount = 20000;
const year = 2;
const interest = 6;

var totalAmount = tAmount(pAmount, year, interest);
console.log('Total amount with interest after' + year + 'year: ', totalAmount);