$(document).ready(function () {
    $("#Send").click(function () {
        var SenderUserName = Cookies.get("UserName");
        var UserType = Cookies.get("UserType");
        var RequestSubjectError = $("#RequestSubjectError");
        var RequestSubject = $("#RequestSubject").val();
        var a=false;
        var RequestBodyError = $("#RequestBodyError");
        var RequestBody = $("#RequestBody").val();
        var b=false;
        var msg= $("#msg");
        if( RequestSubject != "")
        {
            if(RequestSubject.length>=5 & RequestSubject.length<=100)
            {
                a=true;
            }
            else
            {
                RequestSubjectError.html("Input text length must need to be 10-30");
            }
        }
        else
        {
            RequestSubjectError.html("Can not be empty");
        }
        if( RequestBody != "")
        {
            if(RequestBody.length>=10 & RequestBody.length<=500)
            {
                b=true;
            }
            else
            {
                RequestBodyError.html("Input text length must need to be 20-200");
            }
        }
        else
        {
            RequestBodyError.html("Can not be empty");
        }
        if(a==true & b==true)
        {
            $.ajax({
                type: "POST",
                url: "http://localhost:51045/api/customers/supportrequest",
                headers:"Content-Type:application/json",
                headers:{
                    "Authorization":"basic "+Cookies.get("Authenticatior")
                },
                data:{
                    "requestSubject":RequestSubject,
                    "requestBody":RequestBody,
                    "senderUserName":SenderUserName,
                    "userType":UserType
                },
                complete:function(xmlHttp,status){
                    if(xmlHttp.status==201)
                    {
                        window.location.replace("http://127.0.0.1:5500/Views/Customer/Index.html?Conformation=SuppReqSent");
                    }
                    else
                    {
                        $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
                    }
                }
            });
        }
        else
        {
            $("#msg").html("Some problem occured. Please try again");
        }
    });
    $("#NoticeTitle").click(function () {
        RequestSubjectError.innerHTML="";
    });
    $("#RequestBody").click(function () {
        RequestBodyError.innerHTML="";
    });
    $("#Reset").click(function () { 
        RequestSubjectError.innerHTML="";
        RequestBodyError.innerHTML="";
        msg.innerHTML="";
    });
});