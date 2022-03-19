import * as actionType from "../actionTypes.js";
import initialStates from "./initialStates";

export default function signupReducer(state = initialStates.temp, action){
    switch (action.type){
        case actionType.SIGNUP:
            return action.payload;
        default :
            return state;
    }
}