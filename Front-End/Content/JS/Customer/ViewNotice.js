$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/customers/notice",
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete:function(xmlHttp,status){
            if(xmlHttp.status==200)
            {
                var data=xmlHttp.responseJSON;
                console.log(data);
                var html=`<table class="table table-striped table-dark">
                            <tr>
                                <th>
                                    Title
                                </th>
                                <th>
                                    Details
                                </th>
                            </tr>`;
                for (var i = 0; i < data.length; i++) {
                    html+=`<tr>
                            <td align="left">
                                `+data[i].noticeTitle+`
                            </td>
                            <td align="left">
                                `+data[i].noticeBody+`
                            </td>
                        </tr>`;
                }
                html+="</table>";
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<div class="alert alert-primary">
                            <p>No notice to view</p>
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