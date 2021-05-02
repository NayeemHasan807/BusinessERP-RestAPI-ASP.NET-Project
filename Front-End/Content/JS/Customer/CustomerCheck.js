$(document).ready(function () {
    if(Cookies.get("UserType")!="Customer" & Cookies.get("UserStatus")!="Active")
    {
        window.location.replace("http://127.0.0.1:5500/Views/Home/Login.html");
    }
    else
    {
        $(".subtitle").html(Cookies.get("UserType"));
    }
});