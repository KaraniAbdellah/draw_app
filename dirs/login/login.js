
// Mokey Expression
let login_btn = document.querySelector(".login-btn");
let icon_monekey = document.querySelector(".icon-monekey");
let user_email = document.querySelector(".user_email");
let user_password = document.querySelector(".user_password");


let eles = [user_email, user_password, login_btn];
let imojies = ["🙉", "🙈", "🙊"];
eles.forEach(element => {
    element.addEventListener("click", function() {
        icon_monekey.textContent = imojies[eles.indexOf(element)];
    });
});

login_btn.addEventListener("click", function() {
    if (!user_email.value || !user_password.value) {
        // Add danger Class
        user_email.classList.add("danger");
        user_password.classList.add("danger");
    } else {
        // Add success Class
        user_email.classList.add("success");
        user_password.classList.add("success");

        // Login Verification
        const MyInfo = JSON.parse(localStorage.getItem("PersonlInfo"));
        let user_email_local = MyInfo.user_email;
        let user_password_local = MyInfo.user_password;
        console.log(user_email, user_password);
        if (user_email.value == user_email_local && user_password_local == user_password.value) {
            window.location.href = "../../index.html";
        }
    }
});

