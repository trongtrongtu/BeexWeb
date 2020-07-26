import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Compoment/Home/Home'
import Solution from './Compoment/Solution/Solution';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home />
        <br />
        <br />
        <br />
        <Switch>
          <Route path="/solution" component={Solution} />
        </Switch>
      </React.Fragment>
    );
  }
}