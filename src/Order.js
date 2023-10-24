import React, { Component } from 'react'
import { Text, View } from 'react-native'


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

function Order = () => {
  return (
    <div>
      <h2>{this.props.id}</h2>
      <p>{this.props.alcohol_type}</p>
      <p>{this.props.alcohol_number}</p>
      <p>{this.props.price}</p>
      <p>{this.props.location}</p>
      <p>{this.props.phone_number}</p>
      <p>{this.props.now}</p>
      <p>{this.props.name}</p>
    </div>
  )
}

export default order
