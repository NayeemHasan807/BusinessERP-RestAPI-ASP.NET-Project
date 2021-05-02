$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var TextId = url.searchParams.get("TextId");
    console.log(TextId);
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/employeetexts/"+TextId,
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete: function (xmlHttp,status) {
            if(xmlHttp.status==200)
            {
                var data=xmlHttp.responseJSON;
                console.log(data);
                var html=`
                            <dl class="dl-horizontal">
                            <dt>
                                TextBody
                            </dt>
                    
                            <dd>
                                `+data.textBody+`
                            </dd>
                    
                            <dt>
                                ReceiverUserName
                            </dt>
                    
                            <dd>
                                `+data.receiverUserName+`
                            </dd>
                    
                            <dt>
                                SenderUserName
                            </dt>
                    
                            <dd>
                                `+data.senderUserName+`
                            </dd>
                    
                        </dl>`;
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<br/>
                        <div class="alert alert-primary">
                            <p>No notice with this id `+TextId+`</p>
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
            url: "http://localhost:51045/api/employeetexts/"+TextId,
            headers:"Content-Type:application/json",
            headers:{
                "Authorization":"basic "+Cookies.get("Authenticatior")
            },
            complete:function(xmlHttp,status){
                if(xmlHttp.status==204)
                {
                    window.location.replace("http://127.0.0.1:5500/Views/EmployeeText/SendByMe.html");
                }
            }
        });
    });
});