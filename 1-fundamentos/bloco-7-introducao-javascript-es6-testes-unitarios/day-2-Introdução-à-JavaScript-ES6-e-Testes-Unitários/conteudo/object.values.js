// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };
  
//   for (const property in coolestTvShow) {
//     console.log(coolestTvShow[property]);
//   }

//   console.log(Object.values(coolestTvShow));

//   var obj = { foo: "bar", baz: 42 };
// console.log(Object.values(obj)); // ['bar', 42]

// // array como objeto
// var obj = { 0: 'a', 1: 'b', 2: 'c' };
// console.log(Object.values(obj)); // ['a', 'b', 'c']

// // array como objeto com ordenação de chave aleatória
// var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
// console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// // getFoo é a propriedade a qual não é enumerável
// var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
// my_obj.foo = "bar";
// console.log(Object.values(my_obj)); // ['bar']

// // argumento não-objeto será coagido num objeto
// console.log(Object.values("foo")); // ['f', 'o', 'o']

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsValuesWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
  console.log(listSkillsValuesWithValues(student));