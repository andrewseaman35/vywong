import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import logo from './logo.svg';
import Home from './views/Home';
import Page from './views/Page';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}
export default App;
