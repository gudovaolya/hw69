import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    isOrdered: false
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ORDER_INIT:
            return {...state, isOrdered: false};
        case actionTypes.ORDER_REQUEST_SUCCES:
            return {...state, isOrdered: true};
        default:
            return state
    }

};

export default reducer;



