import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    dishes: {}
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.DISHES_REQUEST_SUCCES:
            return {...state, dishes: action.dishes};
        default:
            return state;
    }

};

export default reducer;