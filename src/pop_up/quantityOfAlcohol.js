import React, { useState, useEffect } from 'react';

function QuantityOfAlcohol({ onDataChange }) {
    const [selectedWine, setSelectedWine] = useState('---선택---');

    const handleWineChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedWine(selectedValue);
        onDataChange(selectedValue);
    };

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

    const containerStyle = {
        display: 'flex',
    };

    return (
        <div style={containerStyle}>
            <table>
                <tbody>
                    <tr>
                        
                    &nbsp; &nbsp; &nbsp;
                
                        <td>수량 : </td>
                        <td></td>
                        <td>
                            <select
                                size="1"
                                name="tel4"
                                value={selectedWine}
                                onChange={handleWineChange}
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

export default QuantityOfAlcohol;
