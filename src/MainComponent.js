import React, { Component } from 'react';
import './App.css';
import Order from "./components/Order";
import trueDew from './img/trueDew.png'; // 이미지 파일을 import
import realDewIsBack from './img/realDewIsBack.png'; 
import new1 from './img/new1.png'; 
import likeFirst from './img/likeFirst.png'; 
import { useNavigate } from 'react-router-dom';
import { Text } from 'react-native';
import { Button } from '@mui/material';
import { Grid } from '@mui/material'

const databaseURL = "https://givemesoju-d9d80-default-rtdb.asia-southeast1.firebasedatabase.app"

class MainComponent extends Component {
    constructor(){
        super();
        this.state = {
            order: {},
            dialog: false,
            alcohol_number: '',
            alcohol_type: '',
            location: '',
            phone_number: '',
            name: '',
            price: '',
        }
    }

    _get(){
        fetch(`${databaseURL}/order.json`).then(res => {
            if(res.status != 200){
                throw(res.statusText);
            }
            return res.json();
        }).then(order => this.setState({order: order}));
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

    componentDidMount(){
    this._get();
    }

    handleValueChange = (e) => {  // 값 변경에 따른 변화
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    }
    
    handleDelete = (id) => {
        this._delete(id);
        // return fetch(`${databaseURL}/order/${id}.json`, {
        //     method: 'PATCH'
        // }).then(res => {
        //     if(res.status != 200) {
        //         throw new Error(res.statusText);
        //     }
        //     return res.json();
        // }).then(() => {
        //     let nextState = this.state.order.delete; 
        //     nextState = 1;      
        //     this.setState({order: nextState});  
        // });
    }
    
    render() {

        const divStyle = {
            display: 'flex', // 가로로 정렬하기 위해 Flexbox 사용
            alignItems: 'center', // 요소들을 수직 중앙으로 정렬
            background: 'white',
          };

        return (
            <div>
                {Object.keys(this.state.order).map(id => {
                    const order = this.state.order[id];
                    return ( order.delete == 0 ?
                        <div key={order.id} className='div5'>
                            <Grid container>
                                <Grid item xs={9}>
                                    <div>
                                        <div style={divStyle}>
                                            <Order
                                                id={id}
                                                alcohol_type={order.alcohol_type}
                                                alcohol_number={order.alcohol_number}
                                                price={order.price}
                                                location={order.location}
                                                phone_number={order.phone_number.slice(-4)}
                                                name={order.name}
                                            />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item style={divStyle} xs={3} className="delete-button-container">
                                    <div className="div6" >
                                    <Button className="delete" variant="contained" color="error" onClick={() => this.handleDelete(id)} >삭제</Button>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className='Main1'><br/></div>
                        </div> : ''
                    )
                })}
            </div>
        );
    }
}

export default MainComponent;
