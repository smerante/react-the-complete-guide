import React, { useEffect, useState, useCallback } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';
import axios from 'axios';
import ErrorModal from '../UI/ErrorModal';
const Ingredients = () => {

  const [ingredients, setIngredients] = useState([]);
  const [filteredIngredients, setFilteredIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.warn("Render : ", ingredients);
  })

  // gets called after and for every render cycle
  useEffect(() => {
    setIsLoading(true);
    axios.get('https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients.json')
      .then((res) => {
        console.warn("got ingredients : ", res);
        const loadedIngredients = [];
        Object.keys(res.data).forEach((key) => {
          loadedIngredients.push({
            id: key,
            title: res.data[key].title,
            amount: res.data[key].amount,
          })
        });
        setIngredients(loadedIngredients);
        setFilteredIngredients(loadedIngredients);
        setIsLoading(false);
      })
  }, []); // Similair to componentDidMount in react component classes

  const addIngredientHandler = ingredient => {
    setIsLoading(true);
    axios.post('https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients.json', ingredient)
      .then(
        (res) => {
          console.warn("Post success :", res);
          const newIng = {
            id: res.data.name,
            ...ingredient
          };
          console.warn("Add ingredient: ", newIng);
          setIngredients((state) =>
            [
              ...state,
              newIng
            ]
          );
          setFilteredIngredients((state) =>
            [
              ...state,
              newIng
            ]
          );
          setIsLoading(false);
        }
      )
      .catch(err => console.warn("add ingredient request failed: ", err));
  };

  const handleFilterIngredients = useCallback((filter) => {
    console.warn("Handle filter ingredients: ", filter, ingredients);
    setFilteredIngredients([...ingredients].filter((i) => i.title.toLowerCase().indexOf(filter.toLowerCase()) > -1));
  }, [ingredients])

  const removeIngredientHandler = id => {
    console.warn("Remove ingredient: ", id, " : ", (ingredients.filter((i) => i.id !== id)));
    setIsLoading(true);
    axios.delete(`https://react-hooks-update-5ab13-default-rtdb.firebaseio.com/ingredients/${id}.jon`)
      .then((res) => {
        console.warn('Successful delete: ', res);
        setIngredients(prevIngredients => prevIngredients.filter((i) => i.id !== id));
        setIsLoading(false);
      })
      .catch((err) => {
        setError(`Error deleting ingredient, message: ${err}`);
        setIsLoading(false);
      });
  }

  return (
    <div className="App">
      error: {error}
      {error && <ErrorModal onClose={() => setError(null)}>{error}</ErrorModal>}

      <IngredientForm onAddIngredient={addIngredientHandler} loading={isLoading} />

      <section>
        <Search onFilterIngredients={handleFilterIngredients} />
        <IngredientList ingredients={filteredIngredients} onRemoveItem={removeIngredientHandler} />
      </section>
    </div>
  );
}

export default Ingredients;
