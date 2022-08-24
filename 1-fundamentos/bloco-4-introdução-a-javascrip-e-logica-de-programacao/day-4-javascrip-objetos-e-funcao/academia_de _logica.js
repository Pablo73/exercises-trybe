// Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. 
//Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato:
// Fórmulas: perimetro = (2 * base) + (2 * altura) area = base * altura

let objeto = {
    area: 0,
    perimetro: 0
  }

  function quadrilatero(base, altura) {

        objeto['area'] = base * altura;
        objeto['perimetro'] = (2 * base) + (2 * altura);
       
        return objeto; 
    }

  console.log(quadrilatero(2,2));
  
  //Exercício 2 - Crie uma função que, dado um array de números inteiros, 
  //retorne a quantidade de números pares e ímpares no formato:
  
  let resultado = {
    pares: 0,
    impares: 0
  }
   let array = [1,2,1,2]

  function numerosImparePares (numeros){
   for (let index = 0 ; index < numeros.length ; index = index + 1)
     if(numeros[index] % 2 === 0){
        resultado.pares += 1;
     }
    else {
        resultado.impares += 1;
    }

      return resultado;
  }

  console.log(numerosImparePares(array));
  
  //Exercício 3 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. 
  //Considere que a string ending sempre será menor que a string word.
  //Dica: Use o split.

  let a = 'word';
  let b = 'ending';

  function string (string, string2){

    
  }


  
  
  // valor de teste: ‘trybe’ e ‘be’
  // valor esperado no retorno da função: true
  //verificaFimPalavra(‘trybe’, ‘be’);  
  // Retorno esperado: true  
  //verificaFimPalavra(‘joaofernando’, ‘fernan’);  
  //  Retorno esperado: false;  