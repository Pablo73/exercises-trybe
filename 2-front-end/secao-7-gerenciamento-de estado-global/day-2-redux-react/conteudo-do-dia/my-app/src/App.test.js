import { Router } from 'react-router-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import counterReducer from './redux/reducers/counterReducer';
import App from './App';
import userEvent from '@testing-library/user-event';
import { reducer } from './redux/reducers/reducer'

const renderWithRedux = (
  component,
  {
    initialState,
    store = createStore( 
      reducer,
      initialState,
      applyMiddleware(thunk)
      ),
  } = {}
) => ({
  ...render(<Provider store={store}>{component}</Provider>),
  store,
});

test('O número renderizado na página deve ser o mesmo valor do estado global', () => {
    const initialState = {
      counterReducer: {
        count: 10,
      }
    }
    renderWithRedux(<App />, { initialState });
  
    expect(screen.queryByText('0')).not.toBeInTheDocument();
    expect(screen.getByText('10')).toBeInTheDocument();
  });

  describe('Verificar se ao apertar o botaõ imcrementa o valor certo', () => {
    test('Com o valor padrão do reducer, os botões devem incrementar os valores corretamente', () => {
      renderWithRedux(<App />);

      const buttons = screen.queryAllByRole('button');
    expect(buttons.length).toBe(2);

    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(buttons[0]);
    expect(screen.getByText('1')).toBeInTheDocument();

    userEvent.click(buttons[1]);
    expect(screen.getByText('6')).toBeInTheDocument();

    })
  })

  test('Incrementa o valor da store ao clicar no botão', () => {
    const { store } = renderWithRedux(<App />);

    expect(screen.getByText('0')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(0);

    const button = screen.getByText('Incrementa 1');
    userEvent.click(button);

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(store.getState().counterReducer.count).toBe(1);
  });
