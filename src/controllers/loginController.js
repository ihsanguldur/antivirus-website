
export function loginClickHandler(loginAction){
    const email = document.getElementById("emailForm").value;
    const password = document.getElementById("passwordForm").value;
    loginAction({email, password});
}