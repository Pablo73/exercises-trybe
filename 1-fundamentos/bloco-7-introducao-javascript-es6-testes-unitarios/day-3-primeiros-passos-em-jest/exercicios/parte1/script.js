
const suma = (a,b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('parameters must be numbers');
    }
  
    return a + b;
  }

  module.exports = suma;
  
// console.log(suma(4, '5'))