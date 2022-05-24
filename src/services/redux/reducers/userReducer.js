import * as actionTypes from '../actionTypes';
import initialStates from "./initialStates";

export default function userReducer(state = initialStates.temp,action){

    switch (action.type){
        case actionTypes.GET_USER :
            let newState;
            if(action.payload){
                newState = {success : true, data : action.payload}
            }else {
                newState = state;
            }
            return newState;
        case actionTypes.UPDATE_USER:
            let newState1;
            const user = JSON.parse(localStorage.getItem("user"));
            if(action.payload.success){
                const data = {...user, name : action.payload.data.name, surname : action.payload.data.surname, email : action.payload.data.email}
                newState1 = {success : action.payload.success, data : data};
                localStorage.setItem("user", JSON.stringify(data));
            }else {
                newState1 = {success:false, data : user, message : action.payload.message};
            }
            return newState1;
        default:
            return state;
    }

}