import React from 'react';
import Typeofalcohol from './typeOfAlcohol'
import Quantityofalcohol from './quantityOfAlcohol'
import Inputphonenumber from './inputPhoneNumber'
import Inputadress from './inputAdress'

class popUpMain extends React.Component{
    render(){
        return(
            <div className='div3'>
                <h1>- 주문하기 -</h1>
            <div>
            <br></br>
            <br></br>
            <Typeofalcohol/>
            <br></br>
            <Quantityofalcohol/>
            <br></br>
            <Inputphonenumber/>
            <br></br>
            <Inputadress/>
            <br></br>
            </div>

            </div>
            
        );
    }
}

export default popUpMain;