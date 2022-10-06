// cicles.test.js

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

// cicles.test.js

// let cities = [];

// const addCity = (city) => {
//  cities.push(city);
// };

// const removeCity = (city) => {
//  cities = cities.filter((eachCity) => eachCity !== city);
// };

// test('Testa a função addCity', () => {
//     expect.assertions(4);
//     addCity('Campinas');
//     addCity('Goiania');
//     addCity('Recife');
//     expect(cities).toHaveLength(3);
//     expect(cities).toContain('Campinas');
//     expect(cities).toContain('Goiania');
//     expect(cities).toContain('Recife');
//   });
  
//   test('Testa a função removeCity', () => {
//     expect.assertions(4);
//     removeCity('Campinas');
//     expect(cities).toHaveLength(2);
//     expect(cities).not.toContain('Campinas');
//     expect(cities).toContain('Goiania');
//     expect(cities).toContain('Recife');
//   });

//------------------------------------------------------------------------------------------------------------------------

  // cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// beforeEach(() => {
//     cities = [...cities, 'Pindamonhangaba'];
//   });
  
  
//   test('Testa a função addCity utilizando o beforeEach', () => {
//     expect.assertions(5);
//     addCity('Campinas');
//     addCity('Goiania');
//     addCity('Recife');
//     expect(cities).toHaveLength(4);
//     expect(cities).toContain('Campinas');
//     expect(cities).toContain('Goiania');
//     expect(cities).toContain('Recife');
//     expect(cities).toContain('Pindamonhangaba');
//   });
  
//   test('Testa a função removeCity utilizando o beforeEach', () => {
//     expect.assertions(5);
//     removeCity('Campinas');
//     expect(cities).toHaveLength(4);
//     expect(cities).not.toContain('Campinas');
//     expect(cities).toContain('Goiania');
//     expect(cities).toContain('Recife');
//     expect(cities).toContain('Pindamonhangaba');
//     console.log(cities);
//   });

//---------------------------------------------------------------------------------------------------------------

  // cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

// beforeEach(() => {
//  cities = [...cities, 'Pindamonhangaba'];
// });

afterEach(() => {
    cities = [];
  });
  
  test('Testa a função addCity utilizando o beforeEach', () => {
    expect.assertions(5);
    addCity('Campinas');
    addCity('Goiania');
    addCity('Recife');
    expect(cities).toHaveLength(4);
    expect(cities).toContain('Campinas');
    expect(cities).toContain('Goiania');
    expect(cities).toContain('Recife');
    expect(cities).toContain('Pindamonhangaba');
  });
  
  test('Testa a função removeCity utilizando o beforeEach', () => {
    expect.assertions(2);
    removeCity('Pindamonhangaba');
    expect(cities).toHaveLength(0);
    expect(cities).not.toContain('Pindamonhangaba');
  });

  /------------------------------------------------------------------------------------------------------------------------------------

  // cicles.test.js

// let cities = [];

// const addCity = (city) => {
// cities.push(city);
// };

// const removeCity = (city) => {
// cities = cities.filter((eachCity) => eachCity !== city);
// };

describe('Agrupa o primeiro bloco de testes', () => {
    beforeEach(() => {
      cities = [...cities, 'Pindamonhangaba'];
    });
  
    afterEach(() => {
      cities = [];
    });
  
    test('Testa a função addCity dentro do primeiro bloco de testes', () => {
      expect.assertions(5);
      addCity('Campinas');
      addCity('Goiania');
      addCity('Recife');
      expect(cities).toHaveLength(4);
      expect(cities).toContain('Campinas');
      expect(cities).toContain('Goiania');
      expect(cities).toContain('Recife');
      expect(cities).toContain('Pindamonhangaba');
    });
  
    test('Testa a função removeCity dentro do primeiro bloco de testes', () => {
      expect.assertions(2);
      removeCity('Pindamonhangaba');
      expect(cities).toHaveLength(0);
      expect(cities).not.toContain('Pindamonhangaba');
    });
  });
  
  describe('Agrupa o segundo bloco de testes', () => {
    beforeEach(() => {
      cities = [...cities, 'Tangamandapio'];
    });
  
    afterEach(() => {
      cities = [];
    });
  
    test('Testa a função addCity dentro do segundo bloco de testes', () => {
      expect.assertions(5);
      addCity('Campinas');
      addCity('Goiania');
      addCity('Recife');
      expect(cities).toHaveLength(4);
      expect(cities).toContain('Campinas');
      expect(cities).toContain('Goiania');
      expect(cities).toContain('Recife');
      expect(cities).toContain('Tangamandapio');
    });
  
    test('Testa a função removeCity dentro do segundo bloco de testes', () => {
      expect.assertions(3);
      removeCity('Tangamandapio');
      expect(cities).toHaveLength(0);
      expect(cities).not.toContain('Tangamandapio');
      expect(cities).not.toContain('Pindamonhangaba');
    });
  });