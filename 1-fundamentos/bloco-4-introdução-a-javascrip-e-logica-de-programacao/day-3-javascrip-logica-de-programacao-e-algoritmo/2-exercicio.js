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
// let i = word.length;
// for(let i = word.length - 1 ; 0 <= i ; i = i - 1){
//     resultado = resultado + word[i];
// }
// console.log(resultado);


//Exercicio 3 - Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

 let array = ['java', 'javascript', 'python', 'html', 'css'];

let resultado = 0;

for(let i = 0 ; i <= array.length ; i = i + 1){
    for(let i2 = 0 ; i2 <= array.length ; i2 = i2 + 1 ){
resultado = resultado + array [i] [i2];
console.log(resultado);


    }
}
//console.log(array[0][0]); 
