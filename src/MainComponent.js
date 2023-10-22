import React from 'react';
import Catalog from './Catalog';

const clickButton = () => {
    document.location.href('/drink/Order2')
}

function MainComponent() {
    return (
        <div>
            <header className="App-header">
            <button onclick={clickButton} className="button1">주문하기</button>
            <h1>메인 컴포넌트</h1>
            <Catalog />
            </header>
        </div>
    );
}

export default MainComponent;
