$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var Back = url.searchParams.get("Back");
    var ProductId = url.searchParams.get("ProductId")
    console.log(Back);
    console.log(ProductId);
    console.log(Cookies.get("Count"));
    if(Cookies.get("Cart")=="empty")
    {
        var array = [];
        console.log("Cart");
        console.log(array);
    }
    else
    {
        var array = JSON.parse(Cookies.get("Cart"));
        console.log("Cart");
        console.log(array);
    }
    var InitialQuantity=null;
    var Product = null;
    
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
                Product = data;
                // console.log(data);
                console.log("Initial get product");
                console.log(InitialQuantity);
                console.log(Product);
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
                            <a href="`+Back+`.html">
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
                $("#show").html(html);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });
    
    $("#AddToCart").click(function () {
        
        var Quantity = $("#Quantity").val();
        
        if($.isNumeric(Quantity))
        {
            if(Quantity <1 || Quantity>1000 || Quantity > InitialQuantity)
            {
                $("#msg").html(`<div class="alert alert-danger">
                                    Product quantith must need to be in between 1 to `+Product.quantity+`
                                </div>`);
            }
            else
            {
                if(array.length>0)
                {
                    var inarrayornot = "no";
                    for(i=0;i<array.length;i++)
                    {
                        if(array[i].productId==Product.productId)
                        {
                            var newquantity = array[i].quantity + parseInt(Quantity)
                            console.log(`New quantity `+newquantity);
                            if(newquantity>InitialQuantity)
                            {
                                var sub = Product.quantity - array[i].quantity;
                                $("#msg").html(`<div class="alert alert-danger">
                                    Quantith is extending the available quantity. You can add `+sub+` in your cart
                                </div>`);
                                inarrayornot="cant";
                            }
                            else
                            {
                                array[i].quantity = array[i].quantity+ parseInt(Quantity);
                                inarrayornot="yes";
                            }
                        }
                        // console.log("array has value");
                        // Cookies.remove("Cart");
                        // Cookies.set("Cart","empty");
                    }
                    if(inarrayornot=="yes")
                    {
                        Cookies.set("Cart",JSON.stringify(array));
                        $("#msg").html(`<div class="alert alert-success">
                                    Product is already inside the cart and the quantity is updated
                                </div>`);
                    }
                    else if(inarrayornot=="no")
                    {
                        if(Cookies.get("Count")<=3)
                        {
                            Product.quantity = parseInt(Quantity);
                            array.push(Product);
                            Cookies.set("Cart",JSON.stringify(array));
                            var count = parseInt(Cookies.get("Count")) + 1;
                            Cookies.set("Count",count)
                            $("#msg").html(`<div class="alert alert-success">
                                        Product is added in the cart
                                    </div>`);
                        }
                        else
                        {
                            $("#msg").html(`<div class="alert alert-danger">
                                                Cant cart more then 4 product at a time. Please remove a product to select another one or clear the payment of selected to cart new product.
                                            </div>`);
                        }
                    }
                }
                else{
                    if(Cookies.get("Count")<=3)
                    {
                        Product.quantity = parseInt(Quantity);
                        array.push(Product);
                        Cookies.set("Cart",JSON.stringify(array));
                        var count = parseInt(Cookies.get("Count")) + 1;
                        Cookies.set("Count",count)
                        $("#msg").html(`<div class="alert alert-success">
                                        Product is added in the cart
                                    </div>`);
                    }
                    else
                    {
                        $("#msg").html(`<div class="alert alert-danger">
                                            Cant cart more then 4 product at a time. Please remove a product to select another one or clear the payment of selected to cart new product.
                                        </div>`);
                    }
                }
                
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