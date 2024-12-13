const welcomeMessage = document.querySelector("#welcomeMessage");
const logOutBtn = document.querySelector("#logOutBtn");
if (localStorage.getItem("Username")) {
    const userName = localStorage.getItem("Username");
    console.log(userName);
    welcomeMessage.innerHTML = `Welcome ${userName}!`;
}
else {
    welcomeMessage.innerHTML = `You are not logged in, redirecting to login page!`
    setTimeout(() => {
        window.location.href = "sign_in/ login.html";
    }, 2000)
}

const logOut = () => {
    localStorage.removeItem("Username");
    welcomeMessage.innerHTML = "You're now logged out, redirecting to login page!";
    setTimeout(() => {
        window.location.href = "sign_in/login.html";
    }, 2000);
};

logOutBtn.addEventListener("click", logOut);