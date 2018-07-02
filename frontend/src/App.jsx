import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Welcome from './components/welcome';
import Lobby from './components/lobby';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"> <span id='hack'>Hack</span> <span id='box'>Box</span></h1>
        </header>

        <Switch>
          <Route path="/room/:code" component={Lobby} />
          <Route path="/" component={Welcome} />
        </Switch>

      </div>
    );
  }
}

export default App;
