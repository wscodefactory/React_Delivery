
import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Order extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell>
                  <img src={this.props.image} alt="profile"/>
                  <TableRow>
                  <TableCell>{this.props.alcohol_type}</TableCell>
                  <TableCell>{this.props.alcohol_number}</TableCell>
                </TableRow>
                  </TableCell>
                  <TableCell>{this.props.price}</TableCell>
                  <TableCell>{this.props.location}</TableCell>
                  <TableCell>{this.props.phone_number}</TableCell>
                
                <TableCell>{this.props.now}</TableCell>
                <TableCell>{this.props.name}</TableCell>
            </TableRow>
        );
    }
    }

export default Order;
/*

import React from "react";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Order extends React.Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        );
    }
    }

export default Order;


*/
/*
// 더미 데이터 생성
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
*/
/*
import React, { Component } from 'react'

class Order extends Component {
  render() {
    return(
    <div>
      <h2>ID : {this.props.id}</h2>
      <p>주종 : {this.props.alcohol_type}</p>
      <p>수량 : {this.props.alcohol_number}</p>
      <p>가격 : {this.props.price}</p>
      <p>현재 위치 : {this.props.location}</p>
      <p>주문 번호 : {this.props.phone_number}</p>
      <p>현재 상태 : {this.props.now}</p>
      <p>{this.props.name}</p>
    </div>
    );
  }
}

export default Order
*/
