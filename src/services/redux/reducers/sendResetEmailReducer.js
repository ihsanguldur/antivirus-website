import * as actionTypes from "../actionTypes";
import initialStates from "./initialStates";

export default function sendResetEmailReducer(state = initialStates.temp, action) {

    switch (action.type) {
        case actionTypes.SEND_RESET_EMAIL:
            return action.payload;
        default:
            return state;
    }

}