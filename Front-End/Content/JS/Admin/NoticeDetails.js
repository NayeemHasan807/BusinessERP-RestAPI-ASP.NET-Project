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
                var html=`<dl class="dl-horizontal">
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
                    
                        </dl>
                        <div>
                            <a href="NoticeEdit.html?NoticeId=`+NoticeId+`" id="NoticeEditLink">
                                <button type="button">
                                    Edit
                                </button>
                            </a>
                            <a href="ViewAllNotice.html">
                                <button type="button">
                                    Back
                                </button>
                            </a>
                        </div>`;
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
});