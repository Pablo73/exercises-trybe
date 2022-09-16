
// const coolestTvShow = {
//     name: 'BoJack Horseman',
//     genre: 'adult animation',
//     createdBy: 'Raphael Bob-Waksberg',
//     favoriteCharacter: 'Princess Carolyn',
//     quote: 'Princess Carolyn always lands on her feet.',
//     seasons: 6,
//   };

//   for (const property in coolestTvShow) {
//     console.log(property);
//   }

//   console.log(Object.keys(coolestTvShow));

//   var arr = ['a', 'b', 'c'];
// console.log(Object.keys(arr)); // console: ['0', '1', '2']

// // array com objeto
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.keys(obj)); // console: ['0', '1', '2']

// // array como objeto com ordenação aleatória por chave
// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// // getFoo é uma propriedade que não é enumerável
// var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
// my_obj.foo = 1;

// console.log(Object.keys(my_obj)); // console: ['foo']

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };


  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

