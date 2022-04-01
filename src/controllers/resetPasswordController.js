import {isPasswordValid} from "../utils/validation";

//check password is valid.
export function sendRequest(resetPassword, pass) {

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (isPasswordValid(pass)) {
        //if its valid send request.
        resetPassword({password: pass}, token);
        return true;
    } else {
        return false;
    }
}