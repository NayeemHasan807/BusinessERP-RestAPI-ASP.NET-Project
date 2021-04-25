using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    [Table("RawMaterials",Schema ="dbo")]
    public class RawMaterial
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int MaterialId { get; set; }
        [Required,Column(TypeName ="varchar"),StringLength(50)]
        public string MaterialName { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public double UnitPrice { get; set; }
        [Required]
        public System.DateTime ReceivingDate { get; set; }
        [NotMapped]
        public virtual ICollection<RawMaterialUsesLog> RawMaterialUsesLogs { get; set; }
    }
}