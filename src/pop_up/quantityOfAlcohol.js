import React, { Component } from 'react';

class QuantityOfAlcohol extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWine: '---선택---',
        };
    }

    handleWineChange = (event) => {
        this.setState({ selectedWine: event.target.value });
    };

    centerAlignOptionText = () => {
        const selectElement = document.getElementsByName('tel4')[0];
        const options = selectElement.getElementsByTagName('option');
        
        for (let option of options) {
            option.style.textAlign = 'center';
        }
    };

    componentDidMount() {
        this.centerAlignOptionText();
    }

    render() {
        const containerStyle = {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        };

        return (
            <div style={containerStyle}>
                <table>
                    <tbody>
                        <tr>
                            <td align="center">수량 : </td>
                            <td></td>
                            <td>
                                <select
                                    size="1"
                                    name="tel4"
                                    value={this.state.selectedWine}
                                    onChange={this.handleWineChange}
                                >
                                    <option>---------- 선택 ----------</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                </select>
                            </td>
                            &nbsp;병
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default QuantityOfAlcohol;