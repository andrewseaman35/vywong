import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import createBrowserHistory from 'history/createBrowserHistory';

import Home from './views/Home';
import Page from './views/Page';
import ProjectPage from './views/ProjectPage';

import MyCite from './views/MyCite';
import Traverse from './views/Traverse';
import YbvrWhiteLabel from './views/YbvrWhiteLabel';
import Amma from './views/Amma';
import Other from './views/Other';

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
            <div className="App home">
              <Home />
            </div>
          )}/>
          <Route exact={true} path='/mycite' render={changePage.bind(null,
            <div className="App">
              <Page project='mycite'>
                <MyCite />
              </Page>
            </div>
          )}/>
          <Route exact={true} path='/ybvr_white_label' render={changePage.bind(null,
            <div className="App">
              <Page project='ybvr_white_label'>
                <YbvrWhiteLabel />
              </Page>
            </div>
          )}/>
          <Route exact={true} path='/traverse' render={changePage.bind(null,
            <div className="App">
              <Page project='traverse'>
                <Traverse />
              </Page>
            </div>
          )}/>
          <Route exact={true} path='/amma' render={changePage.bind(null,
            <div className="App">
              <Page project='amma'>
                <Amma />
              </Page>
            </div>
          )}/>
          <Route exact={true} path='/other' render={changePage.bind(null,
            <div className="App">
              <ProjectPage project='other'>
                <Other />
              </ProjectPage>
            </div>
          )}/>
        </div>
      </HashRouter>
    );
  }
}
export default App;
