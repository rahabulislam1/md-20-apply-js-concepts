//celsius to fahrenheit
function getCelsiusToFahrenheit(celsious) {
    var fahrenheit = (celsious * (9 / 5)) + 32;
    return fahrenheit;
}
var myCelsious = 35;
var celsiusToFahrenheit = getCelsiusToFahrenheit(myCelsious);
console.log('Celsius to fahrenheit: ', celsiusToFahrenheit);

//fahrenheit to celsius
function getFahrenheitToCelsius(fahrenheit) {
    var Celsious = ((fahrenheit - 32) * (5 / 9));
    return Celsious;
}
var myfahrenheit = 231;
var fahrenheitToCelsius = getFahrenheitToCelsius(myfahrenheit);
console.log('Fahrenheit to celsius: ', fahrenheitToCelsius.toFixed(2));