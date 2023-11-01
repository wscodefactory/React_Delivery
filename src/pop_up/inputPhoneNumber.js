import React, { useState } from 'react';

function InputPhoneNumber({ onDataChange }) {
    const [quantity, setQuantity] = useState(''); // 전화번호 뒷자리를 문자열로 저장

    const inputStyle = {
        textAlign: 'center',
    };

    const handleQuantityChange = (event) => {
        const value = event.target.value;
        // 입력값에서 숫자만 추출하고 뒤에서 4자리만 유지
        const cleanedValue = value.replace(/\D/g, '').slice(-4);  //4자리 출력시 cleanedValue 사용
        setQuantity(value);
    };

    return (
        <div>
             &nbsp; &nbsp; &nbsp;
            <label htmlFor="quantity">전화번호 : 010 - </label>

            <input
                type="text"
                style={inputStyle}
                value={quantity}
                onChange={handleQuantityChange}
            />
            &nbsp; ( - 는 생략해주세요 )
        </div>
    );
}

export default InputPhoneNumber;
