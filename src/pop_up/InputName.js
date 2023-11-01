import React, { useState } from 'react';

function InputName() {
    const [name, setName] = useState('');

    const inputStyle = {
        textAlign: 'center',
    };

    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);
    };

    return (
        <div>
            &nbsp; &nbsp; &nbsp;
            <label htmlFor="name">이름 :  </label>
            &nbsp;
            <input
                type="text"
                style={inputStyle}
                value={name}
                onChange={handleNameChange}
            />
            &nbsp;
        </div>
    );
}

export default InputName;
