function verifyUser(){
    const email = sessionStorage.getItem("email");
    const password = sessionStorage.getItem("password");
    const emailElement = document.querySelector(".account-email");
    console.log(email, password, emailElement);
    if(email == null && password == null){
        window.location.href = "/login";
    }
    else {
        emailElement.innerHTML = email;
    }
}