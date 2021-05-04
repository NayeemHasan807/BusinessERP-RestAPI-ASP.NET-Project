$(document).ready(function () {
    var SubTotal = 0;
    var TotalWithTax = 0;
    var CustomerUserName = Cookies.get("UserName");
    var Cart = Cookies.get("Cart");
    console.log(Cart);
    if(Cart == "empty")
    {
        $("#show").html(`<div class="alert alert-primary" role="alert">
                            You didn't selected any product to buy yet. Please go to our ptoduct section and find the product right for you.
                        </div>
                        <div>
                            <a style="width:100%" class="btn btn-dark" href="Index.html">Back</a>
                        </div>`);
        $("#form").hide();
    }
    else
    {
        var array = JSON.parse(Cart);
        console.log("Cart");
        console.log(array);
        html=`<div>
                <table class="table table-dark">
                    <tr>
                        <th>Ordered Item</th>
                        <th>Quantity</th>
                        <th>Unit Price</th>
                        <th>Price</th>
                    </tr>`;
        for (i=0;i<array.length;i++)
        {
            html+=`<tr>
                        <td align="center">`+array[i].productName+`</td>
                        <td align="center">`+array[i].quantity+`</td>
                        <td align="center">`+array[i].unitPrice+`</td>
                        <td align="center">`+array[i].quantity*array[i].unitPrice+`</td>
                    </tr>`;
            SubTotal=SubTotal+(array[i].quantity*array[i].unitPrice);
        }
        TotalWithTax = (SubTotal+((SubTotal*8)/100)).toFixed(2)
        html+=`<tr>
                    <td colspan="3" align="center">Total Price</td>
                    <td align="center">`+SubTotal+`</td>
                </tr>
                <tr>
                    <td colspan="3" align="center">Total Price Including Tax</td>
                    <td align="center">`+TotalWithTax+`</td>
                </tr>
            </table>
            </div>`;
        $("#show").html(html);
    }
    $("#ConfirmPayment").click(function () { 
        var CreditCardTypeError = $("#CreditCardTypeError");
        var CreditCardType = $("input[name='CreditCardType']:checked").val();
        var a=false;
        var CardNumberError = $("#CardNumberError");
        var CardNumber = $("#CardNumber").val();
        var b=false
        if( CreditCardType != null)
        {
            console.log("in");
            a=true;
        }
        else
        {
            CreditCardTypeError.html("Must need to be selected");
        }
        if($.isNumeric(CardNumber))
        {
            if(CardNumber.length==16)
            {
                b=true;
            }
            else
            {
                CardNumberError.html("Card number length must need to be 16");
            }
        }
        else
        {
            CardNumberError.html("Cant contain alphabets and spetial charrecters");
        }
        if(a==true & b==true)
        {
            var CartProductList = JSON.parse(Cart);
            var today = new Date();
            var dd = String(today.getDate()).padStart(2, '0');
            var mm = String(today.getMonth() + 1).padStart(2, '0');
            var yyyy = String(today.getFullYear());
            var OrderDate = yyyy+'-'+mm+'-'+dd;
            $.ajax({
                type: "POST",
                url: "http://localhost:51045/api/customers/checkout",
                headers:"Content-Type:application/json",
                headers:{
                    "Authorization":"basic "+Cookies.get("Authenticatior")
                },
                data:{
                    "cartProductList":CartProductList,
                    "orderDate":OrderDate,
                    "subTotal":SubTotal,
                    "totalWithTax":TotalWithTax,
                    "creditCardType":CreditCardType,
                    "cardNumber":CardNumber,
                    "customerUserName":CustomerUserName
                },
                complete:function(xmlHttp,status){
                    if(xmlHttp.status==201)
                    {
                        Cookies.remove("Cart");
                        Cookies.set("Cart","empty");
                        Cookies.set("Count","0");
                        window.location.replace("http://127.0.0.1:5500/Views/Customer/Index.html?Conformation=Checkout");
                    }
                    else
                    {
                        $("#Conformation").html(xmlHttp.status);
                    }
                }
            });
        }
    });
    $("input[name='CreditCardType']").click(function () { 
        CreditCardTypeError.innerHTML="";
    });
    $("#CardNumber").click(function () { 
        CardNumberError.innerHTML="";
    });
});