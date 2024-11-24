

let user_name = document.querySelector(".user_name");
let user_email = document.querySelector(".user_email");
let user_password = document.querySelector(".user_password");
let btn_google = document.querySelector(".btn-google");
let btn_facebook = document.querySelector(".btn-facebook");
let btn_register = document.querySelector(".registre-btn");


btn_register.addEventListener("click", function() {
    if (!user_name.value || !user_email.value || !user_password.value) {
        // Add danger Class
        user_name.classList.add("danger");
        user_email.classList.add("danger");
        user_password.classList.add("danger");
    } else {
        // Add success Class
        user_name.classList.add("success");
        user_email.classList.add("success");
        user_password.classList.add("success");

        // Store data in localStorage
        const myObj = { 
            user_name: user_name.value, 
            user_email: user_email.value,
            user_password: user_password.value
        };
        const myJSON = JSON.stringify(myObj);
        localStorage.setItem("PersonlInfo", myJSON);
    }
});










