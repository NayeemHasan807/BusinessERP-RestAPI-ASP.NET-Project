using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    [Table("CustomerTexts",Schema ="dbo")]
    public class CustomerText
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int TextId { get; set; }
        [Required,Column(TypeName ="varchar"),StringLength(500)]
        public string TextBody { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string ReceiverUserName { get; set; }
        [Required, Column(TypeName = "varchar"), StringLength(50)]
        public string SenderUserName { get; set; }
    }
}