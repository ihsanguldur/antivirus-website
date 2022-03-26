import * as actionTypes from "../actionTypes";

export function resetPasswordAction(response) {
    return {
        type: actionTypes.RESET_PASSWORD,
        payload: response
    }
}

export function resetPassword(password, token) {
    return function (dispatch) {
        fetch("http://localhost:5000/api/user/password/reset?token=" + token, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(password)
        })
            .then(response => response.json())
            .then(response => dispatch(resetPasswordAction(response)));
    }
}