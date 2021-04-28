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
    [Table("Vendors", Schema = "dbo")]
    public class Vendor
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int VendorId { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string VendorName { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string UserName { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50),EmailAddress]
        public string Email { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string Gender { get; set; }
        [Required]
        public System.DateTime DateOfBirth { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(100)]
        public string Address { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(200)]
        public string ProfilePicture { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string Status { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual ICollection<VendorProduct> VendorProducts { get; set; }
    }
}