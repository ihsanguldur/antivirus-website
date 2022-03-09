
export function signupClickHandler(signupAction){
    const name = document.getElementById("nameForm").value;
    const surname = document.getElementById("surnameForm").value;
    const email = document.getElementById("emailForm").value;
    const password = document.getElementById("passwordForm").value;
    signupAction({name, surname, email, password});
}