"use strict";
const numberInput = 6;
function isItAPrime(param) {
    for (let i = 2; i < param; i++)
        if (param % i === 0) {
            return false;
        }
    return param > 1;
}
;
isItAPrime(numberInput)
    ? console.log(`${numberInput} é primo`)
    : console.log(`${numberInput} não é primo`);
