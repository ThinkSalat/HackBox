import React, { Component } from 'react';
import logo from './logo.svg';
import Welcome from './components/welcome';

import { Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to HackBox</h1>
        </header>

        <Switch>
          <Route path="/" component={Welcome} />
        </Switch>

      </div>
    );
  }
}

export default App;
