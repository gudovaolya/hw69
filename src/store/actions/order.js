import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const orderRequestStart = () => {
    return {type: actionTypes.ORDER_REQUEST_START}
};

export const orderRequestSucces = () => {
    return {type: actionTypes.ORDER_REQUEST_SUCCES}
};

export const orderRequestError = () => {
    return {type: actionTypes.ORDER_REQUEST_ERROR}
};

export const orderInit = () => {
    return {type: actionTypes.ORDER_INIT}
};

export const placeOrder = order => {
    return dispatch => {
        dispatch(orderRequestStart());
        axios.post('/orders.json', order).then(() => {
            dispatch(orderRequestSucces());
        }, error => {
            dispatch(orderRequestError())
        })
    }
};