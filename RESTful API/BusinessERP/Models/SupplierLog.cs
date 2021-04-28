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
    [Table("SupplierLogs",Schema ="dbo")]
    public class SupplierLog
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LogId { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public System.TimeSpan Time { get; set; }
        [Required,Column(TypeName ="varchar"),StringLength(50)]
        public string Comment { get; set; }
        [Required]
        public int ScheduleId { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual SupplierSchedule SupplierSchedule { get; set; }
    }
}