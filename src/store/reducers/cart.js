import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    dishesInCart: {},
    totalPrice: 0
};

const reducer = (state = initialState, action) => {
    let dishAmount = 1;
    switch (action.type) {
        case actionTypes.ADD_DISH_TO_CART:
            if (typeof state.dishesInCart[action.dishId] !== 'undefined') {
                dishAmount = state.dishesInCart[action.dishId].amount + 1
            }
            action.dish.amount = dishAmount;
            return {
                ...state,
                dishesInCart: {
                    ...state.dishesInCart,
                    [action.dishId]: action.dish
                },
                totalPrice: state.totalPrice + action.dish.price
            };
        case actionTypes.REMOVE_DISH_FROM_CART:
            dishAmount = state.dishesInCart[action.dishId].amount - 1;
            action.dish.amount = dishAmount;
            if (dishAmount !== 0) {
                return {
                    ...state,
                    dishesInCart: {
                        ...state.dishesInCart,
                        [action.dishId]: action.dish
                    },
                    totalPrice: state.totalPrice - action.dish.price
                };
            } else {
                let copyDishesInCart = {...state.dishesInCart};
                delete copyDishesInCart[action.dishId];
                return {
                    ...state,
                    dishesInCart: copyDishesInCart,
                    totalPrice: state.totalPrice - action.dish.price
                }
            }
        case actionTypes.INIT_CART:
            return {...state, dishesInCart: {}, totalPrice: 0};
        default:
            return state;
    }
};

export default reducer;