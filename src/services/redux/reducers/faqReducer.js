import * as actionTypes from "../actionTypes.js";
import initialStates from "./initialStates";


export default function faqReducer(state = initialStates.temp, action) {
    switch (action.type) {
        case actionTypes.GET_FAQS:
            return action.payload;
        default :
            return state;
    }
}