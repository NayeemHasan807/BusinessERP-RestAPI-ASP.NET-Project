$(document).ready(function () {
    if(Cookies.get("UserType")==null)
    {
        window.location.replace("http://127.0.0.1:5500/Views/Home/Login.html");
    }
    else
    {
        $(".subtitle").html(Cookies.get("UserType"));
        $("#back").attr("href", "http://127.0.0.1:5500/Views/"+Cookies.get("UserType")+"/Index.html")
    }
});