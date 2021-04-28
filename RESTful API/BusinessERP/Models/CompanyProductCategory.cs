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
    [Table("CompanyProductCategories",Schema ="dbo")]
    public class CompanyProductCategory
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int CategoryId { get; set; }
        [Column(TypeName ="varchar"),StringLength(50),Required]
        public string CategoryName { get; set; }
        [Column(TypeName = "varchar"), StringLength(500), Required]
        public string Discriptions { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual ICollection<CompanyProduct> CompanyProducts { get; set; }
    }
}