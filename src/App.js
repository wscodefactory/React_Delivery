import React, { Component } from 'react';
import './App.css';
import TopComponent from './TopComponent';
import MainComponent from './MainComponent';
import Modal from 'react-modal'; // react-modal 임포트 추가
import { BrowserRouter as Router } from 'react-router-dom';
import Button from "@mui/material/Button";
import Typeofalcohol from './pop_up/TypeOfAlcohol'
import Quantityofalcohol from './pop_up/QuantityOfAlcohol'
import Inputphonenumber from './pop_up/InputPhoneNumber'
import Inputadress from './pop_up/InputAdress'
import Inputname from './pop_up/InputName'
import InputPhoneNumber from './pop_up/InputPhoneNumber';

// Modal.setAppElement('#root'); // 필수 설정 제거 (create-react-app에서는 필요 없음)

const databaseURL = "https://givemesoju-d9d80-default-rtdb.asia-southeast1.firebasedatabase.app"

class App extends Component {
  constructor() {
    super();

    this.state = {
      isModalOpen: false,
      order: {},
      dialog: false,
      phone_number: '',
      alcohol_number: '',
      alcohol_type: '',
      location: '',
      name: '',
      price: '',
    };
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  _post(order) {  // 추가하기
    return fetch(`${databaseURL}/order.json`, {
      method: 'POST',
      body : JSON.stringify(order)
    }).then(res => {
      if(res.status != 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(data => {
      let nextState = this.state.order;  
      // nextState[data.name] = order;     
      this.setState({order: nextState});  
    });
  }

  handleSubmit = () => {
    const order = {
      alcohol_type: this.state.alcohol_type,
      alcohol_number: this.state.alcohol_number,
      location: this.state.location,
      name: this.state.name,
      phone_number: this.state.phone_number,
      price: this.state.price,
    }
    this.closeModal();
    // if (!order.alcohol_number && !order.alcohol_type && !order.location && !order.name && !order.phone_number && !order.price) {
    //   return;
    // }
    this._post(order);
    window.location.reload()
  }

  // 각 컴포넌트에서 데이터 받아오기
  handleAlcohol_typeData = (newData) => {
    this.state.alcohol_type = newData;
  }

  handleAlcohol_numberData = (newData) => {
    this.state.alcohol_number = newData;
  }

  handleInput_nameData = (newData) => {
    this.state.name = newData;
  }

  handleInput_addressData = (newData) => {
    this.state.location = newData;
  }

  handlePriceData = (newData) => {
    this.state.price = newData;
  }

  handlePhone_numberData = (newData) => {
    this.state.phone_number = newData;
  }

  render() {
    return (
      <div id="App" className="App">
        <div>
          <TopComponent />
        </div>
        <div className="Main1">
          <div>
            <button className="button1" onClick={this.openModal} >주문하기</button>
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
            <div className='h2' >
              <h1 className='div8'>- 주문하기 -</h1>
              <div className='div7'>
                <br></br>
                <br></br>

                <Inputname onDataChange={this.handleInput_nameData}/>
                <br></br>
                <Typeofalcohol onDataChange={this.handleAlcohol_typeData} />
                <br></br>
                <Quantityofalcohol onDataChange={this.handleAlcohol_numberData}/>
                <br></br>
                <Inputphonenumber onDataChange={this.handlePhone_numberData}/>
                <br></br>
                <Inputadress onDataChange={this.handleInput_addressData}/>
                <br></br>
              </div>
            </div>
            <br></br>
            &nbsp;
            <Button variant='contained' color='primary' onClick={this.handleSubmit}>주문하기</Button>
            &nbsp; &nbsp; &nbsp; 
            <Button onClick={this.closeModal} variant='outlined' color='primary'>뒤로가기</Button>
          </Modal>
      </div>
    );
  }
}

export default App;


