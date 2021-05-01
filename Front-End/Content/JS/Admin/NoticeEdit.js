$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var NoticeId = url.searchParams.get("NoticeId");
    console.log(NoticeId);
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/admins/notice/"+NoticeId,
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete:function(xmlHttp,status){
            if(xmlHttp.status==200)
            {
                var data=xmlHttp.responseJSON;
                console.log(data);
                $("#ReceiverType").val(data.receiverType);
                $("#NoticeTitle").val(data.noticeTitle);
                $("#NoticeBody").val(data.noticeBody);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });
    $("#Update").click(function () {
        var ReceiverTypeError = $("#ReceiverTypeError");
        var ReceiverType = $("#ReceiverType").val();
        var NoticeTitleError = $("#NoticeTitleError");
        var NoticeTitle = $("#NoticeTitle").val();
        var a=false;
        var NoticeBodyError = $("#NoticeBodyError");
        var NoticeBody = $("#NoticeBody").val();
        var b=false;
        var msg= $("#msg");
        if( NoticeTitle != "")
        {
            if(NoticeTitle.length>=10 & NoticeTitle.length<=30)
            {
                a=true;
            }
            else
            {
                NoticeTitleError.html("Input text length must need to be 10-30");
            }
        }
        else
        {
            NoticeTitleError.html("Can not be empty");
        }
        if( NoticeBody != "")
        {
            if(NoticeBody.length>=20 & NoticeBody.length<=200)
            {
                b=true;
            }
            else
            {
                NoticeBodyError.html("Input text length must need to be 20-200");
            }
        }
        else
        {
            NoticeBodyError.html("Can not be empty");
        }
        if(a==true & b==true)
        {
            $.ajax({
                type: "PUT",
                url: "http://localhost:51045/api/admins/notice/"+NoticeId,
                headers:"Content-Type:application/json",
                headers:{
                    "Authorization":"basic "+Cookies.get("Authenticatior")
                },
                data:{
                    "receiverType":ReceiverType,
                    "noticeTitle":NoticeTitle,
                    "noticeBody":NoticeBody
                },
                complete:function(xmlHttp,status){
                    if(xmlHttp.status==200)
                    {
                        window.location.replace("http://127.0.0.1:5500/Views/Admin/ViewAllNotice.html");
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
        NoticeTitleError.innerHTML="";
    });
    $("#NoticeBody").click(function () {
        NoticeBodyError.innerHTML="";
    });
    $("#Reset").click(function () { 
        NoticeTitleError.innerHTML="";
        NoticeBodyError.innerHTML="";
        msg.innerHTML="";
        window.location.reload();
    });
});