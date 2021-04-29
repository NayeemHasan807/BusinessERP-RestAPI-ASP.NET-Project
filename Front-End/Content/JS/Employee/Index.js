$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/employees",
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
                                <th>
                                    Action
                                </th>
                            </tr>`;
                for (var i = 0; i < data.length; i++) {
                    if(data[i].userName == Cookies.get("UserName"))
                    {
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
                                <td>
                                    None
                                </td>
                            </tr>`;
                        continue;
                    }
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
                            <td>
                                <a href="Edit.html?EmployeeId=`+data[i].employeeId+`">Edit</a> |
                                <a href="Delete.html?EmployeeId=`+data[i].employeeId+`">Delete</a>
                            </td>
                        </tr>`;
                }
                html+="</table>";
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<div class="alert alert-primary">
                            <p>No employees to show in the list</p>
                        </div>`;
                $("#show").html(html);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });

    $("#searchkey").keyup(function(){ 
        $.ajax({
            type: "GET",
            url: "http://localhost:51045/api/employees/search",
            headers:"Content-Type:application/json",
            headers:{
                "Authorization":"basic "+Cookies.get("Authenticatior")
            },
            data:{
                "searchkey":$("#searchkey").val()
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
                                    <th>
                                        Action
                                    </th>
                                </tr>`;
                    for (var i = 0; i < data.length; i++) {
                        if(data[i].userName == Cookies.get("UserName"))
                        {
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
                                    <td>
                                        None
                                    </td>
                                </tr>`;
                            continue;
                        }
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
                                <td>
                                    <a href="Edit.html?EmployeeId=`+data[i].employeeId+`">Edit</a> |
                                    <a href="Delete.html?EmployeeId=`+data[i].employeeId+`">Delete</a>
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
    $("#reload").click(function () { 
        location.reload();
    });
});