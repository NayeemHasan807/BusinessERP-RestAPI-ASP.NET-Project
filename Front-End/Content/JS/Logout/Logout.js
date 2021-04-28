$(document).ready(function () {
    Cookies.remove("Authenticatior");
    Cookies.remove("UserName");
    Cookies.remove("Password");
    Cookies.remove("UserType");
    window.location.replace("http://127.0.0.1:5500/Views/Home/Index.html");
});