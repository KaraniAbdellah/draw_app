// Not Implmented Yet

let name = document.querySelector(".name");

if (JSON.parse(localStorage.getItem('PersonalInfo'))) {
    let storedArray = JSON.parse(localStorage.getItem('PersonalInfo'));

    console.log(storedArray);
    name.textContent = storedArray;
}



