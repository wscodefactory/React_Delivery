 /*
import React from 'react';

function Catalog() {
    return (
        <div>
            <h1 className="Catalog">
            <img className="Catalog_img" alt="realdew" src={require("./realDew.png").default} />
            <p>주종 : </p> <p>현재상태 :</p> <p>위치 :</p>
            </h1>
        </div>
    );
}

export default Catalog;
*/

import React, {Component} from "react";
import OrderHistory from './components/OrderHistory'

import './App.css';

const history = {
    'type' : '주종',
    'state' : '배달중',
    'location' : '학교 반경 300m'
}

class Catalog extends Component{
    render(){
    return(
        <div className="history">
        <OrderHistory
        type = {history.type} 
        state = {history.state}
        location = {history.location}
        />
        </div>
    );
    }
}

export default Catalog;




/*
{props.type}
{props.state}
{props.location}

fuction Show(props){
    return(
        <h3>
        주종 :
        </h3>
    );
}

const element = <Show type="소주"/>;
ReactDOM.render(element, document.getElementById('root'));
*/