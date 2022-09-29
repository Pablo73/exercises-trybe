
// reduce((accumulator, currentValue, currentIndex, array) => { /* ... */ }, initialValue )

// // ------------------------------------------------------------------------------------

// array.reduce((acc, curr) => {
//     // escopo de execução da função
// }, valorInicial)

// // -------------------------------------------------------------------------------------

// const numbers = [1, 32, 44, 2, 3];
// const iteracoesDoReduce = numbers.reduce((acc, curr) => {
//   console.log(`valor atual do ${acc} - valor atual é ${curr}`);
//   // Antes da primeira iteração o valor de início do `acc` é o valor no index 0 do array, e o valor de início de `curr` é o valor no index 1 do array.
//       // Iteração 1: valor do acc é 1 e o de curr é 32;
//  // Após a primeira iteração, o valor de `acc` muda e passa a acumular agora o resultado do retorno da callback (acc + curr).
//      // Iteração 2: valor do acc é 33 e o de curr é 44;
// // Acontece então uma segunda iteração, e `curr` agora assume o valor do index na sequência do array, no caso o valor do segundo index e `acc` segue armazenando os retornos.
//     // Iteração 3: valor do acc é 77 e o de curr é 2;
//     // Iteração 4: valor do acc é 79 e o de curr é 3;
//     // Valor final de `acc`é 82 e `curr` para no 3.
//   return acc +  curr // Ao fim das iterações podemos ver que o `acc` armazenou o resultado total do retorno da função.
// });
// console.log(`O resultado final é ${iteracoesDoReduce}`);
//   // por fim, esse console.log imprime o retorno final da nossa função.

//   // ----------------------------------------------------------------------------------------

//   // Veja também que ao invés de passar a lógica direto dentro da callback do reduce, 
//   // você pode criar uma função externa e chamá-la como sendo o parâmetro callback:

//   const numbers = [1, 32, 44, 2, 3];
// const sumNumbers =  (acc, curr) => acc + curr;
// const totalSum = numbers.reduce(sumNumbers, 30);
// console.log(totalSum); //112

// // ---------------------------------------------------------------------------------------------

// const numbers = [50, 85, -30, 3, 15];

// const getBigger = (bigger, number) => ((bigger > number) ? bigger : number);

// const bigger = numbers.reduce(getBigger, 0);
// console.log(bigger); // 85

// // ---------------------------------------------------------------------------------------------

// // Para fixar ainda mais o conceito de reduce, faça uma função que some todos os números pares do array:

// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const getEven = (number) => number % 2 === 0;
// const sumPair = (accumulator, number) => accumulator + number;

// const sumNumbers = (array) => array.filter(getEven).reduce(sumPair); // Olhe que código pequeno e conciso!

// console.log(sumNumbers(numbers)); // 152


// // ----------------------------------------------------------------------------------


// const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

// const sumPair = (accumulator, number) => (
//   (number % 2 === 0) ? accumulator + number : accumulator
// );

// const sumNumbers = (array) => array.reduce(sumPair, 0);

// console.log(sumNumbers(numbers)); // 152

// -----------------------------------------------------------------------------------

// Agora crie uma função usando os dados dos estudantes, para mostrar na tela 
// um relatório que diz em qual matéria o estudante foi melhor. Você usará tanto o map quanto, dentro dele, o reduce!

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

const getBestClass = (acc, materia) => {
  if (acc.nota > materia.nota) return acc;
  return materia;
};

const grade = (estudants) => estudants.map((estudant) => ({
  nome: estudant.nome,
  materia: estudant.materias.reduce(getBestClass).name,
}));

console.log(grade(estudantes));