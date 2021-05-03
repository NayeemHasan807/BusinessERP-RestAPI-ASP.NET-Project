$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var Back = url.searchParams.get("Back");
    var ProductId = url.searchParams.get("ProductId")
    console.log(Back);
    console.log(ProductId);
    
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
                console.log(data);
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
                                            <p style="color:red">`+data.unitPrice+`</p>`;
                if (data.quantity == 0)
                {
                    html+=`<p style="color:red">This product is currently not available!</p><br />
                                <a href="`+Back+`.html">
                                    <button type="button">
                                        Back
                                    </button>
                                </a>`;
                }
                else
                {
                    html+=`<p>Quantity:</p>
                                <form>
                                    <input type="hidden" id="ProductId" name="ProductId" value="`+data.productId+`" />
                                    <input type="text" id="Quantity" name="Quantity" value="1" />
                                    <input type="button" id="AddToCart" name="AddToCart" value="Add To Cart" />
                                </form>
                                <a href="`+Back+`.html">
                                    <button type="button">
                                        Back
                                    </button>
                                </a>
                                <link href="../../Content/CSS/Alert.css" rel="stylesheet" />
                                <div id="Error"></div>`;
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
        console.log("AddToCart");
    });
});