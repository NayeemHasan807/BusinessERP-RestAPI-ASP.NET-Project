$(document).ready(function () {
    var Cart = Cookies.get("Cart");
    if(Cart == "empty")
    {
        $("#show").html(`<div class="alert alert-primary" role="alert">
                            You havnt seleted any product yet. Go to our product page and choosee the product you are wishing for.
                        </div>
                        <div>
                            <a style="width:100%" class="btn btn-dark" href="Index.html">Back</a>
                        </div>`);
    }
    else
    {
        var array = JSON.parse(Cart);
        console.log("Cart");
        console.log(array);
        html=`<table class="table table-striped table-dark">
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
                    <th>
                        Action
                    </th>
                </tr>`;
        for (i=0;i<array.length;i++)
        {
            html+=`<tr>
                    <td>
                        <img src="http://localhost:51045/`+array[i].productName+`" alt="Avater" width="50" height="50" />
                    </td>
                    <td>
                        `+array[i].productName+`
                    </td>
                    <td>
                        `+array[i].shortDescription+`
                    </td>
                    <td>
                        `+array[i].unitPrice+`
                    </td>
                    <td>
                        `+array[i].quantity+`
                    </td>
                    <td>
                        <a class="btn btn-success btn-sm" href="EditQuantity.html?ProductId=`+array[i].productId+`">Edit Quantity</a>
                        <a class="btn btn-danger btn-sm" href="RemoveFromCart.html?ProductId=`+array[i].productId+`">Remove From Cart</a>
                    </td>
                </tr>`;
        }
        html+=`</table>
        <div>
            <a style="width:100%" class="btn btn-dark" href="Index.html">Back</a>
        </div>`;
        $("#show").html(html);
    }
});