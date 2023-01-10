import {
  REQUEST_STARTED,
  REQUEST_SUCCESSFUL,
  REQUEST_FAILED,
} from "../actions";

const INITIAL_STATE = {
  name: '',
  culture: '',
  aliases: [],
  errorMessage: null,
  isLoading: false,
};

const gameOfThunksReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_STARTED: {
      return {
        ...state,
        isLoading: true,
      }
    }
    case REQUEST_SUCCESSFUL: {
      return {
        ...state,
        isLoading: false,
        name: action.payload.name,
        culture: action.payload.culture,
        aliases: action.payload.aliases,
      }
    }
    case REQUEST_FAILED: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error.message || 'Erro'
      }
    }
  default: return state;
  }
};

export default gameOfThunksReducer;