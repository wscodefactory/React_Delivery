import React, { Component } from 'react';
import './App.css';
import TopComponent from './TopComponent';
import MainComponent from './MainComponent';
import PopupMain from './pop_up/PopUpMain';
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
            <button className="button1" onClick={this.openModal}>주문하기</button>
          </div>
          <Router>
            <MainComponent />
          </Router>
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


