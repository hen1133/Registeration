const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const loginBtn = document.querySelector("#loginBtn");
const successMsg = document.querySelector("#successMsg");
const errorMsg = document.querySelector("#errorMsg");
const form = document.querySelector("form");
let usersArray = [];
if (localStorage.getItem("Users") !== null) {
    usersArray = JSON.parse(localStorage.getItem("Users"));
    console.log(usersArray);
}
function loginUser(){
    errorMsg.classList.replace("d-block", "d-none");
    for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email === userEmail.value && usersArray[i].pass === userPassword.value) {
            successMsg.classList.replace("d-none", "d-block");
            localStorage.setItem("Username", usersArray[i].name);
            setTimeout(() => {
                window.location.href = "../welcom.html"
            }, 2000);
            return;
        }
    }
    errorMsg.classList.replace("d-none", "d-block");
}


function validateInputs(input, msgId) {
    const regex = {
        userName: /^[A-Za-z]{3,20}$/,
        userEmail: /^[A-Za-z0-9._%+-]+@(gmail|outlook|yahoo|msn|hotmail)\.(com|net|org)$/,
        userPassword: /^[A-Z][a-z0-9]{2,}[!@#$]$/,
    };
    var msg = document.getElementById(msgId);
    if (regex[input.id].test(input.value)) {
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        msg.classList.add("d-none");
        return true;
    } else {
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        msg.classList.remove("d-none");
        return false;
    }
}


loginBtn.addEventListener("click", loginUser);
form.addEventListener("submit", (eventInfo) => {
    eventInfo.preventDefault();
    console.log(eventInfo);
})