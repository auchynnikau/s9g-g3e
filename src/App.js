import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavbarComponent, SightInfo } from './components';
import { Landing } from './pages';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Switch>
        <Route exact path='/' component={ Landing } />
        <Route exact path='/sights' component={ Dashboard } />
        <Route path='/sights/:id' component={ SightInfo } />
      </Switch>
    </BrowserRouter>
  );
}
