$(document).ready(function () {
    $("#subtitle").html(Cookies.get("UserType"));
    $("#employeename").html(Cookies.get("UserName"));
});