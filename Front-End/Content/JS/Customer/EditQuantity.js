$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var ProductId = url.searchParams.get("ProductId");
    console.log("Product id "+ ProductId);
    var Cart = Cookies.get("Cart");
    var array = JSON.parse(Cart);
    if(Cart == "empty")
    {
        window.location.replace("http://127.0.0.1:5500/Views/Customer/ViewCart.html");
    }
    else
    {
        for (i=0;i<array.length;i++)
        {
            if(array[i].productId==ProductId)
            {
                $("#Quantity").val(array[i].quantity);
            }
        }
    }
    var InitialQuantity = null;
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/companyproducts/"+ProductId,
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete:function(xmlHttp,status){
            if(xmlHttp.status==200)
            {
                var data = xmlHttp.responseJSON;
                InitialQuantity = data.quantity;
                console.log("InitialQuantity "+data.quantity);
                var html=`<div class="container">
                            <!-- Left Column / Image -->
                                <div class="left-column">
                                    <img src="http://localhost:51045/`+data.productPicture+`" style="border-radius:0%" />
                                </div>
                                <!-- Right Column -->
                                <div class="right-column" align="left">
                                    <!-- Product Description -->
                                    <div class="product-description">
                                        <span>`+data.productName+`</span>
                                        <p>`+data.shortDescription+`</p><br />
                                        <p>`+data.longDescription+`</p>
                                        <p style="color:green">Available Quantity: `+data.quantity+`</p>
                                        </div>
                                        <!-- Product Pricing -->
                                        <div class="product-price">
                                            <p style="color:red">$`+data.unitPrice+`</p>`;
                if (data.quantity == 0)
                {
                    html+=`<p style="color:red">This product is currently not available!</p><br />
                                <a href="`+Back+`.html">
                                    <button type="button">
                                        Back
                                    </button>
                                </a>`;
                    $("#form").hide();
                }
                else
                {
                    html+=`
                            <a href="ViewCart.html">
                                <button type="button">
                                    Back
                                </button>
                            </a>`;
                }
                html+=`     </div>
                        </div>
                    </div>`;
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<div class="alert alert-primary">
                            <p>No product of productid `+ProductId+`</p>
                        </div>`;
                $("#form").hide();
                $("#show").html(html);
            }
            else
            {
                $("#form").hide();
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });

    $("#UpdateQuantity").click(function () { 
        var Quantity = $("#Quantity").val();
        console.log("Selected quantity "+Quantity);
        if($.isNumeric(Quantity))
        {
            if(Quantity <1  || Quantity > InitialQuantity)
            {
                $("#msg").html(`<div class="alert alert-danger">
                                    Product quantith must need to be in between 1 to `+InitialQuantity+`
                                </div>`);
            }
            else
            {
                for(i=0;i<array.length;i++)
                {
                    if(array[i].productId==ProductId)
                    {
                        array[i].quantity = parseInt(Quantity);
                    }
                }
                Cookies.set("Cart",JSON.stringify(array));
                window.location.replace("http://127.0.0.1:5500/Views/Customer/ViewCart.html");
            } 
        }
        else
        {
            $("#msg").html(`<div class="alert alert-danger">
                                    Must need to be a numeric value [exmple:1,2...]
                            </div>`);
        }
    });

    $("#Quantity").click(function () { 
        $("#msg").html(null);
    });

});