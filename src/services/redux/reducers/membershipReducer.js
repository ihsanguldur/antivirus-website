import * as actionTypes from "../actionTypes.js";
import initialStates from "./initialStates";

export default function membershipReducer(state = initialStates.temp, action) {

    switch (action.type) {
        case actionTypes.GET_MEMBERSHIPS:
            return action.payload;
        default:
            return state;
    }

}