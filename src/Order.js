import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const databaseURL = "https://givemesoju-d9d80-default-rtdb.asia-southeast1.firebasedatabase.app"

class Order extends React.Component {
  constructor(){
    super();
    this.state = {
      order: {}
    }
  }
  _get(){
    fetch(`${databaseURL}/order.json`).then(res => {
      if(res.status != 200){
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(order => this.setState({order: order}));
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.order != this.state.order;
  }
  componentDidMount(){
    this._get();
  }
  render() {
    return (
      <div>
        {Object.keys(this.state.order).map(id => {
          const order = this.state.order[id];
          return (
              <Card>
                <CardContent>
                  <Typography>
                    주종 : {order.alcohol_type} <br/>
                    수량 : {order.alcohol_number} <br/>
                    위치 : {order.location} <br/>
                    이름 : {order.name} <br/>
                    번호 : {order.phone_number} <br/>
                  </Typography>
                </CardContent>
              </Card>
          );
        })}
      </div>    
    )
  }
}

export default Order;
