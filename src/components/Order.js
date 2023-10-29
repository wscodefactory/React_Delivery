import React from "react";

class Order extends React.Component {
  render() {
    const imageStyle = {
      width: '100px', // 이미지 너비 설정
      marginRight: '20px', // 이미지와 나머지 요소 사이 간격 설정
    };

    const divStyle = {
      display: 'flex', // 가로로 정렬하기 위해 Flexbox 사용
      alignItems: 'center', // 요소들을 수직 중앙으로 정렬
      background: 'white'
    };

    return (
      <div  style={divStyle}>
        <div>
          <img src={this.props.image} alt="profile" style={imageStyle} />
        </div>
        <div>
          <div>주문 번호 : {this.props.id}번</div>
          <div>이름 : {this.props.name}</div>
          <div>주종 : {this.props.alcohol_type}</div>
          <div>주류 번호 : {this.props.alcohol_number}번</div>
          <div>가격 : {this.props.price}원</div>
          <div>현재 위치 : {this.props.location}</div>
          <div>고유번호 : {this.props.phone_number}</div>
          <div>현재 상태 : {this.props.now}</div>
        </div>

      </div>
    );
  }
}

export default Order;


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
