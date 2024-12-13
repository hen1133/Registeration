
const userName = document.querySelector("#userName");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const registerBtn = document.querySelector("#registerBtnn");
const successMsg = document.querySelector("#successMsg");
const errorMsg = document.querySelector("#errorMsg");
const form = document.querySelector("form");

let usersArray = [];
if (localStorage.getItem("Users") !== null) {
    usersArray = JSON.parse(localStorage.getItem("Users"));
    console.log(usersArray);
}

function signUp() {
    if (
        validateInputs(userName, "msgName") &&
        validateInputs(userEmail, "msgEmail") &&
        validateInputs(userPassword, "msgPass") &&
        isUniqueEmail(userEmail.value.trim())
    ) {
        var user = {
            name: userName.value.trim(),
            email: userEmail.value.trim(),
            pass: userPassword.value,
        };

        usersArray.push(user);
        localStorage.setItem("Users", JSON.stringify(usersArray));

        successMsg.classList.replace("d-none", "d-block");
        setTimeout(() => {
            window.location.href = "../sign_in/login.html";
        }, 2000);
    }
}

function isUniqueEmail(email) {
    for (var i = 0; i < usersArray.length; i++) {
        if (usersArray[i].email.toLowerCase() === email.toLowerCase()) {
            errorMsg.classList.replace("d-none", "d-block");
            return false;
        }
    }
    return true;
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

registerBtn.addEventListener("click", signUp);
form.addEventListener("submit", (eventInfo) => {
    eventInfo.preventDefault();
});
userName.addEventListener("input", () => {
    validateInputs(userName, "msgName");
});
userEmail.addEventListener("input", () => {
    validateInputs(userEmail, "msgEmail");
});
userPassword.addEventListener("input", () => {
    validateInputs(userPassword, "msgPass");
});
