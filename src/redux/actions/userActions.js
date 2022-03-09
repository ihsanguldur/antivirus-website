import * as actionTypes from "../actions/actionTypes.js";

export function loginAction(response){
    return {type : actionTypes.LOGIN, payload : response};
}

export function createUserAction(response){
    return {type : actionTypes.SIGNUP, payload : response};
}

export function getLoggedIn(userInfo){
    return function (dispatch){
        fetch("http://localhost:5000/api/user/login",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(response => {
                dispatch(loginAction(response));
                /*if(response.success){
                    document.getElementById("loginLink").click();
                }*/
            });
    }
}

export function getCreatedUser(userInfo){
    return function (dispatch){
        fetch("http://localhost:5000/api/user/new",{
            method : "POST",
            headers :  {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(userInfo)
        })
            .then(response => response.json())
            .then(response => {
                dispatch(createUserAction(response));
                /*if(response.success){
                    document.getElementById("signupLink").click();
                }*/
            });

    }
}