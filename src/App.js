/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import React, { Component } from 'react';
import './App.css';
import TopComponent from './TopComponent';
import BottomComponent from './BottomComponent';
import MainComponent from './MainComponent';
import { BrowserRouter as Router } from 'react-router-dom';
import Order from './Order';


class  App extends Component  {
  render(){
    return (
      // <div className="App">
      //   <TopComponent />
      //   <hr className="hr1" />
      //   <Router>
      //   <MainComponent />
      //   </Router>
      //   <BottomComponent />
      // </div>
      <Order />
    );
  }
}

export default App;