import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './views/Home';
import ProjectPage from './views/ProjectPage';

import MyCite from './views/MyCite';
import Traverse from './views/Traverse';
import YbvrWhiteLabel from './views/YbvrWhiteLabel';
import YbvrBrand from './views/YbvrBrand';
import Amma from './views/Amma';
import Other from './views/Other';
import About from './views/About';

import './App.css';

ReactGA.initialize('UA-130632736-4');

var history = createBrowserHistory();
history.listen(function(location) {
  const path = location.pathname + location.hash + location.search;
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
});


function changePage(content) {
    window.scrollTo(0, 0);
    return content;
}

class App extends Component {
  render() {
    return (
      <HashRouter history={history}>
        <div>
          <Route exact={true} path='/' render={changePage.bind(null,
            <div className="App">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/mycite' render={changePage.bind(null,
            <div className="App">
              <ProjectPage project='mycite'>
                <MyCite />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/ybvr_white_label' render={changePage.bind(null,
            <div className="App">
              <ProjectPage project='ybvr_white_label'>
                <YbvrWhiteLabel />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/ybvr_brand' render={changePage.bind(null,
            <div className="App">
              <ProjectPage project='ybvr_brand'>
                <YbvrBrand />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/traverse' render={changePage.bind(null,
            <div className="App">
              <ProjectPage project='traverse'>
                <Traverse />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/amma' render={changePage.bind(null,
            <div className="App">
              <ProjectPage project='amma'>
                <Amma />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/other' render={changePage.bind(null,
            <div className="App">
              <ProjectPage project='other'>
                <Other />
              </ProjectPage>
            </div>
          )}/>
          <Route exact={true} path='/about' render={changePage.bind(null,
            <div className="App">
                <About />
            </div>
          )}/>
        </div>
      </HashRouter>
    );
  }
}
export default App;
