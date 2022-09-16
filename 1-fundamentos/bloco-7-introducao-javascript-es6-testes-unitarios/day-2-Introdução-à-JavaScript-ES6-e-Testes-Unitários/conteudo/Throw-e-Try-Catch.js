const sum = (value1, value2) => value1 + value2;
console.log(sum(2,3));
console.log(sum(2,'3'));

const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      return 'Os valores devem ser numéricos';
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));
  console.log(sum(2,3));

const sum = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
    return value1 + value2;
  };
  
  console.log(sum(2, '3'));
  console.log(sum(2,3));

const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos');
    }
  };
  
  const sum = (value1, value2) => {
    try {
      verifyIsNumber(value1, value2);
      return value1 + value2;
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '3'));