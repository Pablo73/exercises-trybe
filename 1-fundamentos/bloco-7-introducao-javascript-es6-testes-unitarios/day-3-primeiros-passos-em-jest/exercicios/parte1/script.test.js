const suma = require('./script.js');

describe("Testes para a função suma", () => {

    test('suma 4 + 5 igual a 9', () => {
        expect(suma(4, '5')).toBe(9);
    });

    test('suma 0 + 0 igual a 0', () => {
        expect(suma(0, 0)).toBe(0);
    });

    test('se um dos valores for uma string', () => {
        expect(() => suma()).toThrow();
    });
});