// const path = require('path');

// console.log(path.dirname('/usr/share/gnome'));
// console.log(path.resolve('usr', 'share', 'gnome'));
// console.log(path.resolve('/', 'usr', 'share', 'gnome'));

const { celsiusToFahrenheit, fahrenheitToCelsius } = require('../myModules/temp');

console.log(celsiusToFahrenheit(100));
console.log(fahrenheitToCelsius(212));