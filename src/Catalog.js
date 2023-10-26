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
/*
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

*/
/*

import React, { Component } from "react";
import Order from './components/Order';
import './App.css';

const order = {
    'id' : 1,
    'alcohol_type' : "참이슬",
    'alcohol_number' : 3,
    'price' : 1000,
    'location' : "텔동",
    'phone_number' : 71108128,
    'now' : "주문 대기",
    'name' : "박주환",
}

class Catalog extends Component {
    render() {
        return (
            <div className="Catalog">
                <Order id={order.id} 
                alcohol_type={order.alcohol_type} 
                alcohol_number={order.alcohol_number} 
                price={order.price} 
                location={order.location} 
                phone_number={order.phone_number} 
                now={order.now} 
                name={order.name} />
                <p>이름 :</p> 
            </div>
        );
    }
}

export default Catalog;
*/

import React, { Component } from 'react';
import './App.css';
import Order from "./components/Order";
import trueDew from './trueDew.png'; // 이미지 파일을 import
import realDewIsBack from './realDewIsBack.png'; 
import new1 from './new1.png'; 
import likeFirst from './likeFirst.png'; 
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root:{
        width:'100%',
        height: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto"
    },
    table:{
        minWidth: 1080
    }
    });

const customers = [
    {
        'id': 1,
        'image': trueDew,
        'alcohol_type': '참이슬',
        'alcohol_number': '1',
        'price': '1000₩',
        'location': '대한민국',
        'phone_number': '39488047',
        'now': '배달중',
        'name': '박주환',
    },
    {
        'id': 2,
        'image': likeFirst,
        'alcohol_type': '처음처럼',
        'alcohol_number': '2',
        'price': '1000₩',
        'location': '대한민국',
        'phone_number': '39488047',
        'now': '배달중',
        'name': '오민섭',
    },
    {
        'id': 3,
        'image': realDewIsBack,
        'alcohol_type': '진로이즈백',
        'alcohol_number': '3',
        'price': '1000₩',
        'location': '대한민국',
        'phone_number': '39488047',
        'now': '배달중',
        'name': '유웅선',
    },
    {
        'id': 4,
        'image': new1,
        'alcohol_type': '새로',
        'alcohol_number': '4',
        'price': '1000₩',
        'location': '대한민국',
        'phone_number': '39488047',
        'now': '배달중',
        'name': '유웅선',
    },
    
    ];

class Catalog extends Component {
    render() {
        const { classes } = this.props; // classes를 props로 받아옴
        return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
            <TableHead >
                <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>주종</TableCell>
                <TableCell>주류 번호</TableCell>
                <TableCell>가격</TableCell>
                <TableCell>위치</TableCell>
                <TableCell>번호</TableCell>
                <TableCell>전화번호</TableCell>
                <TableCell>현재 상태</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {customers.map(c => (
                <Order key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
                ))}
            </TableBody>
            </Table>
        </Paper>
        );
    }
    }

export default withStyles(styles)(Catalog);


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

