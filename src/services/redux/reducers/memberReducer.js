import * as actionTypes from "../actionTypes.js";
import initialStates from "./initialStates";

export default function memberReducer(state = initialStates.temp, action) {

    switch (action.type) {
        case actionTypes.GET_MEMBER:
            return action.payload;
        case actionTypes.CREATE_MEMBER:
            const user = JSON.parse(localStorage.getItem("user"));
            return {...action.payload.response, data: {user: user, membership: action.payload.membership}};
        default:
            return state;
    }

}