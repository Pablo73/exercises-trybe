import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import gameOfThunksReducer from './reducers/gameOfThunksReducer';

const store = createStore(
  gameOfThunksReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
