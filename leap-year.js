function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 100 == 0 && year % 400 == 0) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    else {
        return false;
    }
}

const myYear = 2000
const isMyYearLeapYear = leapYear(myYear);
console.log('Is ' + myYear + ' year is leap Year? : ' + isMyYearLeapYear);

