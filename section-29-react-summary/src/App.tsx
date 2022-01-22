import React, { useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.scss';

const App = () => {
  const pTagRef = useRef(null);

  useEffect(() => {
    console.warn("Call back: ", pTagRef.current);
    if(pTagRef.current)
     (pTagRef.current as HTMLElement).innerHTML = "Hello, World!";
    return () => {
      // Cleanup function here
      console.warn("Cleanup effect");
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          ref={pTagRef}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
