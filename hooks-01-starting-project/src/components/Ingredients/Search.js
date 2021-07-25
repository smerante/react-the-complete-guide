import React, { useEffect, useState, useRef } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {

  const [filter, setFilter] = useState('');
  const { onFilterIngredients } = props;
  const inputFilterRef = useRef();

  const handleChange = ($event) => {
    setFilter($event.target.value);
  }

  useEffect(() => {
    const filterTimer = setTimeout(() => {
      if (filter === inputFilterRef.current.value) {
        onFilterIngredients(filter);
      }
    }, 500);

    // Cleanup function runs before the next time useEffect runs, if it's [] it will be executed on componentUnmount
    return () => {
      clearTimeout(filterTimer);
    };
  }, [filter, onFilterIngredients, inputFilterRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            ref={inputFilterRef}
            type="text"
            value={filter}
            onChange={handleChange} />
        </div>
      </Card>
    </section>
  );
});

export default Search;
