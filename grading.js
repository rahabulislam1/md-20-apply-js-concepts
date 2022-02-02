function grade(number) {
    if (100 >= number && number >= 80) {
        console.log('You got A+');
    }
    else if (80 > number && number >= 70) {
        console.log('You got A');
    }
    else if (70 > number && number >= 60) {
        console.log('You got B');
    }
    else if (60 > number && number >= 50) {
        console.log('You got C');
    }
    else if (50 > number && number >= 40) {
        console.log('You got D');
    }
    else {
        console.log('You are fail');
    }
}

var number = 56;
grade(number);