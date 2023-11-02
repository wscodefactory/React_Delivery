import React, { useState } from 'react';

function InputName({ onDataChange }) {
    const [name, setName] = useState('');

    const inputStyle = {
        textAlign: 'center',
    };

    const handleNameChange = (event) => {
        const name = event.target.value;
        setName(name);
        onDataChange(name);
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