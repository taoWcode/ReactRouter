import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RouterPage1 from './pages/Router_1.js';
import RouterPage2 from './pages/Router_2.js';
class App extends Component {
  render() {
    return (
      <div className="App">
          <RouterPage1/>
          <p>***************</p>
          <RouterPage2/>
      </div>
    );
  }
}

export default App;
