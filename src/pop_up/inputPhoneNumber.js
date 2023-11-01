import React, { useState } from 'react';

function InputPhoneNumber({ onDataChange }) {
    const [quantity, setPhoneNumber] = useState(''); // 전화번호 뒷자리를 문자열로 저장

    const inputStyle = {
        textAlign: 'center',
    };

    const handleNumberChange = (event) => {
        const value = event.target.value;

        setPhoneNumber(value);
    };

    return (
        <div>
            &nbsp; &nbsp; &nbsp;
            <label htmlFor="quantity">전화번호 : 010 - </label>

            <input
                type="text"
                style={inputStyle}
                value={quantity}
                onChange={handleNumberChange}
            />
            &nbsp; ( - 는 생략해주세요 )
            {/* 뒷자리 4개 표시 */}
            <div>&nbsp; &nbsp; &nbsp;(주문번호: {quantity.slice(-4)})</div>
        </div>
    );
}

export default InputPhoneNumber;
