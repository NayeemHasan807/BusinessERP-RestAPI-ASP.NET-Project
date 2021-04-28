$(document).ready(function () {
    if(Cookies.get("UserType")!="Admin")
    {
        window.location.replace("http://127.0.0.1:5500/Views/Home/Login.html");
    }
});