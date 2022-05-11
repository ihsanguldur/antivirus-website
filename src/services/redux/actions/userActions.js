import * as actionTypes from '../actionTypes';

export function getUser(userLocal){
    return {
        type : actionTypes.GET_USER,
        payload : userLocal
    }
}