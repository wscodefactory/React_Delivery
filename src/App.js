import React, { Component } from 'react';
import './App.css';
import TopComponent from './topComponent';
import BottomComponent from './bottomComponent';
import MainComponent from './mainComponent';
import PopupMain from './pop_up/popUpMain';
import Modal from 'react-modal'; // react-modal 임포트 추가
import { BrowserRouter as Router } from 'react-router-dom';

// Modal.setAppElement('#root'); // 필수 설정 제거 (create-react-app에서는 필요 없음)

class App extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    return (
      <div id="App" className="App">
        <div>
          <TopComponent />
        </div>

        <div className="Main1">
          <div>
            <button onClick={this.openModal}>주문하기</button>
          </div>
          <Router>
            <MainComponent />
          </Router>
        </div>

        <div>
          <BottomComponent />
        </div>

          <Modal
            isOpen={this.state.isModalOpen}
            onRequestClose={this.closeModal}
            contentLabel="주문"
            style={{
              content: {
                width: '600px',
                height: '400px',
                margin: 'auto',
              },
            }}
          >
            <PopupMain />
            <br></br>
            &nbsp;
            <button>주문하기</button>
            &nbsp; &nbsp; &nbsp; 
            <button onClick={this.closeModal}>뒤로가기</button>
          </Modal>
      </div>
    );
  }
}

export default App;




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

/*
import React, { Component } from 'react';
import './App.css';
import TopComponent from './TopComponent';
import BottomComponent from './BottomComponent';
import MainComponent from './MainComponent';
import { BrowserRouter as Router} from 'react-router-dom';


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
            <MainComponent />
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
*/