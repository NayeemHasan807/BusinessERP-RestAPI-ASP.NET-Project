using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    [Table("CompanyInvoices",Schema ="dbo")]
    public class CompanyInvoice
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int InvoiceId { get; set; }
        [Required]
        public System.DateTime OrderDate { get; set; }
        [Required]
        public double SubTotal { get; set; }
        [Required]
        public double TotalWithTax { get; set; }
        [Required,Column(TypeName ="varchar"),StringLength(50)]
        public string CreditCardType { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50),MinLength(16, ErrorMessage = "Must need to be 16 digit number"), MaxLength(17, ErrorMessage = "Must need to be 16 digit number")]
        public string CardNumber { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string VendorUserName { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string EmployeeUserName { get; set; }
    }
}