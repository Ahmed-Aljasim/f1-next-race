import React, { Component } from 'react';
import Main from './components/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="main">
          <div className="inner">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
