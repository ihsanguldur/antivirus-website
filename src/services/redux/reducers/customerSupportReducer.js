import * as actionTypes from '../actionTypes';

export default function customerSupportReducer(state = "", action){

    switch (action.type){
        case actionTypes.SELECTED_CUSTOMER:
            return action.payload;
        case actionTypes.RESET_SELECTED_CUSTOMER:
            return action.payload;
        default:
            return state;
    }

}