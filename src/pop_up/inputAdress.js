import React, { useState, useEffect } from 'react';

function InputAdress() {
    const [selectedWine, setSelectedWine] = useState('---선택---');

    const handleWineChange = (event) => {
        setSelectedWine(event.target.value);
    };

    useEffect(() => {
        const selectElement = document.getElementsByName('tel4')[0];
        const options = selectElement.getElementsByTagName('option');

        for (let option of options) {
            option.style.textAlign = 'center';
        }
    }, []);

    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    return (
        <div style={containerStyle}>
            <table>
                <tbody>
                    <tr>
                        &nbsp; &nbsp; &nbsp;
                        <td align="center">주소 : </td>
                        <td></td>
                        <td>
                            <select
                                size="1"
                                name="tel4"
                                value={selectedWine}
                                onChange={handleWineChange}
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

export default InputAdress;
