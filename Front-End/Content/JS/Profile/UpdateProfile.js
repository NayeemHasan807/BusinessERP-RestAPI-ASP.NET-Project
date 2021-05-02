$(document).ready(function () {
    var UserName = Cookies.get("UserName");
    var Password = atob(Cookies.get("Password"));
    var UserType = Cookies.get("UserType");
    var ProfilePicture = "";
    var JobId="";
    var JobTitle="";
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
                //console.log(data);
                if(UserType!="Customer" & UserType!="Vendor")
                {
                    $("#HName").html(data.profileview.name);
                    //console.log(data);
                    ProfilePicture = data.profileview.profilePicture;
                    document.getElementById("Name").value=data.profileview.name;
                    document.getElementById("UserName").value=data.profileview.userName;
                    document.getElementById("Email").value=data.profileview.email;
                    var dob= data.profileview.dateOfBirth.split("T");
                    //console.log(dob[0]);
                    $("#DateOfBirth").val(dob[0]);
                    document.getElementById("Address").value=data.profileview.address;
                    document.getElementById("Status").value=data.profileview.status;
                    var jd= data.profileview.joiningDate.split("T");
                    //console.log(jd[0]);
                    var VJD =  `<td>Joining Date :</td>
                                <td>
                                    <input type="date" id="JoiningDate" name="JoiningDate" value="`+jd[0]+`" disabled/>
                                </td>`
                    $("#VJoiningDate").html(VJD);
                    JobId = data.jobDetails.jobId;
                    JobTitle = data.jobDetails.jobTitle;
                    var VJID = `<td>Job Title :</td>
                                <td>
                                    <select id="JobId" name="JobId" disabled> 
                                        <option value="`+JobId+`">`+JobTitle+`</option>
                                    </select>
                                </td>`;
                    $("#VJobId").html(VJID);
                    var Gender=data.profileview.gender;
                    if(Gender=="Male")
                    {
                        $("#Male").prop('checked', true);
                    }
                    else if(Gender=="Female")
                    {
                        $("#Female").prop('checked', true);
                    }
                    else
                    {
                        $("#Other").prop('checked', true);
                    }
                }
                else
                {
                    $("#HName").html(data.name);
                    //console.log(data);
                    ProfilePicture = data.profilePicture;
                    document.getElementById("Name").value=data.name;
                    document.getElementById("UserName").value=data.userName;
                    document.getElementById("Email").value=data.email;
                    var dob= data.dateOfBirth.split("T");
                    //console.log(dob[0]);
                    $("#DateOfBirth").val(dob[0]);
                    document.getElementById("Address").value=data.address;
                    document.getElementById("Status").value=data.status;
                    var Gender=data.gender;
                    if(Gender=="Male")
                    {
                        $("#Male").prop('checked', true);
                    }
                    else if(Gender=="Female")
                    {
                        $("#Female").prop('checked', true);
                    }
                    else
                    {
                        $("#Other").prop('checked', true);
                    }
                }

            }
            else
            {
                var html=`<div class="alert alert-primary">
                            <p>No data found</p>
                        </div>`;
                $("#workspace").html();
            }
        }
    });
    $("#Update").click(function () {
        var NameError = document.getElementById("NameError");
        var Name = document.getElementById("Name").value;
        var a=false;
        var EmailError = document.getElementById("EmailError");
        var Email = document.getElementById("Email").value;
        var c=false;
        var DateOfBirthError = document.getElementById("DateOfBirthError");
        var DateOfBirth = document.getElementById("DateOfBirth").value;
        var e=false;
        var AddressError = document.getElementById("AddressError");
        var Address = document.getElementById("Address").value;
        var f=false;
        var Image = document.getElementById("Image").value;
        var ImageError = document.getElementById("ImageError").value;
        var i=false;
        if( Name != "")
        {
            var word = Name.split(" ");
            var count = word.length;
            if ( count >= 2) 
            {
                if(Name[0]=='a' || Name[0]=='b'  || Name[0]=='c' || Name[0]=='d'  || Name[0]=='e' || Name[0]=='f'  || 
                    Name[0]=='g' || Name[0]=='h'  || Name[0]=='i' || Name[0]=='j'  || Name[0]=='k' || Name[0]=='l'  || 
                    Name[0]=='m' || Name[0]=='n'  || Name[0]=='o' || Name[0]=='p'  || Name[0]=='q' || Name[0]=='r'  || 
                    Name[0]=='s' || Name[0]=='t'  || Name[0]=='u' || Name[0]=='v'  || Name[0]=='w' || Name[0]=='x'  || 
                    Name[0]=='y' || Name[0]=='z'  || Name[0]=='A' || Name[0]=='B'  || Name[0]=='C' || Name[0]=='D'  || 
                    Name[0]=='E' || Name[0]=='F'  || Name[0]=='G' || Name[0]=='H'  || Name[0]=='I' || Name[0]=='J'  || 
                    Name[0]=='K' || Name[0]=='L'  || Name[0]=='M' || Name[0]=='N' || Name[0]=='O' || Name[0]=='P'  || 
                    Name[0]=='Q' || Name[0]=='R'  || Name[0]=='S' || Name[0]=='T'  || Name[0]=='U' || Name[0]=='V'  || 
                    Name[0]=='W' || Name[0]=='X'  || Name[0]=='Y' || Name[0]=='Z')
                {
                    var decision = "valid";
                    for(i=0 ; i < Name.length ; i++)
                    {
                        if(Name[i]=='a' || Name[i]=='b'  || Name[i]=='c' || Name[i]=='d'  || Name[i]=='e' || Name[i]=='f'  || 
                            Name[i]=='g' || Name[i]=='h'  || Name[i]=='i' || Name[i]=='j'  || Name[i]=='k' || Name[i]=='l'  || 
                            Name[i]=='m' || Name[i]=='n'  || Name[i]=='o' || Name[i]=='p'  || Name[i]=='q' || Name[i]=='r'  || 
                            Name[i]=='s' || Name[i]=='t'  || Name[i]=='u' || Name[i]=='v'  || Name[i]=='w' || Name[i]=='x'  || 
                            Name[i]=='y' || Name[i]=='z'  || Name[i]=='A' || Name[i]=='B'  || Name[i]=='C' || Name[i]=='D'  || 
                            Name[i]=='E' || Name[i]=='F'  || Name[i]=='G' || Name[i]=='H'  || Name[i]=='I' || Name[i]=='J'  || 
                            Name[i]=='K' || Name[i]=='L'  || Name[i]=='M' || Name[i]=='N' || Name[i]=='O' || Name[i]=='P'  || 
                            Name[i]=='Q' || Name[i]=='R'  || Name[i]=='S' || Name[i]=='T'  || Name[i]=='U' || Name[i]=='V'  || 
                            Name[i]=='W' || Name[i]=='X'  || Name[i]=='Y' || Name[i]=='Z' || Name[i]=='-' || Name[i]=='.' || Name[i]==' ')					
                        {
                            continue;
                        }
                        else
                            decision="invalid";
                    }
                    if(decision=="valid")
                    {
                        a=true;
                    }
                    else
                    {
                        NameError.innerHTML = "Can contain a-z or A-Z or dot(.) or dash(-)";
                    }
                }
                else
                {
                    NameError.innerHTML = "Must start with a letter";
                }
            }
            else
            {
                NameError.innerHTML = "Contains at least two words";
            }	

        }
        else
        {
            NameError.innerHTML = "Cannot be empty";
        }
        if( Email != "")
        {
            var count=0;
            for( i=0 ; i < Email.length ; i++)
            {
                if(Email[i]=='@')
                {
                    count++;
                }
                else
                    continue;
            }
            if(count==1)
            {
                var addret = Email.split("@");
                var dot = addret[1].split(".");
                var last;
                for( i=0 ; i < dot.length ; i++)
                {
                    last = dot[i];
                }
                if( last == "com" || last == "edu")
                {
                    c=true;
                }
                else
                {
                    EmailError.innerHTML = "Must be a valid email address (i.e anything@example.com)";
                }
            }
            else
            {
                EmailError.innerHTML = "Must be a valid email address (i.e anything@example.com)";
            }

        }
        else
        {
            EmailError.innerHTML = "Cannot be empty";
        }
        if( DateOfBirth != "")
        {
            var devide = DateOfBirth.split("-");
            if(devide[0] >=1940 & devide[0] <= 2000 & devide[1] >=1 & devide[1] <= 12 & devide[2] >=1 & devide[2] <= 31)
            {
                e=true;
            }
            else
            {
                DateOfBirthError.innerHTML="Must be in between 1940-2000";
            }
        }
        else
        {
            DateOfBirthError.innerHTML="Can not be empty";
        }
        if( Address != "")
        {
            f=true;
        }
        else
        {
            AddressError.innerHTML="Can not be empty";
        }
        if( Image != "")
        {
            var last;
            var check = Image.toLowerCase().split(".");
            for (var i = 0; i < check.length; i++) 
            {
                var last = check[i];
                continue;
            }
            if( last == "jpeg" || last == "png" || last == "jpg")
            {
                console.log("in");
                i=true;
            }
            else
            {
                ImageError.innerHTML = "'jpeg' or 'png' is only acceptable";
            }
        }
        var Gender ="";
        var Male = document.getElementById("Male").checked;
        var Female = document.getElementById("Female").checked;
        var Other = document.getElementById("Other").checked;
        if(Male==true)
        {
            Gender="Male";
        }
        else if(Female==true)
        {
            Gender="Female";
        }
        else
        {
            Gender="Other";
        }
        if(a==true & c==true & e==true & f==true)
        {
            if(i==true)
            {
                $.ajax({
                    type: "PUT",
                    url: "http://localhost:51045/api/profiles/"+UserType,
                    headers:"Content-Type:application/json",
                    headers:{
                        "Authorization":"basic "+Cookies.get("Authenticatior")
                    },
                    data:{
                        "name" :Name,
                        "userName" :$("#UserName").val(),
                        "email" :Email,
                        "gender" :Gender,
                        "dateOfBirth":DateOfBirth,
                        "address":Address
                    },
                    complete: function (xmlHttp,status) {
                        if(xmlHttp.status==200)
                        {
                            var data = xmlHttp.responseJSON;
                            var employeeId = data.employeeId;
                            var property = document.getElementById("Image").files[0];
                            var formdata = new FormData();
                            formdata.append("image",property);
                            $.ajax({
                                type: "POST",
                                url: "http://localhost:51045/api/profiles/"+UserType+"/"+UserName+"/updateprofilepicture",
                                data: formdata,
                                headers:"Content-Type:multipart/form-data",
                                headers:{
                                    "Authorization":"basic "+Cookies.get("Authenticatior")
                                },
                                contentType:false,
                                cache:false,
                                processData:false,
                                complete:function(xmlHttp,status){
                                    if(xmlHttp.status==201)
                                    {
                                        console.log("ok");
                                        window.location.replace("http://127.0.0.1:5500/Views/Profile/Index.html");
                                    }
                                    else
                                    {
                                        console.log("notok")
                                        $("#msg").html(xmlHttp.status);
                                    }
                                }
                            });  
                        }
                        else
                        {
                            $("#msg").html(xmlHttp.status);
                        }
                    }
                });
            }
            else
            {
                $.ajax({
                    type: "PUT",
                    url: "http://localhost:51045/api/profiles/"+UserType,
                    headers:"Content-Type:application/json",
                    headers:{
                        "Authorization":"basic "+Cookies.get("Authenticatior")
                    },
                    data:{
                        "Name" :Name,
                        "userName" :$("#UserName").val(),
                        "email" :Email,
                        "gender" :Gender,
                        "dateOfBirth":DateOfBirth,
                        "address":Address
                    },
                    complete: function (xmlHttp,status) {
                        if(xmlHttp.status==200)
                        {
                            window.location.replace("http://127.0.0.1:5500/Views/Profile/Index.html");    
                        }
                        else
                        {
                            $("#msg").html(xmlHttp.status);
                        }
                    }
                });
            }
        }
        else
        {
            $("#msg").html("Some problem occured. Please try again");
        }
    });
    $("#Name").click(function () {
        NameError.innerHTML="";
    });
    $("#Email").click(function () {
        EmailError.innerHTML="";
    });
    $("#Gender").click(function () {
        GenderError.innerHTML="";
    });
    $("#DateOfBirth").click(function () {
        DateOfBirthError.innerHTML="";
    });
    $("#Address").click(function () {
        AddressError.innerHTML="";
    });
    $("#Image").click(function () {
        ImageError.innerHTML="";
    });
    $("#Reset").click(function () { 
        NameError.innerHTML="";
        EmailError.innerHTML="";
        GenderError.innerHTML="";
        DateOfBirthError.innerHTML="";
        AddressError.innerHTML="";
        ImageError.innerHTML="";
        $("#Image").val("");
        window.location.reload();
    });
});