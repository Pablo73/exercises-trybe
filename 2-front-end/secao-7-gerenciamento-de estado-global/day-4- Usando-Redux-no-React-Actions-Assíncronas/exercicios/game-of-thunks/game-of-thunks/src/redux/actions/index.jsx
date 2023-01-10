import getCurrentImg from '../../services/imgApi';

export const REQUEST_STARTED = 'REQUEST_STARTED';
export const REQUEST_SUCCESSFUL = 'REQUEST_SUCCESSFUL';
export const REQUEST_FAILED = 'REQUEST_FAILED';


const requestStarted = () => {
    return { type: REQUEST_STARTED };
  }
  
const requestSuccessful = (value) => {
  console.log(value[0].aliases)
  return {
    type: REQUEST_SUCCESSFUL,
    payload: {
      name: value[0].name,
      culture: value[0].culture,
      aliases: value[0].aliases,
    }
  };
}
  
const requestFailed = (error) => {
  return {
    type: REQUEST_FAILED,
    payload: error,
  };
}

export const fetchImagen = (name) => {
  return async (dispatch) => {
    // 1 Avisar que o fetch vai começar
    dispatch(requestStarted());
    try {
      // 2 Fazer a requisição
      const response = await getCurrentImg(name);

      // 3.1 Avisar que a requisição foi um sucesso, e entregar a resposta
      dispatch(requestSuccessful(response));
    } catch (error) {
      // 3.2 Avisar que a requisição foi uma falha
      dispatch(requestFailed(error))
    }
    
  }
  
};
