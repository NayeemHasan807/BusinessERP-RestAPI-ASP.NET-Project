$(document).ready(function () {
    var UserName = Cookies.get("UserName");
    var CPassword = atob(Cookies.get("Password"));
    console.log(CPassword);
    var UserType = Cookies.get("UserType");
    $("#Update").click(function () { 
        var PasswordError = document.getElementById("PasswordError");
        var Password = document.getElementById("Password").value;
        var a=false;
        var Errors = document.getElementById("Errors");
        var NewPassword = document.getElementById("NewPassword").value;
        var ReNewPassword = document.getElementById("ReNewPassword").value;
        var b=false;
        if(Password!="")
        {
            if(Password==CPassword)
            {
                if(Password.length>=4)
                {
                    a=true;
                }
                else
                {
                    PasswordError.innerHTML="Password minimum length must need to be 4!";
                }
            }
            else
            {
                PasswordError.innerHTML="Current password is wrong!";    
            }
        }
        else
        {
            PasswordError.innerHTML="Can't be empty";
        }
        if(NewPassword!="" & ReNewPassword!="")
        {
            if(NewPassword==ReNewPassword)
            {
                if(NewPassword.length>=4)
                {
                    b=true
                }
                else
                {
                    Errors.innerHTML="New password and retype new password minimum length must need to be 4!";
                }
               
            }
            else
            {
                Errors.innerHTML="New password and retype new password must need to be same!";
            }
        }
        else
        {
            Errors.innerHTML="New password and retype new password must need to be filled!";
        }
        if(a==true & b==true)
        {
            $.ajax({
                type: "PUT",
                url: "http://localhost:51045/api/profiles/"+UserName+"/updatepassword",
                headers:"Content-Type:application/json",
                headers:{
                    "Authorization":"basic "+Cookies.get("Authenticatior")
                },
                data:{
                    "password":Password,
                    "newPassword":NewPassword,
                    "reNewPassword":ReNewPassword
                },
                complete: function (xmlHttp,status) {
                    if(xmlHttp.status==200)
                    {
                        var value= UserName+":"+NewPassword;
                        console.log(value);
                        Cookies.set("Authenticatior",btoa(value));
                        Cookies.set("Password",btoa(NewPassword));
                        window.location.replace("http://127.0.0.1:5500/Views/Profile/Index.html");
                    }
                    else
                    {
                        $("#msg").html(xmlHttp.status);
                    }
                }
            });
        }
        
    });
    
    $("#Password").click(function () {
        PasswordError.innerHTML="";
    });
    $("#NewPassword").click(function () {
        Errors.innerHTML="";
    });
    $("#ReNewPassword").click(function () {
        Errors.innerHTML="";
    });
});