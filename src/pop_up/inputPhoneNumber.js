import React, { Component } from 'react';

class InputPhoneNumber extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
        };
    }
    
    handleQuantityChange = (event) => {
        this.setState({ quantity: event.target.value });
    };
    
    render() {
        const inputStyle = {
            textAlign: 'center', 
        };

        return (
            <div>
                <label htmlFor="quantity">전화번호 : 010 - </label>

                <input
                    
                    style={inputStyle} // 스타일을 적용
                />
                &nbsp; ( - 는 생략해주세요 )
            </div>
        );
    }
}

export default InputPhoneNumber;