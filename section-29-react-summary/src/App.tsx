import React from 'react';
import './App.scss';
import AreYouSureModal from './components/AreYouSureModal';
import Todo from './components/Todo';
import Backdrop from './components/Backdrop';

const App = () => {
  return (
    <div className='App'>
      <h1>My Todos</h1>
      <Todo title={'Learn React'} />
      <Todo title={'Master React'} />
      <Todo title={'Explore the full React course'} />
      <AreYouSureModal/>
      <Backdrop/>
    </div>
  )
}

export default App;
