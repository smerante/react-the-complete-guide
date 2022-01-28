import React, { useEffect } from 'react';
import AddColorBG from './components/HigherOrderCompTest';
import './App.scss';
import PureComponentTest from './components/PureCompTest';
import PureFunctionalCompTest from './components/PureFunctionalTest';
import ForwardRefTest, { HOCForwardRefTest } from './components/ForwardRefCompTest';

class HOCTestComp extends React.Component {
  constructor(props: any) {
    super(props);
  }
  render() {
    return <><p>This is going to be wrapped in a background color HOC test comp</p></>
  }
}

const Child3 = React.forwardRef((props: any, ref3: any) => {
  return <>
    <p ref={ref3}>
      Child 3 nested ref
    </p>
  </>
});
const Child2 =(props: {forwardedRef2: any}) => {
  return <>
    <Child3 ref={props.forwardedRef2}></Child3>
  </>
};
const Child1 =(props: {forwardedRef: any}) => {
  return <>
    <Child2 forwardedRef2={props.forwardedRef}></Child2>
  </>
};

function App() {
  const name = "Sam";

  const buttonRef = React.createRef();
  const ref = React.createRef();
  const nestedRef = React.createRef();
  const RedBGComp = AddColorBG(HOCTestComp, 'red');

  const hocForwarRef = HOCForwardRefTest(ForwardRefTest, { test: 'hi', hello: 'world', forwardedRef: ref });

  useEffect(()=>{
    console.warn('nestedRef: ', nestedRef);
  },[nestedRef])

  return (
    <div className="App">
      {hocForwarRef}
      <Child1 forwardedRef={nestedRef}></Child1>
      <ForwardRefTest ref={buttonRef} />
      <PureComponentTest name={name} />
      <PureFunctionalCompTest hello={'prop'}>
        <p>Child Component</p>
      </PureFunctionalCompTest>

      {RedBGComp}
    </div>
  );
}

export default App;
