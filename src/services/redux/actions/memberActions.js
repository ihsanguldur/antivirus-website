import * as actionTypes from "../actionTypes.js";

export function getMemberAction(response) {
    return {
        type: actionTypes.GET_MEMBER,
        payload: response
    }
}

export function createMemberAction(params) {
    return {
        type: actionTypes.CREATE_MEMBER,
        payload: params
    }
}

export function getMember(id) {
    return function (dispatch) {
        fetch("http://localhost:5000/api/member/" + id)
            .then(response => response.json())
            .then(response => {
                if(response.success){
                    localStorage.setItem("user", JSON.stringify(Object.assign({}, {...response.data.user}, {membershipName : response.data.membership.name})));
                }
                return response;
            })
            .then(response => dispatch(getMemberAction(response)));
    }
}

export function createMember(params, membership) {
    return function (dispatch) {
        fetch("http://localhost:5000/api/member/new", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params)
        })
            .then(response => response.json())
            .then(response => {
                if(response.success){
                    const user = JSON.parse(localStorage.getItem("user"));
                    localStorage.setItem("user", JSON.stringify(Object.assign({},{...user},{membershipName : membership.name})));
                }
                return response;
            })
            .then(response => dispatch(createMemberAction({response, membership})));
    }
}