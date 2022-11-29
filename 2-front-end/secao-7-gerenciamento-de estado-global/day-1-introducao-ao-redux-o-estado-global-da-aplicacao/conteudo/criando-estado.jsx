// Criando a nossa store:
const store = createStore(reducer);

//--------------------------------------------------------------------------------------

// Criando uma função Reducer
const reducer = (state, action) => state

//--------------------------------------------------------------------------------------------

// Action para Incrementar nosso contador:
const action = {
    type: 'INCREMENT_COUNTER'
  };

//-----------------------------------------------------------------------------------------

  //Para enviar uma action para o reducer é necessário passá-la como argumento para a função dispatch().
  dispatch({type: 'INCREMENT_COUNTER'});

//-----------------------------------------------------------------------------------------------

  //Para ler o estado global, o objeto store disponibiliza a função getState(). Essa função retorna o estado global:
  const state = store.getState()

//-----------------------------------------------------------------------------------------------------

//  Geralmente iremos precisar fazer ações quando o estado global é atualizado. Por exemplo, toda a vez que o contador é incrementado, precisaremos renderizar o novo valor do estado na tela.
// Para isso, o objeto store também disponibiliza a função subscribe(). Essa função recebe um callback que irá ser chamado toda vez que o estado global sofrer alterações:

store.subscribe(() => {
    console.log(`O novo estado global é ${store.getState()}`)
})

//------------------------------------------------------------------------------------------------------------------

// Apesar do deprecation warning, o createStore não está deprecado e não há planos de retirada dessa API da biblioteca. De 
// forma opcional, se você preferir remover esse warning, basta inserir essa linha na importação:

import { legacy_createStore as createStore } from 'redux';
