import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import './Dishes.css';
import Dish from '../../components/Dish/Dish';
import {getDishes} from "../../store/actions/dishes";
import {addDishToCart, initCart} from "../../store/actions/cart";
import Cart from '../Cart/Cart';
import Modal from '../../components/UI/Modal/Modal';
import OrderForm from "../../components/OrderForm/OrderForm";
import {orderInit, placeOrder} from "../../store/actions/order";
import withLoader from "../../hoc/withLoader/withLoader";

const CUSTOMER_INIT = {
    name: '',
    address: '',
    phone: ''
};

class Dishes extends Component {

    state = {
        showModal: false,
        customer: {...CUSTOMER_INIT}
    };

    componentDidMount() {
        this.props.onGetDishes();
    };

    componentDidUpdate() {
        if (this.props.isOrdered) {
            this.setState({showModal: false, customer: {...CUSTOMER_INIT}});
            this.props.onOrderInit();
            this.props.onInitCart();
        }
    };

    showModalHandler = () => {
        this.setState({showModal: true});
    };

    closeModalHandler = () => {
        this.setState({showModal: false});
    };

    valueChanged = (event) => {
        const name = event.target.name;
        const customer = {...this.state.customer};
        customer[name] = event.target.value;
        this.setState({customer});
    };

    orderHandler = (event) => {
        event.preventDefault();
        const dishesToOrder = {};
        Object.keys(this.props.dishesInCart).map(dishId => {
            return (dishesToOrder[dishId] = {
                'title': this.props.dishesInCart[dishId].title,
                'amoiunt': this.props.dishesInCart[dishId].amount
            });
        });
        const order = {
            dishes: dishesToOrder,
            customer: {
                name: this.state.customer.name,
                address: this.state.customer.address,
                phone: this.state.customer.phone
            }
        };
        this.props.onPlaceOrder(order);
    };

    render () {

        let dishesBlock = (
            <div className="dishes-block">
                {Object.keys(this.props.dishes).map(dishKey => {
                    return (
                        <Dish
                            key = {dishKey}
                            picture = {this.props.dishes[dishKey].picture}
                            title = {this.props.dishes[dishKey].title}
                            price = {this.props.dishes[dishKey].price}
                            added = {() => this.props.onAddDishToCart(dishKey, this.props.dishes[dishKey])}
                        />
                    )
                })}
            </div>
        );

        let modal = (
            <Modal
                show = {this.state.showModal}
                closed = {this.closeModalHandler}
            >
                <OrderForm
                    name = {this.state.customer.name}
                    address = {this.state.customer.address}
                    phone = {this.state.customer.phone}
                    change = {this.valueChanged}
                    ordered = {this.orderHandler}
                />
            </Modal>
        );

        return (
            <Fragment>
                {modal}
                <div className="main-column">
                    {dishesBlock}
                </div>
               <div className="sidebar">
                   <Cart
                        showModal = {this.showModalHandler}
                   />
               </div>
            </Fragment>

        )
    }
}

const mapStateToProps = state => {
    return {
        dishes: state.dishes_reducer.dishes,
        dishesInCart: state.cart_reducer.dishesInCart,
        isOrdered: state.order_reducer.isOrdered
    }

};
const mapDispatchToProps = dispatch => {
    return {
        onGetDishes: () => dispatch(getDishes()),
        onAddDishToCart: (dishId, dish) => dispatch(addDishToCart(dishId, dish)),
        onPlaceOrder: (order) => dispatch(placeOrder(order)),
        onOrderInit: () => dispatch(orderInit()),
        onInitCart: () => dispatch(initCart())

    }
};
export default withLoader(connect(mapStateToProps, mapDispatchToProps)(Dishes), axios);

