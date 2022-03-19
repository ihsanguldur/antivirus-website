import {isEmailValid} from "../services/utils/validation";

export function sendRequest(loginAction,email,password){

    if(isEmailValid(email)){
        loginAction({email, password});
        return true;
    }
    return false;
}