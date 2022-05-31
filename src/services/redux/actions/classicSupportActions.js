import * as actionTypes from "../actionTypes.js";

export function createClassicSupportAction(response) {
    return {
        type : actionTypes.CREATE_CLASSIC_SUPPORT,
        payload : response
    }
}

export function getClassicSupportAction(response) {
    return {
        type : actionTypes.GET_CLASSIC_SUPPORT,
        payload : response
    }
}

export function updateClassicSupportAction(response) {
    return {
        type : actionTypes.UPDATE_CLASSIC_SUPPORT,
        payload : response
    }
}

export function createClassicSupport(id, membership){
    return function (dispatch) {
        fetch("http://localhost:5000/api/support",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({sender : id, membership : membership})
        })
            .then(response => response.json())
            .then(response => dispatch(createClassicSupportAction(response)))
    }

}

export function getClassicSupportRequests(){
    return function (dispatch) {
        fetch("http://localhost:5000/api/support")
            .then(response => response.json())
            .then(response => dispatch(getClassicSupportAction(response)))
    }
}

export function updateClassicSupport(updatedValues) {
    return function (dispatch) {
        fetch("http://localhost:5000/api/support",{
            method : "PUT",
            headers :{
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(updatedValues)
        })
            .then(response => response.json())
            .then(response => dispatch(updateClassicSupportAction(response)))
    }
}
