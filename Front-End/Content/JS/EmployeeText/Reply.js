$(document).ready(function () {
    var SenderUserName = Cookies.get("UserName");
    var url_string = window.location.href;
    var url = new URL(url_string);
    var ReceiverUserName = url.searchParams.get("ReceiverUserName");
    console.log(ReceiverUserName);
    $("#ReceiverUserName").val(ReceiverUserName);
    
    $("#Send").click(function () { 
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
            $.ajax({
                type: "POST",
                url: "http://localhost:51045/api/employeetexts/reply",
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
            $("#msg").html("Some problem occured. Please try again");
        }
    });

    $("#TextBody").click(function () {
        TextBodyError.innerHTML="";
    });
    $("#Reset").click(function () { 
        $("#TextBody").val(null);
        TextBodyError.innerHTML="";
        msg.innerHTML="";
    });
});