import {isEmailValid} from "../utils/validation";

//check mail is valid.
export function resetEmailRequest(sendResetEmail, email) {

    if (isEmailValid(email)) {
        //if its valid send request.
        sendResetEmail({email});
        return true;
    }
    return false;

}