// write here for login

let submit = document.querySelector(".submit");
let name = document.querySelector(".name");

submit.addEventListener("click", function() {
    console.log(name.value);

    localStorage.setItem('PersonalInfo', JSON.stringify(name.value));

    let storedArray = JSON.parse(localStorage.getItem('PersonalInfo'));

    console.log(storedArray);


});




