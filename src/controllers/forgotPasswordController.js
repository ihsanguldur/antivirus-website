import {isEmailValid} from "../services/utils/validation";

export function sendRequest(sendResetEmail,email){

    if(isEmailValid(email)){
        sendResetEmail({email});
        return true;
    }
    return false;

}