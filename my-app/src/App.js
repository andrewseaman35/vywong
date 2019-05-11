import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './views/Home';
import ProjectPage from './views/ProjectPage';
import './App.css';

ReactGA.initialize('UA-130632736-4');

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
          <Route exact={true} path='/ybvr_brand' render={() => (
            <div className="App">
              <ProjectPage project='ybvr_brand'/>
            </div>
          )}/>
          <Route exact={true} path='/traverse' render={() => (
            <div className="App">
              <ProjectPage project='traverse'/>
            </div>
          )}/>
          <Route exact={true} path='/amma' render={() => (
            <div className="App">
              <ProjectPage project='amma'/>
            </div>
          )}/>
        </div>
      </HashRouter>
    );
  }
}
export default App;
