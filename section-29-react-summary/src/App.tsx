import React from 'react';
import './App.scss';
import Todo from './components/Todo';

const App = () => {
  return (
    <div className='App'>
      <h1>My Todos</h1>
      <Todo title={'Learn React'} />
      <Todo title={'Master React'} />
      <Todo title={'Explore the full React course'} />
    </div>
  )
}

export default App;
