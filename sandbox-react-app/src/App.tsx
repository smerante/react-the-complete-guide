import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import PureComponentTest from './components/PureCompTest';
import PureFunctionalCompTest from './components/PureFunctionalTest';

function App() {
  const name = "Sam";
  return (
    <div className="App">
      <PureComponentTest name={name} />
      <PureFunctionalCompTest hello={'prop'}>
        <p>Child Component</p>
      </PureFunctionalCompTest>
    </div>
  );
}

export default App;
