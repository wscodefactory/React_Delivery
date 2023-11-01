import React, { Component } from 'react';
import './App.css';
import Order from "./components/Order";
import trueDew from './img/trueDew.png'; // 이미지 파일을 import
import realDewIsBack from './img/realDewIsBack.png'; 
import new1 from './img/new1.png'; 
import likeFirst from './img/likeFirst.png'; 
import { useNavigate } from 'react-router-dom';
import { Text } from 'react-native';

const databaseURL = "https://givemesoju-d9d80-default-rtdb.asia-southeast1.firebasedatabase.app"


    const dummy_order = [
        {
            'id': 1,
            'image': trueDew,
            'alcohol_type': '참이슬',
            'alcohol_number': '1',
            'price': '1000',
            'location': '대한민국',
            'phone_number': '39488047',
            'name': '박주환',
        },
        {
            'id': 2,
            'image': likeFirst,
            'alcohol_type': '처음처럼',
            'alcohol_number': '2',
            'price': '1000',
            'location': '대한민국',
            'phone_number': '39488047',
            'name': '오민섭',
        },
        {
            'id': 3,
            'image': realDewIsBack,
            'alcohol_type': '진로이즈백',
            'alcohol_number': '3',
            'price': '1000',
            'location': '대한민국',
            'phone_number': '39488047',
            'name': '유웅선',
        },
        {
            'id': 4,
            'image': new1,
            'alcohol_type': '새로',
            'alcohol_number': '4',
            'price': '1000',
            'location': '대한민국',
            'phone_number': '39488047',
            'name': '박상혁',
        },
    ];

class MainComponent extends Component {
    constructor(){
        super();
        this.state = {
            order: {},
            dialog: false,
            alcohol_number: '',
            alcohol_type: '',
            location: '',
            phone_number: '',
            name: '',
            price: '',
        }
    }

    _get(){
        fetch(`${databaseURL}/order.json`).then(res => {
            if(res.status != 200){
                throw(res.statusText);
            }
            return res.json();
        }).then(order => this.setState({order: order}));
    }

    _post(order) {  // 추가하기
        return fetch(`${databaseURL}/order.json`, {
            method: 'POST',
            body : JSON.stringify(order)
        }).then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data => {  // 여기를 더 분석하고 수정하기
            let nextState = this.state.words;  // 이게 맞을까?
            nextState[data.name] = order;      // 여기도
            this.setState({order: nextState});  // 여기도
        });
    }

    _delete(id) {   // 삭제하기
        return fetch(`${databaseURL}/order/${id}.json`, {
            method: 'DELETE'
        }).then(res => {
            if(res.status != 200) {
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(() => {
            let nextState = this.state.order;  // 이게 맞을까?
            delete nextState[id];      // 여기도
            this.setState({order: nextState});  // 여기도
        });
    }

    componentDidMount(){
    this._get();
    }

    handleValueChange = (e) => {  // 값 변경에 따른 변화
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
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
        this.handleDialogToggle();
            if (!order.alcohol_number && !order.alcohol_type && !order.location && !order.name && !order.phone_number && !order.price) {
                return;
            }
        this._post(order);
    }
    handleDialogToggle = () => this.setState({
        dialog: !this.state.dialog
    })

    handleDelete = (id) => {
        this._delete(id);
    }
    
    render() {
        return (
            <div>
                {Object.keys(this.state.order).map(id => {
                    const order = this.state.order[id];
                    return (
                        <div key={order.id} className='div5'>
                            <Order
                                id={id}
                                alcohol_type={order.alcohol_type}
                                alcohol_number={order.alcohol_number}
                                price={order.price}
                                location={order.location}
                                phone_number={order.phone_number}
                                name={order.name}
                            />
                            <div className='Main1'><br/></div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default MainComponent;
