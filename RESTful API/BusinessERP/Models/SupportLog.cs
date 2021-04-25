using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    [Table("SupportLogs",Schema ="dbo")]
    public class SupportLog
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int LogId { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string RequestSubject { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(100)]
        public string RequestBody { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(500)]
        public string SenderUserName { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string UserType { get; set; }
        [Required]
        public System.DateTime Date { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string SupportUserName { get; set; }
    }
}