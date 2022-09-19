// loginValidation.test.js
const {
    greetingMessage,
    loginErrorMessage,
    verifyCredentials,
  } = require("./loginValidation.js");
  
  describe("Testa a função verifyCredentials()", () => {
    
    it("verifyCredentials() chama a função correta dependendo do valor de userName e password", () => {
      
      const user = {
        userName: 'Bob',
        password: 123456,
      };
        
      const { userName, password } = user;
  
      expect(verifyCredentials({ userName, password })).toBe(
        "Hello, Joana! Que bom ter você de volta"
      ); 
    });
  
    it("greetingMessage() retorna uma mensagem no formato: `Hello, ${user}! Que bom ter você de volta`", () => {
      expect(greetingMessage("Lucas")).toBe(
        "Hello, Lucas! Que bom ter você de volta"
      );
    });
  
    it("loginErrorMessage() retorna uma mensagem no formato: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
      expect(loginErrorMessage("Bob")).toBe(
        "Pessoa usuária 'Bob' não encontrada, tente novamente!"
      );
    });  
  });


// toBe é o matcher mais simples. Esse matcher testa igualdade estrita entre o valor passado para 
// expect e seu argumento. Isso significa, por exemplo, que um teste com o expectation abaixo falharia porque a string “5” não é igual ao número 5.

expect(5).toBe("5")


// toEqual


let gemeoUm = "Cabelo comprido";
let gemeoDois = gemeoUm;

gemeoUm = "Careca";

console.log(gemeoUm); // Careca
console.log(gemeoDois); // Cabelo comprido

// os objetos tem atribuição por referência

let myName = { firstName: "Pedro" };
let identity = myName;

myName.firstName = "Carol";

console.log(myName.firstName); // Carol
console.log(identity.firstName); // Carol




test('Igualdade de array e object', () => {
    const arr = [1, 2 ,3];
    const obj = { a: 1, b: 2, c: 3};
  
    expect(arr).toBe([1, 2, 3]); // fails
    expect(obj).toBe({ a: 1, b: 2, c: 3}); // fails
    expect(arr).toEqual([1, 2, 3]); // OK
    expect(obj).toEqual({ a: 1, b: 2, c: 3}); // OK
  });

  // https://jestjs.io/pt-BR/docs/using-matchers

  // Matchers Comuns

  test('dois mais dois é quatro', () => {
    expect(2 + 2).toBe(4);
  });

  test('atribuição de objeto', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  test('adicionando números positivos não é zero', () => {
    for (let a = 1; a < 10; a++) {
      for (let b = 1; b < 10; b++) {
        expect(a + b).not.toBe(0);
      }
    }
  });

// toBeNull corresponde a apenas null
// toBeUndefined corresponde a apenas undefined
// toBeDefined é o oposto de toBeUndefined
// toBeTruthy combina com qualquer coisa que uma instrução if trata como verdadeiro
// toBeFalsy combina com qualquer coisa que uma instrução if trata como falso

test('nulo', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });
  
  test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });


//   Números
// A maioria das formas de comparar números têm "matcher" equivalentes.

test('dois mais dois', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe e toEqual são equivalentes para números
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  test('adicionando números de ponto flutuante', () => {
    const value = 0.1 + 0.2;
    //expect(value).toBe(0.3);     Isso não vai funcionar por causa de um erro de arredondamento
    expect(value).toBeCloseTo(0.3); // Isso funciona.
  });


//   Strings
//   Você pode verificar strings contra expressões regulares com toMatch:  

test('não existe I em team', () => {
    expect('team').not.toMatch(/I/);
  });
  
  test('mas existe "stop" em Christoph', () => {
    expect('Christoph').toMatch(/stop/);
  });

//   Arrays e iteráveis
// Você pode verificar se um array ou iterável contém um item específico usando toContain:

const shoppingList = [
    'fraldas',
    'kleenex',
    'sacos de lixo',
    'papel toalha',
    'leite',
  ];
  
  test('a lista de compras tem leite nela', () => {
    expect(shoppingList).toContain('leite');
    expect(new Set(shoppingList)).toContain('leite');
  });

//   Exceções
// Se você quiser testar se uma determinada função lança um erro quando é chamada, use toThrow.

function compileAndroidCode() {
    throw new Error('você está usando o JDK errado');
  }
  
  test('compilando para android segue conforme esperado', () => {
    expect(() => compileAndroidCode()).toThrow();
    expect(() => compileAndroidCode()).toThrow(Error);
  
    // Você também pode usar a mensagem exata de erro ou uma regexp
    expect(() => compileAndroidCode()).toThrow('você está usando o JDK errado');
    expect(() => compileAndroidCode()).toThrow(/JDK/);
  });

-------------------------------------------------------------------


  const multiplyByTwo = (number) => {
    if (!number) {
      throw new Error('number é indefinido')
    }
    return number * 2;
  };
  multiplyByTwo(4);
  
  test('testa se multiplyByTwo retorna o resultado da multiplicação', () => {
    expect(multiplyByTwo(4)).toBe(8);
  });
  test('testa se é lançado um erro quando number é indefinido', () => {
    expect(() => { multiplyByTwo() }).toThrow();
  });
  test('testa se a mensagem de erro é "number é indefinido"', () => {
    expect(() => { multiplyByTwo() }).toThrowError(new Error('number é indefinido'));
  });


  --------------------------------------------------------

//   not

// not permite testar o oposto de algo. Por exemplo, este código testa que domingo é um dia da semana, mas não um dia útil:

const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
const weekDays = ['Sunday', ...workDays, 'Saturday'];

test('Sunday is a week day', () => {
  expect(weekDays).toContain('Sunday');
});

test('Sunday is not a workday', () => {
  expect(workDays).not.toContain('Sunday');
});

-------------------------------------------------------------

// O bloco describe

const myBeverage = {
    delicious: true,
    sour: false,
  };
  
  describe('my beverage', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });
  
    test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });

  --------------

  const binaryStringToNumber = binString => {
    if (!/^[01]+$/.test(binString)) {
      throw new CustomError('Not a binary number.');
    }
  
    return parseInt(binString, 2);
  };
  
  describe('binaryStringToNumber', () => {
    describe('given an invalid binary string', () => {
      test('composed of non-numbers throws CustomError', () => {
        expect(() => binaryStringToNumber('abc')).toThrowError(CustomError);
      });
  
      test('with extra whitespace throws CustomError', () => {
        expect(() => binaryStringToNumber('  100')).toThrowError(CustomError);
      });
    });
  
    describe('given a valid binary string', () => {
      test('returns the correct number', () => {
        expect(binaryStringToNumber('100')).toBe(4);
      });
    });
  });