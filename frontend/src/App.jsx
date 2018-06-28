import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import Welcome from './components/welcome';
import Lobby from './components/lobby';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HackBox</h1>
        </header>
        <br/>
        <div>
          <Route exact path='/' component={Welcome} />
          <Route path='/room/:code' component={Lobby} />
        </div>
      </div>
    );
  }
}

export default App;
