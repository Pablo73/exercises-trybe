console.log('1 - Receber roda');
console.log('2 - Encaixar parafusos');
console.log('3 - Fixar roda no carro');

// Note que existe uma ordem específica de etapas que não pode ser quebrada, 
// pois uma afeta diretamente a outra. Sem roda, não adianta encaixar parafusos; sem encaixar parafusos, fixar a roda não é possível.

console.log('1 - Comprar parafusos');
console.log('2 - Adicionar ao estoque');
console.log('3 - Receber roda');
console.log('4 - Encaixar parafusos');
console.log('5 - Fixar roda no carro');

// Observe que estamos trabalhando de forma ineficiente e adicionando etapas desnecessárias à nossa produção, pois, se tivermos parafusos 
// suficientes em estoque, não precisaremos parar a montagem para que mais parafusos sejam comprados e repostos. Assim como na nossa linha 
// de produção, existem operações que não têm essa codependência em JavaScript e com o objetivo de cobrir justamente esse tipo de situação 
// surgem as operações assíncronas.

// linhaDeProducao.js

const TWO_SECONDS = 2000;

setTimeout(() => {
  console.log('Comprar parafusos'); // Comprar parafusos
  console.log('Adicionar ao estoque'); // Adicionar ao estoque
}, TWO_SECONDS);

console.log('1 - Receber roda'); // 1 - Receber roda
console.log('2 - Encaixar parafusos'); // 2 - Encaixar parafusos
console.log('3 - Fixar roda no carro'); // 3 - Fixar roda no carro

// Saída:
// 1 - Receber roda
// 2 - Encaixar parafusos
// 3 - Fixar roda no carro
// Comprar parafusos
// Adicionar ao estoque

// Note que console.log('Comprar parafusos') e console.log('Adicionar ao estoque') foram declarados antes das etapas 1, 2 e 3, e mesmo assim o 
// retorno das chamadas só ocorre ao final, isso acontece porque utilizamos a função setTimeout. É muito comum que essa função seja utilizada 
// para simular comportamentos assíncronos.

// Exerciico

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

pushNumber(numbers, 1);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// Saída:
// [ 1, 2, 3 ]

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

console.log(numbers);

// Saída:
// [2, 3]

// Por que o primeiro código retorna o array [1, 2, 3] enquanto o segundo retorna o array [2, 3]? Isso ocorre 
// por causa da função setTimeout. Ela é uma função assíncrona, que espera alguns milissegundos para executar a 
// função passada a ela como parâmetro. No código acima, ela espera 3000 milissegundos (3 segundos) para executar 
// o pushNumber(numbers, 1). Como o console.log é uma função síncrona, ele é executado antes de o setTimeout terminar.

// Para que o console.log mostre o array correto, é necessário chamá-lo após 3000 milissegundos:

// pushNumberAsync.js

const pushNumber = (list, number) => list.push(number);

const numbers = [];

const THREE_SECONDS = 3000;

setTimeout(() => pushNumber(numbers, 1), THREE_SECONDS);
pushNumber(numbers, 2);
pushNumber(numbers, 3);

setTimeout(() => console.log(numbers), THREE_SECONDS);

// Saída:
// [ 2, 3, 1 ]


