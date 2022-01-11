

function getDetails() {


    
    const loginBtn = document.querySelector(".login-btn");

    loginBtn.addEventListener("click",() => {
        const email = document.querySelector("input.email").value;
        const password = document.querySelector("input.password").value;
        console.log(email, password)

        fetch("./users.json")
        .then((response) => response.json())
        .then((users) => {
            
            users.forEach(user => {
                if (email == user.email && password == user.password) {
                    sessionStorage.setItem("email", user.email);
                    sessionStorage.setItem("password", user.password);
                    window.location.href = "http://127.0.0.1:5500/";
                } else{
                    console.log("failed");
                }
            });
        });
    });
        
        
    
   
    
};


getDetails();


