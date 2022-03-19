import * as actionTypes from "../actionTypes.js";
import initialStates from "./initialStates";

export default function loginReducer(state = initialStates.temp, action){
    switch (action.type){
        case actionTypes.LOGIN:
            return action.payload;
        default:
            return state;
    }
}