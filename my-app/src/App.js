import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import Home from './views/Home';
import ProjectPage from './views/ProjectPage';

import MyCite from './views/MyCite';
import Traverse from './views/Traverse';
import YbvrWhiteLabel from './views/YbvrWhiteLabel';
import YbvrBrand from './views/YbvrBrand';
import Amma from './views/Amma';

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
              <ProjectPage project='mycite'>
                <MyCite />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/ybvr_white_label' render={() => (
            <div className="App">
              <ProjectPage project='ybvr_white_label'>
                <YbvrWhiteLabel />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/ybvr_brand' render={() => (
            <div className="App">
              <ProjectPage project='ybvr_brand'>
                <YbvrBrand />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/traverse' render={() => (
            <div className="App">
              <ProjectPage project='traverse'>
                <Traverse />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/amma' render={() => (
            <div className="App">
              <ProjectPage project='amma'>
                <Amma />
              </ProjectPage>
            </div>
          )}/>
        </div>
      </HashRouter>
    );
  }
}
export default App;
