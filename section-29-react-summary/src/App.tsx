import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <div className='App'>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup' exact>
            <NewMeetupPage />
          </Route>
          <Route path='/favourites' exact>
            <FavouritesPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App;
