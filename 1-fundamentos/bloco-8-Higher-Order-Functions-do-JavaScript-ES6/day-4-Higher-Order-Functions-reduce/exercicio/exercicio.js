// Utilize o reduce para transformar uma matriz em um array.

// const arrays = [
//     ['1', '2', '3'],
//     [true],
//     [4, 5, 6],
//   ];
  
//   const flatten = arrays.reduce((acc, curr) => {
//         return acc.concat(curr);
//     });

//     // const flatten = arrays.reduce((a, e) => [...a, ...e]

//   console.log(flatten)

// ----------------------------------------------------------------------------------

const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  // Crie uma string com os nomes de todas as pessoas autoras.
  
//    const reduceNames = books.reduce((acc, curr) => { return `${acc} ${curr.author.name},`},'')

//    console.log(reduceNames);

   //-------------------------------------------------------------------------------------------------------

  // Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.


//   const expected = books.reduce((acc, curr) => { 
//     return (acc + (curr.releaseYear - curr.author.birthYear))}, 0);

//   console.log(expected / books.length);

  // -------------------------------------------------------------------------------------------------------

  // Encontre o livro com o maior nome.
  
//   const bigBook = books.reduce((acc, curr) => {return acc.name.length > curr.name.length ? acc : curr});

//   console.log(bigBook);

  // ---------------------------------------------------------------------------------------------------

  // Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.

  const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;

  const containsA = () => {
    let totalLetter = 0;

    names.forEach((element) => { 
      const lettersFromName = element.split('');

      totalLetter += lettersFromName.reduce((acc, curr) => { 
        if (curr === 'A' || curr === 'a') {
          return acc + 1;
        }
        return acc;
      }, 0);
    })
    return totalLetter;
  }


  console.log(containsA());

// ------------------------------------------------------------------------


// Para o próximo exercício você deve criar um novo array de objetos a partir das informações de students e grades, onde cada objeto desse novo array terá o formato 
// { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de grades refere-se ao estudante na posição 0 de students. 
// Para resolver este exercício, além de reduce, será necessário utilizar também a função map.

// De olho na dica 👀: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const studentAverage = () => {
  return nameAndAverage = students.map((student, index) => (
    {
    name: student,
    average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length),
  }
  )); 
}

console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];