import * as actionTypes from "../actionTypes.js";

export function loginAction(response){
    return {
        type : actionTypes.LOGIN,
        payload : response
    }
}

export function login(params){
    return function(dispatch){
        fetch("http://localhost:5000/api/user/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(params)
        })
            .then(response => response.json())
            .then(response => {
                if(response.success){
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response;
            })
            .then(response => dispatch(loginAction(response)));

    }
}