////////////////For/in///////////////////////////////////////////////

// let pizza = {
//     sabor: 'Palmito',
//     preco: 39.90,
//     bordaCatupiry: true
// };

// for (let key in pizza){
//     console.log(key);
//     console.log(pizza);
//     console.log(pizza.preco);
//     console.log(pizza[key])
//     console.log(pizza['bordaCatupiry'])
//}

// let pizzaDoces = ['chocolate', 'banana', 'morango'];

// for (let key in pizzaDoces){
//     //console.log(pizzaDoces);
//     //console.log(pizzaDoces[key]);
//     console.log(key, pizzaDoces[key]);

// }

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index in cars) {
//   console.log(cars[index]);
// }

// let car = {
//     type: 'Fiat',
//     model: '500',
//     color: 'white',
//   };
  
//   for (let index in car) {
//     console.log(index, car[index]);
//   }



//////////////////////////Of/on///////////////////////////////////////////


// let food = ['hamburguer', 'bife', 'acarajé'];
// for (let position in food) {
//     console.log(position);
//   };
//   //resultado: 0, 1, 2;

//   let food = ['hamburguer', 'bife', 'acarajé'];
//   for (let value of food) {
//     console.log(value);
//   };
  //resultado: hamburguer, bife, acarajé;


  //Exercicio 1-  Usando o objeto abaixo, utilize for/in e imprima no 
  //console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

//   let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };


//   for ( let index in names){
//   console.log('Olá ' + names[index] + ' para cada nome, substituindo o ' + names[index] + ' nome em questão');
//   }


  // Exrcicio 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let index in car){
    console.log(index, car[index]);
  }









