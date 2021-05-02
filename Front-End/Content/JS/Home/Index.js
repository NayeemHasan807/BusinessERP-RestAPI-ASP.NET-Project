$(document).ready(function () {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var Conformation = url.searchParams.get("Conformation");
    console.log(Conformation);
    if(Conformation == "Yes")
    {
        $("#Conformation").html(`<div class="alert alert-primary" style="text-align: center">Your registration request submited successfully. We will verify your information soon and will give you confirmation</div>`);
    }
    else if(Conformation=="SuppReqSent")
    {
        $("#Conformation").html(`<div class="alert alert-primary" style="text-align: center">Your request is send to support. We will contact with you via mail within 24hours</div>`);
    }
});