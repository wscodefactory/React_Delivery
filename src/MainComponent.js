import React from 'react';
import Catalog from './Catalog';
<<<<<<< HEAD
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
=======
>>>>>>> bf865284e8b9aabea04f28250d0755aeebbab6bb


function MainComponent() {

    
    return (
<<<<<<< HEAD
        <div>
            <div>
                <h1>
                <button className='button1' onClick={clickButton}>주문하기</button>
                <Catalog />
                </h1>
            </div>
        <div>
            <h1>second</h1>
=======
        <div > {/* 주요 컨테이너 */}

            <div> {/* Catalog 컨테이너 */}
                <Catalog />
>>>>>>> bf865284e8b9aabea04f28250d0755aeebbab6bb
            </div>
        
        </div>
    );
}

export default MainComponent;
