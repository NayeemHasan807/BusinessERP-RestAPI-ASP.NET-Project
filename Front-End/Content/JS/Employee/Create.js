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
                var str='<option value="">None</option>';
                var data=xmlHttp.responseJSON;
                for (var i = 0; i < data.length; i++) {
                    
                    str+="<option value="+data[i].jobId+">"+data[i].jobTitle+"</option>";
                }
    
                $("#JobId").html(str);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });
    $("#Add").click(function () {
        var EmployeeNameError = document.getElementById("EmployeeNameError");
        var EmployeeName = document.getElementById("EmployeeName").value;
        var a=false;
        var UserNameError = document.getElementById("UserNameError");
        var UserName = document.getElementById("UserName").value;
        var EmailError = document.getElementById("EmailError");
        var Email = document.getElementById("Email").value;
        var c=false;
        var GenderError = document.getElementById("GenderError");
        var Male = document.getElementById("Male").checked;
        var Female = document.getElementById("Female").checked;
        var Other = document.getElementById("Other").checked;
        var d=false;
        var DateOfBirthError = document.getElementById("DateOfBirthError");
        var DateOfBirth = document.getElementById("DateOfBirth").value;
        var e=false;
        var AddressError = document.getElementById("AddressError");
        var Address = document.getElementById("Address").value;
        var f=false;
        var JoiningDateError = document.getElementById("JoiningDateError");
        var JoiningDate = document.getElementById("JoiningDate").value;
        var g=false;
        var JobIdError = document.getElementById("JobIdError");
        var JobId = document.getElementById("JobId").value;
        var h=false;
        var ImageError = document.getElementById("ImageError");
        var Image = document.getElementById("Image").value;
        var i=false;
        if( EmployeeName != "")
        {
            var word = EmployeeName.split(" ");
            var count = word.length;
            if ( count >= 2) 
            {
                if(EmployeeName[0]=='a' || EmployeeName[0]=='b'  || EmployeeName[0]=='c' || EmployeeName[0]=='d'  || EmployeeName[0]=='e' || EmployeeName[0]=='f'  || 
                    EmployeeName[0]=='g' || EmployeeName[0]=='h'  || EmployeeName[0]=='i' || EmployeeName[0]=='j'  || EmployeeName[0]=='k' || EmployeeName[0]=='l'  || 
                    EmployeeName[0]=='m' || EmployeeName[0]=='n'  || EmployeeName[0]=='o' || EmployeeName[0]=='p'  || EmployeeName[0]=='q' || EmployeeName[0]=='r'  || 
                    EmployeeName[0]=='s' || EmployeeName[0]=='t'  || EmployeeName[0]=='u' || EmployeeName[0]=='v'  || EmployeeName[0]=='w' || EmployeeName[0]=='x'  || 
                    EmployeeName[0]=='y' || EmployeeName[0]=='z'  || EmployeeName[0]=='A' || EmployeeName[0]=='B'  || EmployeeName[0]=='C' || EmployeeName[0]=='D'  || 
                    EmployeeName[0]=='E' || EmployeeName[0]=='F'  || EmployeeName[0]=='G' || EmployeeName[0]=='H'  || EmployeeName[0]=='I' || EmployeeName[0]=='J'  || 
                    EmployeeName[0]=='K' || EmployeeName[0]=='L'  || EmployeeName[0]=='M' || EmployeeName[0]=='N' || EmployeeName[0]=='O' || EmployeeName[0]=='P'  || 
                    EmployeeName[0]=='Q' || EmployeeName[0]=='R'  || EmployeeName[0]=='S' || EmployeeName[0]=='T'  || EmployeeName[0]=='U' || EmployeeName[0]=='V'  || 
                    EmployeeName[0]=='W' || EmployeeName[0]=='X'  || EmployeeName[0]=='Y' || EmployeeName[0]=='Z')
                {
                    var decision = "valid";
                    for(i=0 ; i < EmployeeName.length ; i++)
                    {
                        if(EmployeeName[i]=='a' || EmployeeName[i]=='b'  || EmployeeName[i]=='c' || EmployeeName[i]=='d'  || EmployeeName[i]=='e' || EmployeeName[i]=='f'  || 
                            EmployeeName[i]=='g' || EmployeeName[i]=='h'  || EmployeeName[i]=='i' || EmployeeName[i]=='j'  || EmployeeName[i]=='k' || EmployeeName[i]=='l'  || 
                            EmployeeName[i]=='m' || EmployeeName[i]=='n'  || EmployeeName[i]=='o' || EmployeeName[i]=='p'  || EmployeeName[i]=='q' || EmployeeName[i]=='r'  || 
                            EmployeeName[i]=='s' || EmployeeName[i]=='t'  || EmployeeName[i]=='u' || EmployeeName[i]=='v'  || EmployeeName[i]=='w' || EmployeeName[i]=='x'  || 
                            EmployeeName[i]=='y' || EmployeeName[i]=='z'  || EmployeeName[i]=='A' || EmployeeName[i]=='B'  || EmployeeName[i]=='C' || EmployeeName[i]=='D'  || 
                            EmployeeName[i]=='E' || EmployeeName[i]=='F'  || EmployeeName[i]=='G' || EmployeeName[i]=='H'  || EmployeeName[i]=='I' || EmployeeName[i]=='J'  || 
                            EmployeeName[i]=='K' || EmployeeName[i]=='L'  || EmployeeName[i]=='M' || EmployeeName[i]=='N' || EmployeeName[i]=='O' || EmployeeName[i]=='P'  || 
                            EmployeeName[i]=='Q' || EmployeeName[i]=='R'  || EmployeeName[i]=='S' || EmployeeName[i]=='T'  || EmployeeName[i]=='U' || EmployeeName[i]=='V'  || 
                            EmployeeName[i]=='W' || EmployeeName[i]=='X'  || EmployeeName[i]=='Y' || EmployeeName[i]=='Z' || EmployeeName[i]=='-' || EmployeeName[i]=='.' || EmployeeName[i]==' ')					
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
                        EmployeeNameError.innerHTML = "Can contain a-z or A-Z or dot(.) or dash(-)";
                    }
                }
                else
                {
                    EmployeeNameError.innerHTML = "Must start with a letter";
                }
            }
            else
            {
                EmployeeNameError.innerHTML = "Contains at least two words";
            }	

        }
        else
        {
            EmployeeNameError.innerHTML = "Cannot be empty";
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
        if( Male==true || Female==true || Other==true)
        {
            d=true;
        }
        else
        {
            GenderError.innerHTML="Must need to be selected";
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
        if( JoiningDate != "")
        {
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = String(today.getFullYear());
            var today = yyyy+'-'+mm+'-'+dd;
            var test = today.split("-");
            var devide = JoiningDate.split("-");
            if(devide[0]<=test[0] & devide[1]<=test[1] & devide[2]<=test[2])
            {
                g=true;
            }
            else
            {
                JoiningDateError.innerHTML="Must not extend current date";
            }
        }
        else
        {
            JoiningDateError.innerHTML="Can not be empty";
        }
        if( JobId != "")
        {
            h=true;
        }
        else
        {
            JobIdError.innerHTML="Can not be empty";
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
                i=true;
            }
            else
            {
                ImageError.innerHTML = "'jpeg' or 'png' is only acceptable";
            }
        }
        else
        {
            ImageError.innerHTML="Can not be empty";
        }
        var Gender ="";
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
        if(a==true & c==true & d==true & e==true & f==true & g==true & h==true & i==true)
        {
            if( UserName != "")
            {
                if( UserName.length>3)
                {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:51045//api/users/check",
                        headers:"Content-Type:application/json",
                        headers:{
                            "Authorization":"basic "+Cookies.get("Authenticatior")
                        },
                        data:{
                            "userName":UserName
                        },
                        complete:function(xmlHttp,status){
                            if(xmlHttp.status==204)
                            {
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost:51045/api/employees",
                                    headers:"Content-Type:application/json",
                                    headers:{
                                        "Authorization":"basic "+Cookies.get("Authenticatior")
                                    },
                                    data:{
                                        "employeeName":EmployeeName,
                                        "userName":UserName,
                                        "email":Email,
                                        "gender":Gender,
                                        "dateOfBirth":DateOfBirth,
                                        "Address":Address,
                                        "joiningDate":JoiningDate,
                                        "Status":"Active",
                                        "profilePicture":"#",
                                        "jobId":JobId
                                    },
                                    complete:function(xmlHttp,status){
                                        if(xmlHttp.status==201)
                                        {
                                            var data = xmlHttp.responseJSON;
                                            var employeeId = data.employeeId
                                            var property = document.getElementById("Image").files[0];
                                            var formdata = new FormData();
                                            formdata.append("image",property);
                                            $.ajax({
                                                type: "POST",
                                                url: "http://localhost:51045/api/employees/"+employeeId+"/addprofilepicture",
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
                                                        window.location.replace("http://127.0.0.1:5500/Views/Employee/Index.html");
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
                                            $("#msg").html(xmlHttp.status);
                                        }
                                    }
                                });
                            }
                            else
                            {
                                UserNameError.innerHTML="This username is taken"
                            }
                        }
                    });
                }
                else
                {
                    UserNameError.innerHTML="Must need to be atlist 3 character";
                }
            }
            else
            {
                UserNameError.innerHTML="Can not be empty";
            }
        }
        else
        {
            $("#msg").html("Some problem occured. Please try again");
        }
        
    });
    $("#EmployeeName").click(function () {
        EmployeeNameError.innerHTML="";
    });
    $("#UserName").click(function () {
        UserNameError.innerHTML="";
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
    $("#JoiningDate").click(function () {
        JoiningDateError.innerHTML="";
    });
    $("#JobId").click(function () {
        JobIdError.innerHTML="";
    });
    $("#Image").click(function () {
        ImageError.innerHTML="";
    });
    $("#reset").click(function () { 
        EmployeeNameError.innerHTML="";
        UserNameError.innerHTML-"";
        EmailError.innerHTML="";
        GenderError.innerHTML="";
        DateOfBirthError.innerHTML="";
        AddressError.innerHTML="";
        JoiningDateError.innerHTML="";
        JobIdError.innerHTML="";
        ImageError.innerHTML="";
    });
});
