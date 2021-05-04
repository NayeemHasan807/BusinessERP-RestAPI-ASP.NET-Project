$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var ProductId = url.searchParams.get("ProductId");
    console.log(ProductId);
    var Cart = Cookies.get("Cart");
    if(Cart == "empty")
    {
        window.location.replace("http://127.0.0.1:5500/Views/Customer/ViewCart.html");
    }
    else
    {
        var newarray = [];
        var array = JSON.parse(Cart);
        console.log("Cart");
        console.log(array);
        for (i=0;i<array.length;i++)
        {
            if(array[i].productId==ProductId)
            {
                continue;
            }
            else
            {
                newarray.push(array[i]);
            }
        }
        if(newarray.length>0)
        {
            Cookies.set("Cart",JSON.stringify(newarray));
        }
        else
        {
            Cookies.set("Cart","empty");
        }
        var count = parseInt(Cookies.get("Count"));
        count = count - 1;
        Cookies.set("Count",count);
        window.location.replace("http://127.0.0.1:5500/Views/Customer/ViewCart.html");

    }
});