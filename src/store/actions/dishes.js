import * as actionTypes from './actionsTypes';
import axios from 'axios';

export const dishesRequestStart = () => {
    return {type: actionTypes.DISHES_REQUEST_START}
};

export const dishesRequestSucces = (dishesData) => {
    return {type: actionTypes.DISHES_REQUEST_SUCCES, dishes: dishesData}
};

export const dishesRequestEror = () => {
    return {type: actionTypes.DISHES_REQUEST_ERROR}
};

export const getDishes = () => {
    return dispatch => {
        dispatch(dishesRequestStart());
        axios.get('/dishes.json').then(response => {
            dispatch(dishesRequestSucces(response.data));
        }, error => {
            dispatch(dishesRequestEror());
        })

    }
};

