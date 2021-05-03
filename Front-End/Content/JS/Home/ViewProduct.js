$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var ProductId = url.searchParams.get("ProductId")
    console.log(ProductId);
    if(ProductId!=null)
    {
        window.location.replace("http://127.0.0.1:5500/Views/Home/Login.html?Suggest=Yes");
    }
    else
    {
        window.location.replace("http://127.0.0.1:5500/Views/Home/Products.html");
    }
});