$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/employeetexts/"+Cookies.get("UserName")+"/index",
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete:function(xmlHttp,status){
            if(xmlHttp.status==200)
            {
                var data=xmlHttp.responseJSON;
                console.log(data);
                var html=`<table style="background-color:silver" id="view">
                            <tr>
                                <th>
                                    From
                                </th>
                                <th>
                                    TextBody
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>`;
                for (var i = 0; i < data.length; i++) {
                    html+=`<tr>
                            <td>
                                `+data[i].senderUserName+`
                            </td>
                            <td>
                                `+data[i].textBody+`
                            </td>
                            <td>
                                 <a href="Reply.html?ReceiverUserName=`+data[i].senderUserName+`">Reply</a>
                            </td>
                        </tr>`;
                }
                html+="</table>";
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<div class="alert alert-primary">
                            <p>No received text to show</p>
                        </div>`;
                $("#show").html(html);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });
});