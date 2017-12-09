import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Import Components
import HomePage from './components/HomePage/HomePage';
import Favorites from './components/Favorites/Favorites';
import Detailed from './components/Detailed/Detailed';

export default(
  <BrowserRouter>
    <div>
      <Route component= { HomePage } exact path= '/' />
      <Route component= { Favorites } path= '/favorites' />
      <Route component= { Detailed } path= '/detailed/:coin/:id' />
    </div>
  </BrowserRouter>
)
