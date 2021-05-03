$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var Suggest = url.searchParams.get("Suggest")
    console.log(Suggest);
    if(Suggest=="Yes")
    {
        $("#msg").html(`<br />
                        "You have to login first to view product details or purchase from our site. If you are not a member then register now!"
                        <br/>
                        <a href="Registration.html" style="color:cyan;">Go To Registration</a>
                        `);
    }

    $("#Login").click(function () {
        var value= $("#UserName").val()+":"+$("#Password").val();
        console.log(value);
        $.ajax({
            type: "GET",
            url: "http://localhost:51045/api/users",
            headers:"Content-Type:application/json",
            data: {
                "userName":$("#UserName").val(),
                "password":$("#Password").val()
            },
            complete:function(xmlHttp,status){
                if(xmlHttp.status==200)
                {
                    var data=xmlHttp.responseJSON;
                    Cookies.set("Authenticatior",btoa(value));
                    Cookies.set("UserName",data.userName);
                    Cookies.set("Password",btoa(data.password));
                    Cookies.set("UserType",data.userType);
                    if(Cookies.get("UserType")=="Admin")
                    {
                        window.location.replace("http://127.0.0.1:5500/Views/Admin/Index.html");
                    }
                    else if(Cookies.get("UserType")=="Customer")
                    {
                        Cookies.set("UserStatus",data.userStatus)
                        if(data.userStatus=="Active")
                        {
                            window.location.replace("http://127.0.0.1:5500/Views/Customer/Index.html");
                        }
                        else
                        {
                            $("#msg").html(`<br />
                            <a href="ContactWithSupportForUnblock.html" style="color:cyan;">Contact with support</a>
                            <br/>`);
                        }
                    }
                    else
                    {
                        $("#msg").html("Currently you are not allowed to login");
                    }
                }
                else
                {
                    $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
                }
            } 
        });
    });
});
