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
import Catalog from './Catalog';


class App extends Component {


  render() {
    return (
      <div id="App" className="App">
        <div>
          <TopComponent />
        </div>

        <div className='Main1'>
          <div>
      
              <button>주문하기</button>
  
          </div>
          <Router>
            <Catalog />
          </Router>
        </div>

        <div>
          <BottomComponent />
        </div>
      </div>
    );
  }
}



export default App;
