// exemplo de uma HOF que imprime na tela cada valor do array:

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element) => {
  console.log('Cada elemento do array:', element);
});

// Cada elemento do array: josé
// Cada elemento do array: 50
// Cada elemento do array: 0.25
// Cada elemento do array: { comida: 'Chocolate' }

// ---------------------------------------------------------------

// Sua estrutura:
arrayOfValues.forEach((element) => {
    console.log('Cada elemento do array:', element);
  });

// ---------------------------------------------------------------------

//   Suas partes:
// - arrayOfValues - Nome do array que será percorrido;
// - forEach - A HOF pode ser .find, .some, .every;
// - element - Valor do elemento do array;
// - (element) => {console.log('Cada elemento do array:', element); - função a ser executada.
// É isso mesmo! Quando você passa uma arrow function para uma HOF, o primeiro parâmetro que essa 
// arrow function recebe é o elemento do array. Em português, é como se significasse Verifique se cada elemento do meu array é múltiplo de 2.

meuArray.forEach((elemento) => {
    if (elemento % 2 === 0) {
      console.log(`${elemento} é divisível por 2!`);
    }
  });

  // --------------------------------------------------------------------------------------

  const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
arrayOfValues.forEach((element, indexOfTheArray, theEntireArray) => {
  console.log('Cada elemento do array:', element);
  console.log('Index, posição do elemento:', indexOfTheArray);
  console.log('Array percorrido:', theEntireArray);
});

// => ---------------
//   Cada elemento do array: josé
//   Index, posição do elemento: 0
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 50
//   Index, posição do elemento: 1
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: 0.25
//   Index, posição do elemento: 2
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]
//   ---------------
//   Cada elemento do array: { comida: 'Chocolate' }
//   Index, posição do elemento: 3
//   Array percorrido: [ 'josé', 50, 0.25, { comida: 'Chocolate' } ]