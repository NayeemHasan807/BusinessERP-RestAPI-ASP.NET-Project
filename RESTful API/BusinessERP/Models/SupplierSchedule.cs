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
    [Table("SupplierSchedules", Schema = "dbo")]
    public class SupplierSchedule
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int ScheduleId { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string WorkType { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string Address { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required]
        public System.TimeSpan Time { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual ICollection<SupplierLog> SupplierLogs { get; set; }
    }
}