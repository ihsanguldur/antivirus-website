export function isEmailValid(email) {
    const regExp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    return regExp.test(email);

}

export function isPasswordValid(password) {
    return (password.length >= 6);
}