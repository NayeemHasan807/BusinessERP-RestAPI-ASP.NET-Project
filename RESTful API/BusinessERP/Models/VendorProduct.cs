using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace BusinessERP.Models
{
    public class VendorProduct
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string ShortDescription { get; set; }
        public string LongDescription { get; set; }
        public double UnitPrice { get; set; }
        [Required, Range(1, 1000, ErrorMessage = "Quentity must be in between 1 to available quantities")]
        public int Quantity { get; set; }
        public string ProductPicture { get; set; }
        public int VendorId { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual Vendor Vendor { get; set; }
    }
}