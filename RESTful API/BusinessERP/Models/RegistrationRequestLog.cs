using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    [Table("RegistrationRequestLogs",Schema ="dbo")]
    public class RegistrationRequestLog
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LogId { get; set; }
        [Required,Column(TypeName ="varchar"),StringLength(50)]
        public string UserName { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string UserType { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string SupportUserName { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string Status { get; set; }
    }
}