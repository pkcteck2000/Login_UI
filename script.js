function loginAction() {
    let userName = document.getElementById('username').value;
    if(userName === "") {
        document.getElementById("username-required-field").style.display = "block";
    }
    else{
        document.getElementById("username-required-field").style.display = "none";
    }
    let userPassword = document.getElementById('password').value;
    if(userPassword === "") {
        document.getElementById("password-required-field").style.display = "block";
    }
    else{
        document.getElementById("password-required-field").style.display = "none";
    }
}