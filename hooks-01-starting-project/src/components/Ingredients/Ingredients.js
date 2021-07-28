import React, { useEffect, useState, useCallback, useMemo, useReducer } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import ErrorModal from '../UI/ErrorModal';
import useHttp from '../../hooks/httphook';
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


const Ingredients = () => {

  const [ingredients, ingredientDispatch] = useReducer(ingredientReducer, []);
  const { isLoading, error, data, config, sendRequest, clearAll } = useHttp();
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [filteredIngredients, setFilteredIngredients] = useState([]);

  useEffect(() => {
    if (!!data || !!config) {
      console.warn('data: ', data, 'config: ', config);
      switch (config.request) {
        case 'get':
          const loadedIngredients = [];
          Object.keys(data || []).forEach((key) => {
            loadedIngredients.push({
              id: key,
              title: data[key].title,
              amount: data[key].amount,
            })
          });
          ingredientDispatch({ type: SET_TYPE, ingredients: loadedIngredients })
          break;
        case 'post':
          ingredientDispatch({ type: ADD_TYPE, ingredient: {id: data.name, ...config.ingredient}})
          break;
        case 'delete':
          ingredientDispatch({ type: DELETE_TYPE, id: config.id })
          break;
        default:
          break;
      }
    }
  }, [data, config])

  useEffect(() => {
    sendRequest('https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients.json', 'get');
  }, [sendRequest]); // Similair to componentDidMount in react component classes

  const addIngredientHandler = useCallback(ingredient => {
    sendRequest('https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients.json', 'post', ingredient, {ingredient: ingredient});
  }, [sendRequest]);

  const handleFilterIngredients = useCallback((filter) => {
    console.warn("Handle filter ingredients: ", filter, ingredients);
    setFilteredIngredients([...ingredients].filter((i) => i.title.toLowerCase().indexOf(filter.toLowerCase()) > -1));
  }, [ingredients])

  const removeIngredientHandler = useCallback(id => {
    // `https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients/${id}.json`
    // ingredientDispatch({ type: DELETE_TYPE, id: id })
    sendRequest(`https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients/${id}.json`,
      'delete',
      null,
      { id: id });
  }, [sendRequest]);

  const ingredientList = useMemo(() => {
    return (<IngredientList ingredients={filteredIngredients} onRemoveItem={removeIngredientHandler} />)
  }, [filteredIngredients, removeIngredientHandler]);

  const errors = useMemo(() => {
    return (error && <ErrorModal onClose={clearAll}>{error}</ErrorModal>)
  }, [error, clearAll]);
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
