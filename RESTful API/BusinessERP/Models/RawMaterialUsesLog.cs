using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    [Table("RawMaterialUsesLogs",Schema ="dbo")]
    public class RawMaterialUsesLog
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LogId { get; set; }
        [Required]
        public int MaterialId { get; set; }
        [Required]
        public int UsedQuantity { get; set; }
        [Required]
        public double UnitPrice { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public double ManufacturingCost { get; set; }
        [NotMapped]
        public virtual RawMaterial RawMaterial { get; set; }
    }
}