import React from "react";
import trueDew from '../img/trueDew.png';

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

    const phoneNumber = this.props.phone_number.slice(-4);

    return (
      <div  style={divStyle}>
        <div>
          <img src={trueDew} alt="profile" style={imageStyle} />
        </div>
        <div>
          <div>주문 번호 : {this.props.id}번</div>
          <div>이름 : {this.props.name}</div>
          <div>주종 : {this.props.alcohol_type}</div>
          <div>주류 번호 : {this.props.alcohol_number}번</div>
          <div>가격 : {this.props.price}원</div>
          <div>현재 위치 : {this.props.location}</div>
          <div>고유번호 : {phoneNumber}</div>
        </div>
        <div>
          <button className="delete">삭제</button>
        </div>
      </div>
    );
  }
}

export default Order;

