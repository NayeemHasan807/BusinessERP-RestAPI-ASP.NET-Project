$(document).ready(function () {
    $("#Send").click(function () {
        var SenderUserName = Cookies.get("UserName");
        var ReceiverUserNameError = document.getElementById("ReceiverUserNameError");
        var ReceiverUserName = $("#ReceiverUserName").val();
        var TextBodyError = document.getElementById("TextBodyError");
        var TextBody = $("#TextBody").val();
        var a=false;
        var msg= $("#msg");
        if( TextBody != "")
        {
            if(TextBody.length<=500)
            {
                console.log("in");
                a=true;
            }
            else
            {
                TextBodyError.innerHTML="Input text length must need to be 10-30";
            }
        }
        else
        {
            TextBodyError.innerHTML="Can not be empty";
        }
        if(a==true)
        {
            if( ReceiverUserName != "")
            {
                if(ReceiverUserName != Cookies.get("UserName"))
                {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:51045//api/users/check",
                        headers:"Content-Type:application/json",
                        headers:{
                            "Authorization":"basic "+Cookies.get("Authenticatior")
                        },
                        data:{
                            "userName":ReceiverUserName
                        }, 
                        complete:function(xmlHttp,status)
                        {
                            if(xmlHttp.status==200)
                            {
                                console.log("hoyna kan");
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost:51045/api/employeetexts",
                                    headers:"Content-Type:application/json",
                                    headers:{
                                        "Authorization":"basic "+Cookies.get("Authenticatior")
                                    },
                                    data:{
                                        "senderUserName":SenderUserName,
                                        "receiverUserName":ReceiverUserName,
                                        "textBody":TextBody
                                    },
                                    complete:function(xmlHttp,status){
                                        if(xmlHttp.status==201)
                                        {
                                            window.location.replace("http://127.0.0.1:5500/Views/EmployeeText/SendByMe.html");
                                        }
                                        else
                                        {
                                            $("#msg").html(xmlHttp.status);
                                        }
                                    }
                                });
                            }
                            else
                            {
                                ReceiverUserNameError.innerHTML="There is no employee with this user name";
                            }
                        }
                    });
                }
                else
                {
                    ReceiverUserNameError.innerHTML="Not possible to send yourself text";
                }
            }
            else
            {
                ReceiverUserNameError.innerHTML="Can not be empty";
            }
        }
        else
        {
            $("#msg").html("Some problem occured. Please try again");
        }
    });
    $("#ReceiverUserName").click(function () {
        ReceiverUserNameError.innerHTML="";
    });
    $("#TextBody").click(function () {
        TextBodyError.innerHTML="";
    });
    $("#Reset").click(function () { 
        ReceiverUserNameError.innerHTML="";
        TextBodyError.innerHTML="";
        msg.innerHTML="";
    });
});