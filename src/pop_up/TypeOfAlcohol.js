// function TypeOfAlcohol = ({onDataChange}) => {
//     const sendDataToParent =() => {
//         onDataChange()
//     }
// }
import React, { useState, useEffect } from 'react';

function TypeOfAlcohol({ onDataChange }) {
    const [selectedWine, setSelectedWine] = useState('---선택---');

    useEffect(() => {
        const centerAlignOptionText = () => {
            const selectElement = document.getElementsByName('tel4')[0];
            const options = selectElement.getElementsByTagName('option');

            for (let option of options) {
                option.style.textAlign = 'center';
            }
        };

        centerAlignOptionText();
    }, []);
    
    const handleWineChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedWine(selectedValue);
        onDataChange(selectedValue);
    };

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
                        <td align="center">주종 : </td>
                        <td></td>
                        <td>
                            <select
                                size="1"
                                name="tel4"
                                value={selectedWine}
                                onChange={handleWineChange}
                            >
                                <option>---선택---</option>
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

export default TypeOfAlcohol;
