import React from 'react';
import Catalog from './Catalog';
import { useNavigate } from 'react-router-dom';

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