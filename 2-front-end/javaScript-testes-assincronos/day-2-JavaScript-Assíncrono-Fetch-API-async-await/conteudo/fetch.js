const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  console.log(fetch(url));
}

fetchJoke();



const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value));
}

fetchJoke();


// Vamos ver o que acontece no código acima. A função fetchJoke chama o fetch, que é executado e, após sua execução, 
// caso a requisição seja bem-sucedida, retorna para o parâmetro da função do primeiro .then() uma resposta, e na sua 
// execução iremos pegar a versão JSON dessa resposta por meio da função .json(). Note que a função .json() também é 
// assíncrona, por isso temos o segundo .then() que, por sua vez, vai pegar o JSON vindo do primeiro .then() e dentro 
// dele acessar o elogio que está armazenado no campo value para mostrar no console.

// -------------------------------------------------------------------------------------

// Ok, mas e se der erro em alguma requisição? O que você pode fazer em relação a isso? Agora 
// é o momento que entra o .catch()! Vamos adicioná-lo ao código:

const fetch = require('node-fetch');

const fetchJoke = () => {
  const url = 'api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Algo deu errado :( 
// TypeError: Only absolute URLs are supported

//----------------------------------------------------------------------------------------------------

// O async é bastante útil! Para começar a usá-lo, basta colocar o async antes da definição de uma 
// função. Vamos refatorar a função anterior para usar async:

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data.value))
    .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

//--------------------------------------------------------------------------------------------------------------

// Temos duas maneiras de utilizar o async await. A primeira é mesclando com o .then() e o .catch():

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  const result = await fetch(url)
    .then((response) => response.json())
    .then((data) => data.value)
    .catch((error) => `Algo deu errado :( \n${error}`);
  
  console.log(result);
};

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

//Usando o await , a fetchJoke espera o fetch terminar toda a sua execução (até o último .then() 
// ou .catch()) para só depois executar o console.log().


//-------------------------------------------------------------------------------------------------------------------

// A segunda é refatorando o .then() e o .catch() usando o try e o catch:

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.value);
  } catch(error) {
    console.log(`Algo deu errado :( \n${error}`);
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.

