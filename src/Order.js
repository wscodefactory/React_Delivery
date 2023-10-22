import React from 'react';
import Catalog from './Catalog';

const clickButton = () => {
    document.location.href('/drink/Order2')
}

function Order() {
    return (
    <div>
        <button onclick={clickButton}>주문하기</button>
        <h1>메인 컴포d넌트</h1>
        <Catalog />
    </div>
    );
}

export default Order;
