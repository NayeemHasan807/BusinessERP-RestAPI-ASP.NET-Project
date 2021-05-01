$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/admins/notice",
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
                                    NoticeTitle
                                </th>
                                <th>
                                    ReceiverType
                                </th>
                                <th>Operation</th>
                            </tr>`;
                for (var i = 0; i < data.length; i++) {
                    html+=`<tr>
                            <td>
                                `+data[i].noticeTitle+`
                            </td>
                            <td>
                                `+data[i].receiverType+`
                            </td>
                            <td>
                                <a href="NoticeEdit.html?NoticeId=`+data[i].noticeId+`">Edit</a> |
                                <a href="NoticeDetails.html?NoticeId=`+data[i].noticeId+`">Details</a> |
                                <a href="NoticeDelete.html?NoticeId=`+data[i].noticeId+`">Delete</a>
                            </td>
                        </tr>`;
                }
                html+="</table>";
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<div class="alert alert-primary">
                            <p>No notice to show in the list</p>
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