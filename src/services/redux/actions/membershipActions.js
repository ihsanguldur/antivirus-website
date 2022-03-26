import * as actionTypes from "../actionTypes.js";

export function memberships(response) {
    return {
        type: actionTypes.GET_MEMBERSHIPS,
        payload: response
    };
}

export function getMemberships() {
    return function (dispatch) {
        fetch("http://localhost:5000/api/membership")
            .then(response => response.json())
            .then(response => dispatch(memberships(response)));
    }
}