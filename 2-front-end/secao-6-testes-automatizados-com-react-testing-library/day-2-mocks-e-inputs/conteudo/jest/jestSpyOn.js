const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  
  const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
  const subtrair = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => a / b;
  
  module.exports = { somar, subtrair, multiplicar, dividir };

  //----------------------------------------------------------------------------------------------------------------------

  const math = require('./math');

test("#somar", () => {
  // testando se a função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno
  const mockSomar = jest.spyOn(math, "somar");

  mockSomar(1, 2);
  expect(mockSomar).toHaveBeenCalled();
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar).toHaveBeenCalledWith(1, 2);
  expect(mockSomar(1, 2)).resolves.toBe(3);
});

// Há também como limpar, resetar ou restaurar mocks. Existem três métodos capazes de fazer isso:

// mock.mockClear()
        // Útil quando você deseja limpar os dados de uso de uma simulação entre dois expects.

// mock.mockReset()
        // Faz o que o mockClear() faz;
        // Remove qualquer retorno estipulado ou implementação;
        // Útil quando você deseja resetar uma simulação para seu estado inicial.

// mock.mockRestore()
        // Faz tudo que mockReset() faz;
        // Restaura a implementação original;
        // Útil para quando você quer simular funções em certos casos de teste e restaurar a implementação original em outros.

        const math = require('./math');

test("#somar", () => {
  // testando a implementação original, o mock e a restauração da função original

  // implementação original
  expect(math.somar(1, 2)).resolves.toBe(3);

  // criando o mock e substituindo a implementação para uma subtração
  const mockSomar = jest
    .spyOn(math, "somar")
    .mockImplementation((a, b) => a - b);

  math.somar(5, 1);
  expect(mockSomar).toHaveBeenCalledTimes(1);
  expect(mockSomar(5, 1)).toBe(4);
  expect(mockSomar).toHaveBeenCalledTimes(2);
  expect(mockSomar).toHaveBeenLastCalledWith(5, 1);

  // restaurando a implementação original
  math.somar.mockRestore();
  expect(math.somar(1, 2)).resolves.toBe(3);
});