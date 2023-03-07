const celsiusToFahrenheit = (value) => (value * 1.8) + 32;

const fahrenheitToCelsius = (value) => (value - 32) / 1.8;

module.exports = {
    celsiusToFahrenheit,
    fahrenheitToCelsius,
};



// brlValue.js
// const brl = 5.37;

// module.exports = brl;

// brlValue.js
// const brl = 5.37;

// const usdToBrl = (valueInUsd) => valueInUsd * brl;

// module.exports = usdToBrl;


// index.js
// const convert = require('./brlValue');

// const usd = 10;
// const brl = convert(usd);

// console.log(brl) // 53.7

// brlValue.js
// const brl = 5.37;

// const usdToBrl = (valueInUsd) => valueInUsd * brl;

// module.exports = {
//   brl,
//   usdToBrl,
// };

// index.js
// const brlValue = require('./brlValue');

// console.log(brlValue); // { brl: 5.37, usdToBrl: [Function: usdToBrl] }

// console.log(`Valor do dólar: ${brlValue.brl}`); // Valor do dólar: 5.37
// console.log(`10 dólares em reais: ${brlValue.usdToBrl(10)}`); // 10 dólares em reais: 53.7



// const { brl, usdToBrl } = require('./brlValue');

// console.log(`Valor do dólar: ${brl}`); // Valor do dólar: 5.37
// console.log(`10 dólares em reais: ${usdToBrl(10)}`); // 10 dólares em reais: 53.7