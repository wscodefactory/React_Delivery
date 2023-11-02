import React, { useState } from 'react';

function InputMemo({ onDataChange }) {
    const [memo, setMemo] = useState('');

    const inputContainerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const inputStyle = {
        textAlign: 'left',
        width: '300px',
        height: '200px',
    };

    const labelStyle = {
        marginRight: '10px', // 원하는 여백 조정
    };

    const handleMemoChange = (event) => {
        const memo = event.target.value;
        setMemo(memo);

        // onDataChange가 함수인 경우에만 호출
        if (typeof onDataChange === 'function') {
            onDataChange(memo);
        }
    };

    return (
        <div style={inputContainerStyle}>
            <label style={labelStyle} htmlFor="memo">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;상세 주문 :  </label>
            <textarea
                id="memo"
                style={inputStyle}
                value={memo}
                onChange={handleMemoChange}
            />
        </div>
    );
}

export default InputMemo;
