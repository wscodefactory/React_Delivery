import React, { useState } from 'react';
import Typeofalcohol from './QypeOfAlcohol'
import Quantityofalcohol from './quantityOfAlcohol'
import Inputphonenumber from './InputPhoneNumber'
import Inputadress from './InputAdress'


const PopUpMain = () => {

    const [Alcohol_type, setalcohol_type] = useState('');
    const [Alcohol_number, setalcohol_number] = useState('');
    const [Location, setlocation] = useState('');
    const [Name, setname] = useState('');
    const [Phone_number, setphone_number] = useState('');
    const [Price, setprice] = useState('');

    const handlealcohol_type = (data) => {
        setalcohol_type(data);
    }

    return (
        <div className='div3'>
                <h1>- 주문하기 -</h1>
            <div>
            <br></br>
            <br></br>
            <Typeofalcohol onDataChange={handlealcohol_type} />
            <br></br>
            <Quantityofalcohol/>
            <br></br>
            <Inputphonenumber/>
            <br></br>
            <Inputadress/>
            <br></br>
            </div>

        </div>
    )
}

export default PopUpMain;