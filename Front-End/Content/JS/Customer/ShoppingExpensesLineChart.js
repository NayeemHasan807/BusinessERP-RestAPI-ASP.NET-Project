﻿$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "http://localhost:51045/api/customers/"+Cookies.get("UserName")+"/shoppingexpensesreport",
        headers:"Content-Type:application/json",
        headers:{
            "Authorization":"basic "+Cookies.get("Authenticatior")
        },
        success: function (response) {
            successFunc(response);
        }
    });

    function successFunc(jsondata) {
        var ctx = document.getElementById('myChart').getContext('2d');
        console.log(jsondata);
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: jsondata['date'],
                datasets: [{
                    label: 'Expenses $',
                    data: jsondata['sales'],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(1, 192, 112, 0.2)',
                        'rgba(1, 102, 215, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(1, 192, 112, 1)',
                        'rgba(1, 102, 215, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
});