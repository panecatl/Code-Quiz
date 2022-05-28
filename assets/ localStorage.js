// local storage
var initial = document.querySelector("contactInfo");

userInfo.addEventListener("click", function(event) {
    var user = {
        userName: initial.ariaValueMax.trim()
    };

    localStorage.setItem("user", JSON.stringify(user));
    localStorage.getItem("user", JSON.stringify(user));
});