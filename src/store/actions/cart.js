import * as actionTypes from './actionsTypes';

export const addDishToCart = (dishId, dish) => {
    return {type: actionTypes.ADD_DISH_TO_CART, dishId, dish}
};

export const removeDishFromCart = (dishId, dish) => {
    return {type: actionTypes.REMOVE_DISH_FROM_CART, dishId, dish}
};

export const initCart = () => {
    return {type: actionTypes.INIT_CART}
};