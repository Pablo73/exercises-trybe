// Exemplos de funções impuras:

var count = 0;

function increaseCount(val) {
    count += val;
}

function getSomething() {
    return count > 0;
}

// NodeJS Assert

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 === 50
assert.strictEqual(50, 70); // AssertionError: 50 !== 70