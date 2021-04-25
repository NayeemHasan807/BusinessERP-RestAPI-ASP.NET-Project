using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    [Table("CustomerLineItems", Schema = "dbo")]
    public class CustomerLineItem
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LineId { get; set; }
        [Required]
        public int InvoiceId { get; set; }
        [Required] 
        public int ProductId { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required] 
        public double UnitPrice { get; set; }
        [Required] 
        public double Total { get; set; }
    }
}