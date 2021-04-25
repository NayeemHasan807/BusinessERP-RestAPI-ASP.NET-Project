using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    [Table("Users",Schema ="dbo")]
    public class User
    {
        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        [Required,Column(TypeName ="varchar"),StringLength(50)]
        public string UserName { get; set; }
        [Required,Column(TypeName = "varchar"), StringLength(50)]
        public string Password { get; set; }
        [Required,Column(TypeName = "varchar"), StringLength(30)]
        public string UserType { get; set; }
        [Required,Column(TypeName = "varchar"), StringLength(30)]
        public string UserStatus { get; set; }
    }
}