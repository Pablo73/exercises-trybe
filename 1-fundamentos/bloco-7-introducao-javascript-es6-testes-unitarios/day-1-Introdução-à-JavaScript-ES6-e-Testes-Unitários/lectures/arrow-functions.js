const printName = function () {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

  const printName = () => {
    const myName = 'Lucas';
    return myName;
  };
  
  console.log(printName());

  const printName = () => 'Lucas';
console.log(printName());

const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));