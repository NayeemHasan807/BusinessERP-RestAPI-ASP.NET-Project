﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BusinessERP.Models.ViewModels
{
    public class CheckoutViewModel
    {
        public List<CompanyProduct> CartProductList { get; set; }
        public System.DateTime OrderDate { get; set; }
        public double SubTotal { get; set; }
        public double TotalWithTax { get; set; }
        [Required]
        public string CreditCardType { get; set; }
        [Required, MinLength(16, ErrorMessage = "Must need to be 16 digit number"), MaxLength(17, ErrorMessage = "Must need to be 16 digit number")]
        public string CardNumber { get; set; }
        public string CustomerUserName { get; set; }
    }
}