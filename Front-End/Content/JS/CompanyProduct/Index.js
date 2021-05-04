$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/companyproducts",
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        complete:function(xmlHttp,status){
            if(xmlHttp.status==200)
            {
                var data=xmlHttp.responseJSON;
                console.log(data);
                var count=0;
                var a=null;
                var b=null;
                var c=null;
                var d=null;
                var html=`<div class="container">`;
                for (var i = 0; i < data.length; i++) {
                    if (count == 0)
                    {
                        a = data[i];
                        count++;
                        continue;
                    }
                    else if (count == 1)
                    {
                        b = data[i];
                        count++;
                        continue;
                    }
                    else if (count == 2)
                    {
                        c = data[i];
                        count++;
                        continue;
                    }
                    else if (count == 3)
                    {
                        d = data[i];
                        count++;
                        continue;
                    }
                    else if (count == 4)
                    {
                        html+=`<div class="row">
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+a.productPicture+`" style="width:100%">
                                        <h4>`+a.productName+`</h4>
                                        <p class="price">$`+a.unitPrice+`</p>
                                        <p class="quantity"> `+a.quantity+`</p>
                                        <p class="body">
                                            `+a.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+a.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+b.productPicture+`" style="width:100%">
                                        <h4>`+b.productName+`</h4>
                                        <p class="price">$`+b.unitPrice+`</p>
                                        <p class="quantity"> `+b.quantity+`</p>
                                        <p class="body">
                                            `+b.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+b.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+c.productPicture+`" style="width:100%">
                                        <h4>`+c.productName+`</h4>
                                        <p class="price">$`+c.unitPrice+`</p>
                                        <p class="quantity"> `+c.quantity+`</p>
                                        <p class="body">
                                            `+c.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+c.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+d.productPicture+`" style="width:100%">
                                        <h4>`+d.productName+`</h4>
                                        <p class="price">$`+d.unitPrice+`</p>
                                        <p class="quantity"> `+d.quantity+`</p>
                                        <p class="body">
                                            `+d.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+d.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                            </div>
                            <br />`;
                        a = data[i];
                        b = null;
                        c = null;
                        d = null;
                        count = 1;
                    }
                }
                if (count == 1)
                {
                    html+=`<div class="row">
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+a.productPicture+`" style="width:100%">
                                        <h4>`+a.productName+`</h4>
                                        <p class="price">$`+a.unitPrice+`</p>
                                        <p class="quantity"> `+a.quantity+`</p>
                                        <p class="body">
                                            `+a.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+a.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                            </div>`;
                    a=null;
                    count=0;
                }
                else if (count == 2)
                {
                    html+=`<div class="row">
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+a.productPicture+`" style="width:100%">
                                        <h4>`+a.productName+`</h4>
                                        <p class="price">$`+a.unitPrice+`</p>
                                        <p class="quantity"> `+a.quantity+`</p>
                                        <p class="body">
                                            `+a.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+a.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+b.productPicture+`" style="width:100%">
                                        <h4>`+b.productName+`</h4>
                                        <p class="price">$`+b.unitPrice+`</p>
                                        <p class="quantity"> `+b.quantity+`</p>
                                        <p class="body">
                                            `+b.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+b.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                            </div>`;
                    a=null;
                    b=null;
                    count=0;
                }
                else
                {
                    html+=`<div class="row">
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+a.productPicture+`" style="width:100%">
                                        <h4>`+a.productName+`</h4>
                                        <p class="price">$`+a.unitPrice+`</p>
                                        <p class="quantity"> `+a.quantity+`</p>
                                        <p class="body">
                                            `+a.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+a.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+b.productPicture+`" style="width:100%">
                                        <h4>`+b.productName+`</h4>
                                        <p class="price">$`+b.unitPrice+`</p>
                                        <p class="quantity"> `+b.quantity+`</p>
                                        <p class="body">
                                            `+b.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+b.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="card">
                                        <img class="image" src="http://localhost:51045/`+c.productPicture+`" style="width:100%">
                                        <h4>`+c.productName+`</h4>
                                        <p class="price">$`+c.unitPrice+`</p>
                                        <p class="quantity"> `+c.quantity+`</p>
                                        <p class="body">
                                            `+c.longDescription+`<br />
                                        </p>
                                        <p><a href="ViewProduct.html?Back=Index&ProductId=`+c.productId+`"><button>View</button></a></p>
                                    </div>
                                </div>
                            </div>`;
                    a=null;
                    b=null;
                    c=null;
                    count=0;
                }
                html+="</div>";
                $("#show").html(html);
            }
            else if(xmlHttp.status==204){
                var html=`<div class="alert alert-primary">
                            <p>No product is available</p>
                        </div>`;
                $("#show").html(html);
            }
            else
            {
                $("#msg").html(xmlHttp.status+":"+xmlHttp.statusText);
            }
        }
    });

    $("#searchkey").keyup(function(){ 
        $.ajax({
            type: "GET",
            url: "http://localhost:51045/api/companyproducts/search",
            headers:"Content-Type:application/json",
            headers:{
                "Authorization":"basic "+Cookies.get("Authenticatior")
            },
            data:{
                "searchkey":$("#searchkey").val()
            },
            complete:function(xmlHttp,status){
                if(xmlHttp.status==200)
                {
                    var data=xmlHttp.responseJSON;
                    console.log(data);
                    var count=0;
                    var a=null;
                    var b=null;
                    var c=null;
                    var d=null;
                    var html=`<div class="container">`;
                    for (var i = 0; i < data.length; i++) {
                        if (count == 0)
                        {
                            a = data[i];
                            count++;
                            continue;
                        }
                        else if (count == 1)
                        {
                            b = data[i];
                            count++;
                            continue;
                        }
                        else if (count == 2)
                        {
                            c = data[i];
                            count++;
                            continue;
                        }
                        else if (count == 3)
                        {
                            d = data[i];
                            count++;
                            continue;
                        }
                        else if (count == 4)
                        {
                            html+=`<div class="row">
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+a.productPicture+`" style="width:100%">
                                            <h4>`+a.productName+`</h4>
                                            <p class="price">$`+a.unitPrice+`</p>
                                            <p class="quantity"> `+a.quantity+`</p>
                                            <p class="body">
                                                `+a.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+a.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+b.productPicture+`" style="width:100%">
                                            <h4>`+b.productName+`</h4>
                                            <p class="price">$`+b.unitPrice+`</p>
                                            <p class="quantity"> `+b.quantity+`</p>
                                            <p class="body">
                                                `+b.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+b.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+c.productPicture+`" style="width:100%">
                                            <h4>`+c.productName+`</h4>
                                            <p class="price">$`+c.unitPrice+`</p>
                                            <p class="quantity"> `+c.quantity+`</p>
                                            <p class="body">
                                                `+c.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+c.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+d.productPicture+`" style="width:100%">
                                            <h4>`+d.productName+`</h4>
                                            <p class="price">$`+d.unitPrice+`</p>
                                            <p class="quantity"> `+d.quantity+`</p>
                                            <p class="body">
                                                `+d.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+d.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                </div>
                                <br />`;
                            a = data[i];
                            b = null;
                            c = null;
                            d = null;
                            count = 1;
                        }
                    }
                    if (count == 1)
                    {
                        html+=`<div class="row">
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+a.productPicture+`" style="width:100%">
                                            <h4>`+a.productName+`</h4>
                                            <p class="price">$`+a.unitPrice+`</p>
                                            <p class="quantity"> `+a.quantity+`</p>
                                            <p class="body">
                                                `+a.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+a.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                </div>`;
                        a=null;
                        count=0;
                    }
                    else if (count == 2)
                    {
                        html+=`<div class="row">
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+a.productPicture+`" style="width:100%">
                                            <h4>`+a.productName+`</h4>
                                            <p class="price">$`+a.unitPrice+`</p>
                                            <p class="quantity"> `+a.quantity+`</p>
                                            <p class="body">
                                                `+a.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+a.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+b.productPicture+`" style="width:100%">
                                            <h4>`+b.productName+`</h4>
                                            <p class="price">$`+b.unitPrice+`</p>
                                            <p class="quantity"> `+b.quantity+`</p>
                                            <p class="body">
                                                `+b.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+b.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                </div>`;
                        a=null;
                        b=null;
                        count=0;
                    }
                    else
                    {
                        html+=`<div class="row">
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+a.productPicture+`" style="width:100%">
                                            <h4>`+a.productName+`</h4>
                                            <p class="price">$`+a.unitPrice+`</p>
                                            <p class="quantity"> `+a.quantity+`</p>
                                            <p class="body">
                                                `+a.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+a.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+b.productPicture+`" style="width:100%">
                                            <h4>`+b.productName+`</h4>
                                            <p class="price">$`+b.unitPrice+`</p>
                                            <p class="quantity"> `+b.quantity+`</p>
                                            <p class="body">
                                                `+b.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+b.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card">
                                            <img class="image" src="http://localhost:51045/`+c.productPicture+`" style="width:100%">
                                            <h4>`+c.productName+`</h4>
                                            <p class="price">$`+c.unitPrice+`</p>
                                            <p class="quantity"> `+c.quantity+`</p>
                                            <p class="body">
                                                `+c.longDescription+`<br />
                                            </p>
                                            <p><a href="ViewProduct.html?Back=Index&ProductId=`+c.productId+`"><button>View</button></a></p>
                                        </div>
                                    </div>
                                </div>`;
                        a=null;
                        b=null;
                        c=null;
                        count=0;
                    }
                    html+="</div>";
                    $("#show").html(html);
                }
                else if(xmlHttp.status==204){
                    var html=`<div class="alert alert-primary">
                                <p>No product of this name in available</p>
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
    $("#reload").click(function () { 
        $("#searchkey").val(null);
        location.reload();
    });
});