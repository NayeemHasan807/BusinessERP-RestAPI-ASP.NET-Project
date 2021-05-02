$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var Conformation = url.searchParams.get("Conformation");
    console.log(Conformation);
    if(Conformation=="SuppReqSent")
    {
        $("#Conformation").html("<div class='alert alert-primary'>Your request is send to support. We will contact with you via mail within 24hours</div>");
    }
    
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