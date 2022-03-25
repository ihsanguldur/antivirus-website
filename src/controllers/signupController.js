import {isEmailValid, isPasswordValid} from "../utils/validation";

export function sendRequest(signupAction,name, surname, email, password){

    if(isEmailValid(email) && isPasswordValid(password)){
        signupAction({name, surname, email, password});
        return true;
    }
    return false;

}