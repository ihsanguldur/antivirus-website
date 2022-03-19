import * as actionTypes from "../actionTypes";
import initialStates from "./initialStates";

export default function resetPasswordReducer(state = initialStates.temp, action){

    switch (action.type){
        case actionTypes.RESET_PASSWORD:
            return action.payload;
        default:
            return state;
    }

}