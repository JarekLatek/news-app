import './Main.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import FilmNews from './FilmNews';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/film">
        <FilmNews />
      </Route>
    </Switch>
  </main>
);

export default Main;