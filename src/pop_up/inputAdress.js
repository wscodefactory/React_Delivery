import React, { Component } from 'react';

class inputAdress extends Component {
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
                <div>
                <label htmlFor="quantity">주소 :  </label>

                <input
                    
                    style={inputStyle} // 스타일을 적용
                />
                </div>
                <br></br>
                <div>
                <label htmlFor="quantity">상세주소 :  </label>

                <input
                    
                    style={inputStyle} // 스타일을 적용
                />
            </div>
            </div>
            
        );
    }
}

export default inputAdress;