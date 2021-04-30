$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var EmployeeId = url.searchParams.get("EmployeeId");
    console.log(EmployeeId);
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/employees/"+EmployeeId,
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete: function (xmlHttp,status) {
            if(xmlHttp.status=200)
            {
                var data = xmlHttp.responseJSON;
                console.log(data);
                var image=document.getElementById("ProfilePicture")
                image.src ="http://localhost:51045/"+data.employee.profilePicture;
                $("#EmployeeName").html(data.employee.employeeName);
                $("#UserName").html(data.employee.userName);
                $("#Email").html(data.employee.email);
                $("#Gender").html(data.employee.gender);
                $("#DateOfBirth").html(data.employee.dateOfBirth);
                $("#Address").html(data.employee.address);
                $("#JoiningDate").html(data.employee.joiningDate);
                $("#Status").html(data.employee.status);
                $("#JobTitle").html(data.jobTitle.jobTitle);
            }
            else
            {
                var html=`<div class="alert alert-primary">
                            <p>No employee of id `+EmployeeId+`</p>
                        </div>`;
                $("#workspace").html();
            }
        }
    });
    $("#Delete").click(function () { 
        $.ajax({
            url: "http://localhost:51045/api/employees/"+EmployeeId,
            type: "DELETE",
            headers:"Content-Type:application/json",
            headers:{
                "Authorization":"basic "+Cookies.get("Authenticatior")
            },
            complete: function (xmlHttp,status) {
                if(xmlHttp.status==204)
                {
                    window.location.replace("http://127.0.0.1:5500/Views/Employee/Index.html");
                }
            }
        });
        
    });
});