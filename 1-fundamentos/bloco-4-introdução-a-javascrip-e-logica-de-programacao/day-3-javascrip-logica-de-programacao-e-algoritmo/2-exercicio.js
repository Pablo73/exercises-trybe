// Exrcicio 1 - crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 10;
// let resultado = 1;
// for(let i = 1 ; i <= fatorial ; i = i + 1){
// resultado = resultado * i;
// }
// console.log(resultado);


// Exrcicio 2 -  Agora, desenvolva um algoritmo que é capaz de inverter uma palavra.

// let word = 'tryber';
// let resultado = '';

// for(let i = word.length - 1 ; 0 <= i ; i = i - 1){
//     resultado = resultado + word[i];
// }
// console.log(resultado);


//Exercicio 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = [0];
let menor = array[0];

for(let i = 0 ; i < array.length ; i = i + 1){

    if(array[i].length > maior.length){
     maior = array[i];
    } 
}

for(let i = 0 ; i < array.length ; i = i + 1){

    if(array[i].length < menor.length){
     menor = array[i];
    } 
}
console.log(maior);
console.log(menor);




// Exrcicio 4 - Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// let maximo = 20;
// let maiorPrimo = []
// let primo;

// for(let i = 2 ; i <= maximo ; i = i + 1){

//     for( let i2 = 2 ; i2 <= maximo ; i2 = i2 + 1){
//         primo = i % i2;  
//         if(primo === 0){
//             maiorPrimo.push(i)
//         }     
//     }
// }
// console.log(maiorPrimo);

  