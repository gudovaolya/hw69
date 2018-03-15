import React, {Component, Fragment} from 'react';
import './Cart.css';
import {connect} from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import {removeDishFromCart} from "../../store/actions/cart";

class Cart extends Component {

    render () {
        let cart = null;

        if(Object.keys(this.props.dishesInCart).length !== 0){
           let cartItems = (
               Object.keys(this.props.dishesInCart).map(dishId => {
                   return (
                       <CartItem
                           key = {dishId}
                           title = {this.props.dishesInCart[dishId].title}
                           amount = {this.props.dishesInCart[dishId].amount}
                           price = {this.props.dishesInCart[dishId].price * this.props.dishesInCart[dishId].amount}
                           remove = {() => this.props.onRemoveDishFromCart(dishId, this.props.dishesInCart[dishId])}
                       />
                   )
               })
           );

           cart = (
               <Fragment>
                   {cartItems}
                   <div className="cart-price">
                       <p>Доставка: <b>150</b> KGS</p>
                       <p>Итого: <b>{this.props.totalPrice + 150}</b> KGS</p>
                   </div>
                   <button className="btn" onClick={this.props.showModal}>Place order</button>
               </Fragment>
           )

        } else {
            cart = (
                <p>There are no dishes in your cart yet.</p>
            )
        }

        return (
            <div className="cart">
                <h3>Cart</h3>
                {cart}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dishesInCart: state.cart_reducer.dishesInCart,
        totalPrice: state.cart_reducer.totalPrice
    }

};
const mapDispatchToProps = dispatch => {
    return {
        onRemoveDishFromCart: (dishId, dish) => dispatch(removeDishFromCart(dishId, dish))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

