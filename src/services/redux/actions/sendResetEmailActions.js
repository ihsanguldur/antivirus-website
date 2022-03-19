import * as actionTypes from "../actionTypes";

export function sendResetEmailActions(response){
    return {
        type : actionTypes.SEND_RESET_EMAIL,
        payload : response
    }
}

export function sendResetEmail(email){
    return function (dispatch){
        fetch("http://localhost:5000/api/user/password/forgot",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(email)
        })
            .then(response => response.json())
            .then(response => dispatch(sendResetEmailActions(response)));
    }
}