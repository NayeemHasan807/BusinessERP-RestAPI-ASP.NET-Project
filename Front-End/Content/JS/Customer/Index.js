$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/customers",
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        data: {
            "userName":Cookies.get("UserName")
        },
        complete:function(xmlHttp,status){
            if(xmlHttp.status==200)
            {
                var data=xmlHttp.responseJSON;
                $("#customername").html(data.customerName);
                var image=document.getElementById("ProfilePicture")
                image.src ="http://localhost:51045/"+data.profilePicture;
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });
});