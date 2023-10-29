import React, { Component } from 'react';

class QuantityOfAlcohol extends Component {
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
                <label htmlFor="quantity">수량 :  </label>

                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={this.state.quantity}
                    onChange={this.handleQuantityChange}
                    style={inputStyle} // 스타일을 적용
                />
                &nbsp;병
            </div>
        );
    }
}

export default QuantityOfAlcohol;