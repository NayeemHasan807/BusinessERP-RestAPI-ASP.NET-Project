$(document).ready(function () {
    var UserName = Cookies.get("UserName");
    var UserType = Cookies.get("UserType");
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/profiles/"+UserType+"/"+UserName,
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete: function (xmlHttp,status) {
            if(xmlHttp.status=200)
            {
                var data = xmlHttp.responseJSON;
                $("#HName").html(data.profileview.name);
                var image=document.getElementById("ProfilePicture")
                image.src ="http://localhost:51045/"+data.profileview.profilePicture;
                console.log(data);
                if(UserType!="Customer" & UserType!="Vendor")
                {
                    str=`<tr>
                            <td>Name:</td>
                            <td>`+data.profileview.name+`</td>
                        </tr>
                        <tr>
                            <td>Username :</td>
                            <td>`+data.profileview.userName+`</td>
                        </tr>
                        <tr>
                            <td>Email :</td>
                            <td>`+data.profileview.email+`</td>
                        </tr>
                        <tr>
                            <td>Gender :</td>
                            <td>`+data.profileview.gender+`</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth :</td>
                            <td>`+data.profileview.dateOfBirth+`</td>
                        </tr>
                        <tr>
                            <td>Address :</td>
                            <td>`+data.profileview.address+`</td>
                        </tr>
                        <tr>
                            <td>Joining Date :</td>
                            <td>`+data.profileview.joiningDate+`</td>
                        </tr>
                        <tr>
                            <td>Job Title :</td>
                            <td>`+data.jobDetails.jobTitle+`</td>
                        </tr>
                        <tr>
                            <td>Profile Status :</td>
                            <td>`+data.profileview.status+`</td>
                        </tr>`;
                        $("#view").html(str);
                }
                else
                {
                    str=`<tr>
                            <td>Name:</td>
                            <td>`+data.profileview.name+`</td>
                        </tr>
                        <tr>
                            <td>Username :</td>
                            <td>`+data.profileview.userName+`</td>
                        </tr>
                        <tr>
                            <td>Email :</td>
                            <td>`+data.profileview.email+`</td>
                        </tr>
                        <tr>
                            <td>Gender :</td>
                            <td>`+data.profileview.gender+`</td>
                        </tr>
                        <tr>
                            <td>Date Of Birth :</td>
                            <td>`+data.profileview.dateOfBirth+`</td>
                        </tr>
                        <tr>
                            <td>Address :</td>
                            <td>`+data.profileview.address+`</td>
                        </tr>
                        <tr>
                            <td>Profile Status :</td>
                            <td>`+data.profileview.status+`</td>
                        </tr>`;
                        $("#view").html(str);   
                }

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
});