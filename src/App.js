import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import Subscribe from "./components/Subscribe";
import CurrentLocation from "./components/CurrentLocation";
import React, { Component } from 'react';
import GetLoaction from './components/GetLoaction';
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <GetLoaction />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/subscribe">
          <Subscribe />
        </Route>
        <Route path="/current-location">
          <CurrentLocation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
