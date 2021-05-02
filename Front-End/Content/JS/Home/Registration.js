$(document).ready(function () {
    console.log("haha");
    $("#Submit").click(function () {
        var NameError = document.getElementById("NameError");
        var Name = $("#Name").val();
        var a=false;
        var PasswordError = document.getElementById("PasswordError");
        var Password = $("#Password").val();
        var CPasswordError = document.getElementById("CPasswordError");
        var CPassword = $("#CPassword").val();
        var b=false;
        var UserNameError = document.getElementById("UserNameError");
        var UserName = $("#UserName").val();
        var EmailError = document.getElementById("EmailError");
        var Email = $("#Email").val();
        var c=false;
        var GenderError = document.getElementById("GenderError");
        var Gender= $("input[name='Gender']:checked").val();
        var d=false;
        var DateOfBirthError = document.getElementById("DateOfBirthError");
        var DateOfBirth = $("#DateOfBirth").val();
        var e=false;
        var AddressError = document.getElementById("AddressError");
        var Address = $("#Address").val();
        var f=false;
        var UserTypeError = document.getElementById("UserTypeError");
        var UserType = $("#UserType").val();
        var h=false;
        var ImageError = document.getElementById("ImageError");
        var Image = $("#Image").val();
        var i=false;
        var msg = document.getElementById("msg");
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
        if(Password!="")
        {
            if( CPassword!="")
            {
                if(Password==CPassword)
                {
                    if(Password.length>=8)
                    {
                        b=true
                    }
                    else
                    {
                        PasswordError.innerHTML="Password and Confirm passwords minimum length must need to be 4!";
                        CPasswordError.innerHTML="Password and Confirm passwords minimum length must need to be 4!";
                    }
                   
                }
                else
                {
                    PasswordError.innerHTML="Password and Confirm password must need to be same!";
                    CPasswordError.innerHTML="Password and Confirm password must need to be same!";
                }
            }
            else
            {
                CPasswordError.innerHTML="Confirm password must need to be filled!";
            }
            
        }
        else
        {
            PasswordError.innerHTML="Password must need to be filled!";
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
        if( Gender != null)
        {
            console.log("in");
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
            if(Address.length>=10)
            {
                f=true;
            }
            else
            {
                AddressError.innerHTML="Minimum length must need to be 10";
            }
        }
        else
        {
            AddressError.innerHTML="Can not be empty";
        }
        if( UserType != "")
        {
            h=true;
        }
        else
        {
            UserTypeError.innerHTML="Can not be empty";
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
        if(a==true & b==true & c==true & d==true & e==true & f==true & h==true & i==true)
        {
            console.log("calaya jao");
            if( UserName != "")
            {
                if( UserName.length>3)
                {
                    $.ajax({
                        type: "GET",
                        url: "http://localhost:51045//api/users/check",
                        headers:"Content-Type:application/json",
                        data:{
                            "userName":UserName
                        },
                        complete:function(xmlHttp,status){
                            if(xmlHttp.status==204)
                            {
                                $.ajax({
                                    type: "POST",
                                    url: "http://localhost:51045/api/registrations",
                                    headers:"Content-Type:application/json",
                                    data:{
                                        "name":Name,
                                        "userName":UserName,
                                        "password":Password,
                                        "cPassword":CPassword,
                                        "email":Email,
                                        "gender":Gender,
                                        "dateOfBirth":DateOfBirth,
                                        "Address":Address,
                                        "profilePicture":"#",
                                        "userType":UserType
                                    },
                                    complete:function(xmlHttp,status){
                                        if(xmlHttp.status==201)
                                        {
                                            var data = xmlHttp.responseJSON;
                                            var registrationId = data.registrationId;
                                            console.log(registrationId);
                                            var property = document.getElementById("Image").files[0];
                                            var formdata = new FormData();
                                            formdata.append("image",property);
                                            $.ajax({
                                                type: "POST",
                                                url: "http://localhost:51045/api/registrations/"+registrationId,
                                                data: formdata,
                                                headers:"Content-Type:multipart/form-data",
                                                contentType:false,
                                                cache:false,
                                                processData:false,
                                                complete:function(xmlHttp,status){
                                                    if(xmlHttp.status==201)
                                                    {
                                                        window.location.replace("http://127.0.0.1:5500/Views/Home/Index.html?Conformation=Yes");
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
                                msg.innerHTML=xmlHttp.status;
                                UserNameError.innerHTML="This username is taken";
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
    $("#Name").click(function () {
        NameError.innerHTML="";
    });
    $("#UserName").click(function () {
        UserNameError.innerHTML="";
    });
    $("#Password").click(function () {
        PasswordError.innerHTML="";
    });
    $("#CPassword").click(function () {
        CPasswordError.innerHTML="";
    });
    $("#Email").click(function () {
        EmailError.innerHTML="";
    });
    $("input[name='Gender']").click(function () {
        GenderError.innerHTML="";
    });
    $("#DateOfBirth").click(function () {
        DateOfBirthError.innerHTML="";
    });
    $("#Address").click(function () {
        AddressError.innerHTML="";
    });
    $("#UserType").click(function () {
        UserTypeError.innerHTML="";
    });
    $("#Image").click(function () {
        ImageError.innerHTML="";
    });
    $("#reset").click(function () { 
        NameError.innerHTML="";
        UserNameError.innerHTML-"";
        PasswordError.innerHTML="";
        CPassword.innerHTML="";
        EmailError.innerHTML="";
        GenderError.innerHTML="";
        DateOfBirthError.innerHTML="";
        AddressError.innerHTML="";
        UserTypeError.innerHTML="";
        ImageError.innerHTML="";
        msg.innerHTML="";
    });
});