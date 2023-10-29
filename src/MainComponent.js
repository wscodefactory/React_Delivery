import React from 'react';
import Catalog from './Catalog';
import { useNavigate } from 'react-router-dom';
import Order from './Order';
import { Text } from 'react-native';

// 더미 데이터, 나중에 firebase에서 가져올거임
const order = {
    'id' : 1,
    'alcohol_type' : "참이슬",
    'alcohol_number' : 3,
    'price' : 1000,
    'location' : "텔동",
    'phone_number' : 71108128,
    'now' : "주문 대기",
    'name' : "박주환",
}


function MainComponent() {
    const navigate = useNavigate();

    const clickButton = () => {
        // 페이지 이동
        navigate('./Detial'); // Detial 페이지로 이동
    };

    return (
        <div>
            <div>
                <h1>
                <button className='button1' onClick={clickButton}>주문하기</button>
                <Catalog />
                </h1>
            </div>
        <div>
            <h1>second</h1>
            </div>
        </div>
    );
}

export default MainComponent;