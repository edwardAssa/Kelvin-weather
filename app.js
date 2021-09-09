// a constant variable kelvin which holds today's temperature
const kelvin = 0;

// create variable celcius to hold the converted kelvin
let celcius = kelvin - 273;

//fahrenheitConvert converts celcius to Fahrenheit and the result is assigned to the variable fahrenheit
let fahrenheitConvert = (celcius * (9/5)) + 32;
let fahrenheit = fahrenheitConvert;

//roundedFahrenheit rounds fahrenheit from decimal to a whole  number and the result  is assigned  to fahrenheit
let roundedFahrenheit = Math.round(fahrenheit);
fahrenheit = roundedFahrenheit;
console.log(`The temperatire is ${fahrenheit } Fahrenheit`);