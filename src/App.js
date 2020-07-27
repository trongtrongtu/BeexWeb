import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Compoment/Home/Home'
import Solution from './Compoment/Solution/BeexIotPlatform';
import Header from './Compoment/Header/Header';
import Footer from './Compoment/Footer/Footer';
import BeexIotPlatformDetail from './Compoment/Detail/BeexIotPlatformDetail';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/BeexIotPlatform" component={Solution} />
          <Route path="/Detail" component={BeexIotPlatformDetail} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}