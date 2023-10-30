import React, { Component, useState } from 'react';

// function TypeOfAlcohol = ({onDataChange}) => {
//     const sendDataToParent =() => {
//         onDataChange()
//     }
// }

class TypeOfAlcohol extends Component {
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
                            <td align="center">주종 : </td>
                            <td></td>
                            <td>
                                <select
                                    size="1"
                                    name="tel4"
                                    value={this.state.selectedWine}
                                    onChange={this.handleWineChange}
                                >
                                    <option>---------- 선택 ----------</option>
                                    <option>참이슬</option>
                                    <option>참이슬 오리지널</option>
                                    <option>진로이즈백</option>
                                    <option>새로</option>
                                    <option>별빛청하</option>
                                    <option>처음처럼</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TypeOfAlcohol;
