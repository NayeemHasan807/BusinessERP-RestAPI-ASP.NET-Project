$(document).ready(function () {
    $.ajax({
        method:"GET",
        url:"http://localhost:51045//api/employees/jobcategorylist",
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete:function(xmlHttp,status){
            if(xmlHttp.status==200)
            {
                var str='<option value="0">All</option>';
                var data=xmlHttp.responseJSON;
                for (var i = 0; i < data.length; i++) {
                    
                    str+="<option value="+data[i].jobId+">"+data[i].jobTitle+"</option>";
                }
    
                $("#category").html(str);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });
    $("#search").click(function(){ 
        $.ajax({
            type: "GET",
            url: "http://localhost:51045/api/employees/advancedsearch",
            headers:"Content-Type:application/json",
            headers:{
                "Authorization":"basic "+Cookies.get("Authenticatior")
            },
            data:{
                "searchkey" : $("#searchkey").val(),
                "order"     : $("#order option:selected").val(),
                "category"  : $("#category option:selected").val()
            },
            complete:function(xmlHttp,status){
                if(xmlHttp.status==200)
                {
                    var data=xmlHttp.responseJSON;
                    console.log(data);
                    var html=`<table style="background-color:silver" id="view">
                                <tr>
                                    <th>
                                        EmployeeName
                                    </th>
                                    <th>
                                        UserName
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Gender
                                    </th>
                                    <th>
                                        DateOfBirth
                                    </th>
                                    <th>
                                        ProfilePicture
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th>
                                        JobTitle
                                    </th>
                                </tr>`;
                    for (var i = 0; i < data.length; i++) {
                        html+=`<tr>
                                <td>
                                    `+data[i].employeeName+`
                                </td>
                                <td>
                                    `+data[i].userName+`
                                </td>
                                <td>
                                    `+data[i].email+`
                                </td>
                                <td>
                                    `+data[i].gender+`
                                </td>
                                <td>
                                    `+data[i].dateOfBirth+`
                                </td>
                                <td>
                                    <img src="http://localhost:51045/`+data[i].profilePicture+`" alt="Avater" width="50" height="50" />
                                </td>
                                <td>
                                    `+data[i].status+`
                                </td>
                                <td>
                                    `+data[i].jobId+`
                                </td>
                            </tr>`;
                    }
                    html+="</table>";
                    $("#show").html(html);
                }
                else if(xmlHttp.status==204){
                    var html=`<div class="alert alert-primary">
                                <p>No employees of this name in the list</p>
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
});
