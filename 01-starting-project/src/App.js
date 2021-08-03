import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';


function App() {
  const { isAuthenticated } = useSelector(state => state.auth);
  return (
    <Fragment>
      {isAuthenticated ? (<>
        <Header />
        <Counter />
      </>) : <Auth></Auth>}

    </Fragment>
  );
}

export default App;
