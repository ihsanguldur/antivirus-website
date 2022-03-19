import * as actionType from "../actionTypes.js";

export function signupAction(response){
    return {
        type : actionType.SIGNUP,
        payload : response
    }
}

export function signup(params){
    return function (dispatch){
        fetch("http://localhost:5000/api/user/new",{
            method : "POST",
            headers :  {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(params)
        })
            .then(response => response.json())
            .then(response => dispatch(signupAction(response)));

    }
}