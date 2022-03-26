import {isPasswordValid} from "../utils/validation";

export function sendRequest(resetPassword, pass) {

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (isPasswordValid(pass)) {
        resetPassword({password: pass}, token);
        return true;
    } else {
        return false;
    }
}