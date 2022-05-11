import * as actionTypes from '../actionTypes';
import initialStates from "./initialStates";

export default function userReducer(state = initialStates.temp,action){

    switch (action.type){
        case actionTypes.GET_USER :
            let newState;
            if(action.payload){
                newState = {success : "", data : action.payload}
            }else {
                newState = state;
            }
            return newState;
        default:
            return state;
    }

}