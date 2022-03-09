import * as actionTypes from "../actions/actionTypes.js";
import initialStates from "./initialStates";

export default function userReducer(state=initialStates.currentLogin, action){
    switch (action.type){
        case actionTypes.LOGIN :
            return action.payload;
        case actionTypes.SIGNUP :
            return action.payload;
        default:
            return state;
    }
}