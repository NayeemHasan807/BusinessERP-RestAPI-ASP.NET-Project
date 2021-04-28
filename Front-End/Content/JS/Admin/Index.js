$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/admins",
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        data: {
            "userName":Cookies.get("UserName")
        },
        complete:function(xmlHttp,status){
            if(xmlHttp.status==200)
            {
                var data=xmlHttp.responseJSON;
                $("#employeename").html(data.profile.employeeName);
                var image=document.getElementById("ProfilePicture")
                image.src =data.profile.profilePicture;
                if(data.stockOut>0)
                {
                    var html = `<p class="card-text">
                                    Total stock out products count is `+ data.stockOut+
                                `</p>
                                <a href="/CompanyProduct/StockOut" class="btn btn-dark">View Stock Out Products List</a>`;
                    $("#StockOut").html(html);
                }
                else
                {
                    var html = `<p class="card-text">
                                    No stock out products
                                </p>`;
                    $("#StockOut").html(html);
                }
                if(data.lowStock>0)
                {
                    var html = `<p class="card-text">
                                     Total low stock products count is `+ data.lowStock+
                                `</p>
                                <a href="/CompanyProduct/LowStock" class="btn btn-dark">View Low Stock Products List</a>`;
                    $("#LowStock").html(html);
                }
                else
                {
                    var html = `<p class="card-text">
                                    No low stock products
                                </p>`;
                    $("#LowStock").html(html);
                }
                console.log(data);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });
});