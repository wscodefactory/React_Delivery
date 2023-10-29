import React, { Component } from 'react';

class inputAdress extends Component {
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
                                    <option>텔레토비 동산</option>
                                    <option>가온마당</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default inputAdress;