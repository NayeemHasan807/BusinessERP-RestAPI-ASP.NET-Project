using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    public class Notice
    {
        public int NoticeId { get; set; }
        [Required, MinLength(10), MaxLength(30)]
        public string NoticeTitle { get; set; }
        [Required, MinLength(20), MaxLength(200)]
        public string NoticeBody { get; set; }
        [Required]
        public string ReceiverType { get; set; }
        List<Link> links = new List<Link>();
        [NotMapped]
        public List<Link> Links
        {
            get { return links; }
        }
    }
}