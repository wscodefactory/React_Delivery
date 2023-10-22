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
import React from 'react';
import './App.css';
import TopComponent from './TopComponent';
import BottomComponent from './BottomComponent';
import MainComponent from './MainComponent';

function App() {
  return(
    <div className="App">
      <TopComponent />
      <hr className="hr1"></hr>
      <MainComponent />
      <BottomComponent />

    </div>
  );
}

export default App;