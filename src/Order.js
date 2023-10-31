import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { withStyles } from '@mui/material';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Fab from '@mui/material';
//import AddIcon from '@mui/icons-material/Add';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



class Order extends React.Componeconst databaseURL = "https://givemesoju-d9d80-default-rtdb.asia-southeast1.firebasedatabase.app"
nt {
  constructor(){
    super();
    this.state = {
      order: {},
      dialog: false,
      alcohol_number: '',
      alcohol_type: '',
      location: '',
      name: '',
      price: '',
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

  _post(order) {  // 추가하기
    return fetch(`${databaseURL}/order.json`, {
      method: 'POST',
      body : JSON.stringify(order)
    }).then(res => {
      if(res.status != 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(data => {  // 여기를 더 분석하고 수정하기
      let nextState = this.state.words;  // 이게 맞을까?
      nextState[data.name] = order;      // 여기도
      this.setState({order: nextState});  // 여기도
    });
  }

  _delete(id) {   // 삭제하기
    return fetch(`${databaseURL}/order/${id}.json`, {
      method: 'DELETE'
    }).then(res => {
      if(res.status != 200) {
        throw new Error(res.statusText);
      }
      return res.json();
    }).then(() => {
      let nextState = this.state.order;  // 이게 맞을까?
      delete nextState[id];      // 여기도
      this.setState({order: nextState});  // 여기도
    });
  }
  // shouldComponentUpdate(nextProps, nextState) {  // 이제 필요없음
  //   return nextState.order != this.state.order;
  // }
  componentDidMount(){
    this._get();
  }

  handleValueChange = (e) => {  // 값 변경에 따른 변화
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  
  handleSubmit = () => {
    const order = {
      alcohol_type: this.state.alcohol_type,
      alcohol_number: this.state.alcohol_number,
      location: this.state.location,
      name: this.state.name,
      phone_number: this.state.phone_number,
      price: this.state.price,
    }
    this.handleDialogToggle();
    if (!order.alcohol_number && !order.alcohol_type && !order.location && !order.name && !order.phone_number && !order.price) {
      return;
    }
    this._post(order);
  }

  handleDialogToggle = () => this.setState({
    dialog: !this.state.dialog
  })

  handleDelete = (id) => {
    this._delete(id);
  }

  render() {
    return (
      <div>
        <div>
          <Button variant="contained" color="primary" onClick={() => this.handleDialogToggle}>추가</Button>
        </div>
        {Object.keys(this.state.order).map(id => {
          const order = this.state.order[id];
          return (
              <Card>
                <CardContent>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>
                        주종 : {order.alcohol_type} <br/>
                        수량 : {order.alcohol_number} <br/>
                        위치 : {order.location} <br/>
                        이름 : {order.name} <br/>
                        번호 : {order.phone_number} <br/>
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Button variant="contained" color="secondary" onClick={() => this.handleDelete(id)}>삭제</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
          );
        })}
        <Dialog open={this.state.dialog} onClose={this.handleDialogToggle}>
          <DialogTitle>주문 추가</DialogTitle>
          <DialogContent>
            <TextField label="주종" type="text" name="alcohol_type" value={this.state.alcohol_type} onChange={this.handleValueChange} /> <br />
            <TextField label="수량" type="text" name="alcohol_number" value={this.state.alcohol_number} onChange={this.handleValueChange} /> <br />
            <TextField label="위치" type="text" name="location" value={this.state.location} onChange={this.handleValueChange} /> <br />
            <TextField label="이름" type="text" name="name" value={this.state.name} onChange={this.handleValueChange} /> <br />
            <TextField label="번호" type="text" name="phone_number" value={this.state.phone_number} onChange={this.handleValueChange} /> <br />
          </DialogContent>
          <DialogActions>
            <Button variant='contained' color="primary" onClick={this.handleSubmit}>추가</Button>
            <Button variant='outlined' color="primary" onClick={this.handleDialogToggle}>닫기</Button>
          </DialogActions>
        </Dialog>
      </div>    
    )
  }
}

export default Order;
