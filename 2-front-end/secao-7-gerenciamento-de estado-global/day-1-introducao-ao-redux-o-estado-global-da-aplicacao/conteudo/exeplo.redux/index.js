import { legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';

// 1. Criando o Reducer com Estado Inicial
const INITIAL_STATE = { count: 0 };

const reducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return { count: state.count + 1 };
  }
  return state;
};

// 2. Criando a Store já com Redux Devtools
const store = createStore(reducer, composeWithDevTools());

// 3. Criando a Action
const action = { type: 'INCREMENT_COUNTER' };

// 4. Disparando a Action
const buttonEl = document.querySelector('button');
buttonEl.addEventListener('click', () => store.dispatch(action));

// 5. Lendo do Estado global
store.subscribe(() => {
  const globalState = store.getState();

  const countEl = document.querySelector('h2');
  countEl.innerHTML = globalState.count;

  console.log('Estado atualizado !');
});
