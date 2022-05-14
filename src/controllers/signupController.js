import {isEmailValid, isPasswordValid} from "../utils/validation";

//check mail and password are valid.
export function singUpRequest(signupAction, name, surname, email, password) {

    if (isEmailValid(email) && isPasswordValid(password)) {
        //if valid send request.
        signupAction({name, surname, email, password});
        return true;
    }
    return false;

}