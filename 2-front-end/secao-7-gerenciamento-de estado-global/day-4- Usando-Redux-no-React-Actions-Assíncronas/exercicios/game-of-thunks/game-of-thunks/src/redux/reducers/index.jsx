import { combineReducers } from 'redux';
import gameOfThunksReducer from './gameOfThunksReducer';

const rootReducer = combineReducers({
    gameOfThunksReducer,
});

export default rootReducer;