import React from 'react';
import AddColorBG from './components/HigherOrderCompTest';
import './App.scss';
import PureComponentTest from './components/PureCompTest';
import PureFunctionalCompTest from './components/PureFunctionalTest';

class HOCTestComp extends React.Component {
  constructor(props: any) {
    super(props);
  }


  render() {
    return <><p>This is going to be wrapped in a background color HOC test comp</p></>
  }
}

function App() {
  const name = "Sam";

  const RedBGComp = AddColorBG(HOCTestComp,'red');
  return (
    <div className="App">
      <PureComponentTest name={name} />
      <PureFunctionalCompTest hello={'prop'}>
        <p>Child Component</p>
      </PureFunctionalCompTest>

      {RedBGComp}
    </div>
  );
}

export default App;
