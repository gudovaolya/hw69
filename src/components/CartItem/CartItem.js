import React from 'react';
import './CartItem.css';

const CartItem = (props) => {
    return (
        <div className="cart-item">
            <span>{props.title} x&nbsp;{props.amount}</span>
            <span>{props.price}</span>
            <button onClick={props.remove}>x</button>
        </div>
    )
};

export default CartItem;