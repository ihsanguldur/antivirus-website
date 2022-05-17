import * as actionTypes from '../actionTypes';

export function getUser(userLocal){
    return {
        type : actionTypes.GET_USER,
        payload : userLocal
    }
}

function updateUserAction(response){
    return {
        type : actionTypes.UPDATE_USER,
        payload : response
    }
}

export function updateUser(_id,params){
    return function(dispatch){
        fetch("http://localhost:5000/api/user/update/"+_id,{
            method : "PUT",
            body : JSON.stringify(params),
            headers : {
                "Content-Type" : "application/json"
            }
        })
            .then(response => response.json())
            .then(response => dispatch(updateUserAction(response)))
    }
}
