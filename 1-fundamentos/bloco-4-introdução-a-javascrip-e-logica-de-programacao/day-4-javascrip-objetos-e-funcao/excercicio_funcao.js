//1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

// function verificaPalindrome(word) {
//     for(let index = 0 ; index < word.length ; index += 1){
//         if(word[index] != word[(word.length -1) - index]){
//             return false;
//         }
//     }
//     return true;

// }
// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

//Primeiro o método split transformará a string em um array onde cada posição será uma letra da string. 
//Depois o método reverse fará o array ficar de trás pra frente. Em seguida o método join faz com que todo o array vire uma string novamente.

// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false

  //2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

//   let array = [2, 3, 6, 17, 10, 1];

//   function numeroMaior(numeros){
//     let maior = 0;
//     for (let index = 0 ; index < numeros.length ; index += 1){

//         if(numeros[maior] < numeros[index]){
//             maior = index; 
//         }
//     }
//     return maior;
//   }

//   console.log(numeroMaior(array)); 


  //3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

//   let array = [2, 3, 6, 17, 10, 1, -3];

//   function buscaMenorNumero(numeros){
//     menor = numeros[0];
//     for(let index = 0 ; index < numeros.length ; index += 1){
//         if ( numeros[menor] > numeros[index]){
//             menor = index;
//         }
//     }
//     return menor;
//   }

//   console.log(buscaMenorNumero(array))


  //4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  //5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

  let array = [2, 3, 6, 17, 2, 1, -3, 5, 5, 5, 5, 5];

function repeatedNumberSearch(number){
    let conta = 0;
    let result = 0;
    let numeroRepetido = 0;

    for (let index = 0 ; index < number.length ; index += 1){
        for (let index2 = 0 ; index2 < number.length ; index2 += 1){
            if (number[index] === number[index2]){
                conta = conta + 1;
            }
        }
        if (conta > result){
            result = conta;
            numeroRepetido = number[index];
        }    
        conta = 0;   
    }
    return numeroRepetido;
}

console.log(repeatedNumberSearch(array));
  