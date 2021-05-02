using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    public class EmployeeText
    {
        public int TextId { get; set; }
        [Required, MaxLength(500), Display(Name = "Text")]
        public string TextBody { get; set; }
        [Required, Display(Name = "Receiver")]
        public string ReceiverUserName { get; set; }
        [Required]
        public string SenderUserName { get; set; }
        List<Link> links = new List<Link>();
        [NotMapped]
        public List<Link> Links
        {
            get { return links; }
        }
    }
}