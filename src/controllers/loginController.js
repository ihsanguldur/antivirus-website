import {isEmailValid} from "../utils/validation";

//check mail is valid.
export function loginRequest(loginAction, email, password) {

    if (isEmailValid(email)) {
        //if its valid send request.
        loginAction({email, password});
        return true;
    }
    return false;
}