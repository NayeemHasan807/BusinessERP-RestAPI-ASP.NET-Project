$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/companyproducts/stockout",
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
                                    ProductPicture
                                </th>
                                <th>
                                    ProductName
                                </th>
                                <th>
                                    ShortDescription
                                </th>
                                <th>
                                    UnitPrice
                                </th>
                                <th>
                                    Quantity
                                </th>
                            </tr>`;
                for (var i = 0; i < data.length; i++) {
        
                    html+=`<tr>
                            <td>
                            <img src="http://localhost:51045/`+data[i].productPicture+`" alt="Avater" width="50" height="50" />
                            </td>
                            <td>
                                `+data[i].productName+`
                            </td>
                            <td>
                                `+data[i].shortDescription+`
                            </td>
                            <td>
                                `+data[i].unitPrice+`
                            </td>
                            <td>
                                `+data[i].quantity+`
                            </td>
                        </tr>`;
                }
                html+="</table>";
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<div class="alert alert-primary">
                            <p>No stock out products in the inventory</p>
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