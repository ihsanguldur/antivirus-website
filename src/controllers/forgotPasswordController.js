import {isEmailValid} from "../utils/validation";

//check mail is valid.
export function sendRequest(sendResetEmail, email) {

    if (isEmailValid(email)) {
        //if its valid send request.
        sendResetEmail({email});
        return true;
    }
    return false;

}