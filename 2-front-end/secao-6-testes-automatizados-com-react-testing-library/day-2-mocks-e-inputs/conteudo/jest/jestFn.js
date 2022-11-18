const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test('quando o número aleatório é par, a função retorna `true`', () => {
  expect(divisivelPorDois()).toBe(true); // Como garantimos que o número retornado será par?
});

// const retornaNumeroAleatorio = () => Math.floor(Math.random() * 100);

// const divisivelPorDois = () => (retornaNumeroAleatorio() % 2) === 0;

test("#divisivelPorDois", () => {
  // testando se a função foi chamada
  divisivelPorDois();
  expect(divisivelPorDois).toHaveBeenCalled();
}); // não funciona nece casso


// ...
test("#divisivelPorDois", () => {
    // testando se a função foi chamada. Não simulamos nenhum comportamento aqui, pois, para esse teste, isso não importa! Apenas queremos saber se ela foi chamada.
    divisivelPorDois = jest.fn();
  
    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
  });

  //Por ser uma simulação, podemos especificar qual vai ser o retorno da função. Basicamente, o que podemos dizer é: 
//   “No contexto deste teste, quando essa função for chamada, ela retornará o valor que eu defini, em vez de um valor aleatório!”. 
//   Duas propriedades nos permitem fazer essa declaração: mockReturnValue(value) e mockReturnValueOnce(value). O mockReturnValue define 
//   um valor padrão de retorno. Já o mockReturnValueOnce retorna o valor definido apenas uma vez, e é importante, pois pode ser encadeado 
//   para que chamadas sucessivas retornem valores diferentes.

//...
test("#divisivelPorDois", () => {
    // testando se a função foi chamada e qual seu retorno
    divisivelPorDois = jest.fn().mockReturnValue(true);
  
    divisivelPorDois();
    expect(divisivelPorDois).toHaveBeenCalled();
    expect(divisivelPorDois()).toBe(true);
  });

//   A propriedade toHaveBeenCalled() espera que a função dentro do expect tenha sido executada por alguma chamada anterior a essa linha dentro do contexto desse teste.

// Além disso, podemos também testar quantas vezes a função foi chamada. Para isso, utilizamos a propriedade toHaveBeenCalledTimes(number)

// ...
test("#divisivelPorDois", () => {
    // testando quantas vezes a função foi chamada e qual seu retorno
    divisivelPorDois = jest
      .fn()
      .mockReturnValue('default value')
      .mockReturnValueOnce('first call')
      .mockReturnValueOnce('second call');
  
    expect(divisivelPorDois).toHaveBeenCalledTimes(0);
  
    expect(divisivelPorDois()).toBe("first call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(1);
  
    expect(divisivelPorDois()).toBe("second call");
    expect(divisivelPorDois).toHaveBeenCalledTimes(2);
  
    expect(divisivelPorDois()).toBe("default value");
    expect(divisivelPorDois).toHaveBeenCalledTimes(3);
  });
