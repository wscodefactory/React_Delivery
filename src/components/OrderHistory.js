import React from "react";



class OrderHistory extends React.Component {
    render() {
        return (
            <div>
                <h2>주문 내역</h2>
                <p>{this.props.type}</p>
                <p>{this.props.state}</p>
                <p>{this.props.location}</p>
            </div>
        );
    }
}

export default OrderHistory;
