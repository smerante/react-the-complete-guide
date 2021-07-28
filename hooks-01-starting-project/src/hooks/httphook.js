import { useReducer, useCallback } from 'react';
import axios from 'axios';
const INITIAL_STATE = { error: null, isLoading: false, data: null, config: null };
const SEND_TYPE = 'SEND';
const RESPONSE_TYPE = 'RESPONSE';
const ERROR_TYPE = 'ERROR';
const CLEAR_TYPE = 'ERROR';
const httpReducer = (httpPrevState, action) => {
  switch (action.type) {
    case SEND_TYPE:
      return { isLoading: true, error: null, data: null, config: action.config };
    case RESPONSE_TYPE:
      return { ...httpPrevState, isLoading: false, data: action.data, config: action.config };
    case ERROR_TYPE:
      return { error: JSON.stringify(action.error), isLoading: false, data: null, config: null };
    case CLEAR_TYPE:
      return INITIAL_STATE;
    default:
      throw new Error('No Action type defined for default');
  }
}

// Gets called every re-render cycle
const useHttp = () => {
  const [{ isLoading, error, data, config }, httpStateDispatch] = useReducer(httpReducer, INITIAL_STATE);


  const sendRequest = useCallback((url, method, body, extraConfig) => {
    // setIsLoading(true);
    console.warn('url: ', url, 'method: ', method, 'body: ', body, 'extraConfig: ', extraConfig)
    httpStateDispatch({ type: SEND_TYPE });
    axios.request({
      method: method,
      url: url,
      data: body
    }).then((res) => {
      console.warn(`Successful ${method}: `, res);

      // setIsLoading(false);
      httpStateDispatch({ type: RESPONSE_TYPE, data: res.data, config: { ...extraConfig, request: method } });

    })
      .catch((err) => {
        // setError(`Error deleting ingredient, message: ${err}`);
        // setIsLoading(false);
        httpStateDispatch({ type: ERROR_TYPE, error: err.message });
      })
  }, []);

  const clearAll = useCallback(() => {
    httpStateDispatch({ type: CLEAR_TYPE });
  }, [])

  return {
    isLoading: isLoading,
    error: error,
    data: data,
    config: config,
    sendRequest,
    clearAll
  }
};

export default useHttp;