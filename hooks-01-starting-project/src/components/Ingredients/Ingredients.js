import React, { useEffect, useState, useCallback, useMemo, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import axios from 'axios';
import ErrorModal from '../UI/ErrorModal';

const SET_TYPE = 'SET';
const ADD_TYPE = 'ADD';
const DELETE_TYPE = 'DELETE';

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case SET_TYPE:
      return action.ingredients;
    case ADD_TYPE:
      return [...currentIngredients, action.ingredient];
    case DELETE_TYPE:
      return currentIngredients.filter((i) => i.id !== action.id);
    default:
      throw new Error('No Action type defined for default');
  }
}

const SEND_TYPE = 'SEND';
const RESPONSE_TYPE = 'RESPONSE';
const ERROR_TYPE = 'ERROR';
const CLEAR_TYPE = 'ERROR';
const httpReducer = (httpPrevState, action) => {
  switch (action.type) {
    case SEND_TYPE:
      return { isLoading: true, error: null };
    case RESPONSE_TYPE:
      return { ...httpPrevState, isLoading: false };
    case ERROR_TYPE:
      return { error: JSON.stringify(action.error), isLoading: false };
    case CLEAR_TYPE:
      return { error: null, isLoading: false };
    default:
      throw new Error('No Action type defined for default');
  }
}

const Ingredients = () => {

  const [ingredients, ingredientDispatch] = useReducer(ingredientReducer, []);
  const [{ isLoading, error }, httpStateDispatch] = useReducer(httpReducer, { isLoading: false, error: false });

  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [filteredIngredients, setFilteredIngredients] = useState([]);

  useEffect(() => {
    console.warn("Render : ", ingredients);
  })

  // gets called after and for every render cycle
  useEffect(() => {
    httpStateDispatch({ type: SEND_TYPE });
    axios.get('https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients.json')
      .then((res) => {
        console.warn("got ingredients : ", res);
        const loadedIngredients = [];
        if (!!res.data) {
          Object.keys(res.data).forEach((key) => {
            loadedIngredients.push({
              id: key,
              title: res.data[key].title,
              amount: res.data[key].amount,
            })
          });
        }
        ingredientDispatch({ type: SET_TYPE, ingredients: loadedIngredients })
        setFilteredIngredients(loadedIngredients);
        httpStateDispatch({ type: RESPONSE_TYPE });

      })
      .catch((err) => httpStateDispatch({ type: ERROR_TYPE, error: err.message }))
  }, []); // Similair to componentDidMount in react component classes

  const addIngredientHandler = useCallback(ingredient => {
    // setIsLoading(true);
    httpStateDispatch({ type: SEND_TYPE });

    axios.post('https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients.json', ingredient)
      .then(
        (res) => {
          console.warn("Post success :", res);
          const newIng = {
            id: res.data.name,
            ...ingredient
          };
          console.warn("Add ingredient: ", newIng);
          ingredientDispatch({ type: ADD_TYPE, ingredient: newIng })

          setFilteredIngredients((state) =>
            [
              ...state,
              newIng
            ]
          );
          // setIsLoading(false);
          httpStateDispatch({ type: RESPONSE_TYPE });
        }
      )
      .catch(err => httpStateDispatch({ type: ERROR_TYPE, error: err.message }));
  }, []);

  const handleFilterIngredients = useCallback((filter) => {
    console.warn("Handle filter ingredients: ", filter, ingredients);
    setFilteredIngredients([...ingredients].filter((i) => i.title.toLowerCase().indexOf(filter.toLowerCase()) > -1));
  }, [ingredients])

  const removeIngredientHandler = useCallback(id => {
    // setIsLoading(true);
    httpStateDispatch({ type: SEND_TYPE });
    axios.delete(`https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients/${id}.json`)
      .then((res) => {
        console.warn('Successful delete: ', res);
        ingredientDispatch({ type: DELETE_TYPE, id: id })

        // setIsLoading(false);
        httpStateDispatch({ type: RESPONSE_TYPE });

      })
      .catch((err) => {
        // setError(`Error deleting ingredient, message: ${err}`);
        // setIsLoading(false);
        httpStateDispatch({ type: ERROR_TYPE, error: err.message });

      });
  }, []);

  const ingredientList = useMemo(() => {
    return (<IngredientList ingredients={filteredIngredients} onRemoveItem={removeIngredientHandler} />)
  }, [filteredIngredients, removeIngredientHandler]);

  const errors = useMemo(() => {
    return (error && <ErrorModal onClose={() => httpStateDispatch({ type: CLEAR_TYPE })}>{error}</ErrorModal>)
  }, [error]);
  return (
    <div className="App">

      {errors}
      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />
      <section>
        <Search onFilterIngredients={handleFilterIngredients} />
        {ingredientList}
      </section>
    </div>
  );
}

export default Ingredients;
