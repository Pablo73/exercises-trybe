 //let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// //let numbers = [2,4,6,8,10];

// //Exercicio 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let i = 0 ; i < numbers.length ; i += 1){
//   console.log(numbers[i]);
// }

// //Exercicio 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let resultado = 0;
// for (let i = 0 ; i < numbers.length ; i += 1){
//    resultado = resultado + numbers[i];
// }
// console.log(resultado);

// //Exercicio 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let resultado = 0;
// for (let i = 0 ; i < numbers.length ; i = i + 1){
//     resultado = resultado + numbers[i];
// }
//  console.log(resultado / numbers.length);

// // Exercicio 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

//  let resultado = 0;
// for (let i = 0 ; i < numbers.length ; i = i + 1){
//     resultado = resultado + numbers[i];
// }
// if(resultado / numbers.length > 20){
//     console.log('valor maior que 20');
// }
// else {console.log('valor menor ou igual 20');
// }

// //Exercicio 5 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// let resultado = 0;

// for (let i = 0 ; i < numbers.length ; i = i + 1){
//     if(numbers[i] > resultado){
//         resultado = numbers[i];
//     }
// }  
// console.log(resultado);

// //Exrcicio 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";


// for(let i = 0 ; i < numbers.length ; i = i + 1){
//     if(numbers[i] % 2 !== 0){
//         console.log(numbers[i])
//     }
//     if(numbers[i] % 2 === 0){
//         console.log(numbers[i], 'Não é ímpar')
//     }
// }
// let resultado = 0;
// for(let i = 0 ; i < numbers.length ; i = i + 1){
//     if(resultado = numbers[i] % 2 !== 0){
//         console.log(numbers[i]);
//     }
// }
// if(resultado = 'false'){
//     console.log("Nenhum valor ímpar encontrado");
// }

// //Exercicio 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;


// let resultado = numbers[0];
// for(let i = 0 ; i < numbers.length ; i = i + 1){
//    if(resultado > numbers[i]){
//     resultado = numbers[i];
//    }
// }
// console.log(resultado);

//Exercicio 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// let valorMaximo = 25;
// for(let i = 1 ; i <= valorMaximo ; i = i + 1){
//     console.log(i);
// }

//Exercicio 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let valorMaximo = 25;
   for(let i = 1 ; i <= valorMaximo ; i = i + 1){
    console.log(i / 2);
 }
