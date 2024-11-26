

// Registration
let user_name = document.querySelector(".user_name");
let user_email = document.querySelector(".user_email");
let user_password = document.querySelector(".user_password");
let btn_google = document.querySelector(".btn-google");
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

        window.location.href = "../../index.html";
    }
});



// Monkey Expression
let icon_monekey = document.querySelector(".icon-monekey");
let eles = [user_name, user_email, user_password, btn_register];
let imojies = ["🙉", "🙉", "🙈", "🙊"];
eles.forEach(element => {
    element.addEventListener("click", function() {
        icon_monekey.textContent = imojies[eles.indexOf(element)];
    });
});




// When I click to google or facebook icon
let auto_registre = document.querySelectorAll(".auto_registre");
let message = document.querySelector(".message");
auto_registre.forEach(element => {
    element.addEventListener("click", function() {
        setTimeout(() => {
            message.classList.add("hidden");
            message.classList.remove("block");
        }, 2000);
        message.classList.remove("hidden");
        message.classList.add("block");
    });
});








