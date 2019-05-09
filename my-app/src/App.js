import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import Page from './views/Page';
import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/page' render={() => (
            <div className="App">
              <Page />
            </div>
          )}/>
        </div>
      </HashRouter>
    );
  }
}
export default App;
