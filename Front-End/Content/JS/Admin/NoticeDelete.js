$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var NoticeId = url.searchParams.get("NoticeId");
    $("#NoticeEditLink").prop("href",`NoticeEdit.html?NoticeId=`+NoticeId);
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
                var html=`
                            <dl class="dl-horizontal">
                            <dt>
                                NoticeTitle
                            </dt>
                    
                            <dd>
                                `+data.noticeTitle+`
                            </dd>
                    
                            <dt>
                                NoticeBody
                            </dt>
                    
                            <dd>
                                `+data.noticeBody+`
                            </dd>
                    
                            <dt>
                                ReceiverType
                            </dt>
                    
                            <dd>
                                `+data.receiverType+`
                            </dd>
                    
                        </dl>`;
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<br/>
                        <div class="alert alert-primary">
                            <p>No notice with this id `+NoticeId+`</p>
                        </div>`;
                $("#show").html(html);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });
    $("#Delete").click(function () { 
        $.ajax({
            type: "DELETE",
            url: "http://localhost:51045/api/admins/notice/"+NoticeId,
            headers:"Content-Type:application/json",
            headers:{
                "Authorization":"basic "+Cookies.get("Authenticatior")
            },
            complete:function(xmlHttp,status){
                if(xmlHttp.status==204)
                {
                    window.location.replace("http://127.0.0.1:5500/Views/Admin/ViewAllNotice.html");
                }
            }
        });
        
    });
});