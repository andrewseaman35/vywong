import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './views/Home';
import ProjectPage from './views/ProjectPage';
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
          <Route exact={true} path='/mycite' render={() => (
            <div className="App">
              <ProjectPage project='mycite'/>
            </div>
          )}/>
          <Route exact={true} path='/ybvr_white_label' render={() => (
            <div className="App">
              <ProjectPage project='ybvr_white_label'/>
            </div>
          )}/>
        </div>
      </HashRouter>
    );
  }
}
export default App;
