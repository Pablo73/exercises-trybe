function dividirNumeros(num1, num2) {
    const promise = new Promise((resolve, reject) => {
      if (num2 == 0) 
        reject(new Error("Não pode ser feito uma divisão por zero"));
  
      const resultado = num1 / num2;
      resolve(resultado)
    });
  
    return promise;
  }


  const doSomething = async () => {
    console.log(await dividirNumeros(2,2));
  };


  const promiseParaFazerAlgumaCoisa = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('Eu fiz alguma coisa'), 2000)
    })
  }
  
  const assistirAlguemFazendoAlgumaCoisa = async () => {
    const something = await promiseParaFazerAlgumaCoisa()
    return something + '\n e Eu vi você fazendo'
  }
  
  const AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa = async () => {
    const something = await assistirAlguemFazendoAlgumaCoisa()
    return something + '\n e Eu também vi você vendo ele fazendo'
  }
  
  AssistirAlguemAssistindoAlguemFazendoAlgumaCoisa().then(res => {
    console.log(res)
  })