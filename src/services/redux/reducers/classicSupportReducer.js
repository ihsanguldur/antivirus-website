import * as actionTypes from "../actionTypes.js";
import initialStates from "./initialStates";

export default function classicSupportReducer(state = initialStates.temp, action){

    switch (action.type){
        case actionTypes.CREATE_CLASSIC_SUPPORT:
            return action.payload;
        case actionTypes.GET_CLASSIC_SUPPORT:
            return action.payload;
        default:
            return state;
    }

}