import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';

const App = () => {
  return (
    <div className='App'>
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
    </div>
  )
}

export default App;
