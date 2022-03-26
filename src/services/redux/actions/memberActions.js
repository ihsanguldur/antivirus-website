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
            .then(response => dispatch(createMemberAction({response, membership})));
    }
}