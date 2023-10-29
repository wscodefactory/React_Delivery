import React, { Component } from 'react';
import './App.css';
import Order from "./components/Order";
import trueDew from './img/trueDew.png'; // 이미지 파일을 import
import realDewIsBack from './img/realDewIsBack.png'; 
import new1 from './img/new1.png'; 
import likeFirst from './img/likeFirst.png'; 

const order = [
    
    {
        'id': 1,
        'image': trueDew,
        'alcohol_type': '참이슬',
        'alcohol_number': '1',
        'price': '1000',
        'location': '대한민국',
        'phone_number': '39488047',
        'now': '배달중',
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
        'now': '배달중',
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
        'now': '배달중',
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
        'now': '배달중',
        'name': '박상혁',
    },
    ];

    class mainComponent extends Component {
    render() {
        return (
        <div >

            <div >

            {order.map((order) => (
            <div key={order.id} >
            <Order
                id={order.id}
                image={order.image}
                alcohol_type={order.alcohol_type}
                alcohol_number={order.alcohol_number}
                price={order.price}
                location={order.location}
                phone_number={order.phone_number}
                now={order.now}
                name={order.name}
            />
            <div className='Main1'><br/></div>
                </div>
            ))}

            </div>

        </div>
        );
    }
}

export default mainComponent;
