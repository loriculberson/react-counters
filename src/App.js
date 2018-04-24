import React, { Component } from 'react';
import CounterApp from './CounterApp.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <CounterApp />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
