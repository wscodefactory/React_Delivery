import React, { useState } from 'react';
import Typeofalcohol from './TypeOfAlcohol'
import Quantityofalcohol from './QuantityOfAlcohol'
import Inputphonenumber from './InputPhoneNumber'
import Inputadress from './InputAdress'
import Inputname from './InputName'

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
        <div   className='h2' >
            <h1>- 주문하기 -</h1>
            <div  className='div7'>
                <br></br>
                <br></br>
                <Inputname/>
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