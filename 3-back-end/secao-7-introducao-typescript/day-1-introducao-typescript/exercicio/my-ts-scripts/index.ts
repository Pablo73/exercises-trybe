
const numberInput: number = 6;

function isItAPrime(param: number): boolean {
  for (let i = 2; i < param; i++)
    if (param % i === 0) {
      return false;
    }
  return param > 1;
};

isItAPrime(numberInput)
  ? console.log(`${numberInput} é primo`)
  : console.log(`${numberInput} não é primo`);

const emailInput: string = 'email@email.com';

function validateEmailFormat(param: string) {
  var re: RegExp = /\S+@\S+\.\S+/;
  return re.test(param);
};

console.log(validateEmailFormat(emailInput))