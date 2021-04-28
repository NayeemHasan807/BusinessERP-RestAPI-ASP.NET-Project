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
    [Table("JobCategories",Schema ="dbo")]
    public class JobCategory
    {
        [Required,Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int JobId { get; set; }
        [Required,Column(TypeName = "varchar"),StringLength(50)]
        public string JobTitle { get; set; }
        [Required, Column(TypeName = "float")]
        public double Salary { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual ICollection<Employee> Employees { get; set; }
    }
}