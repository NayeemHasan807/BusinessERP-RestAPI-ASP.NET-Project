﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace BusinessERP.Models
{
    public class Employee
    {
        public int EmployeeId { get; set; }
        [Required, MinLength(4), MaxLength(30), Display(Name = "Full Name")]
        public string EmployeeName { get; set; }
        [Required, MinLength(3)]
        public string UserName { get; set; }
        [Required, EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Gender { get; set; }
        [Required]
        public System.DateTime DateOfBirth { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public System.DateTime JoiningDate { get; set; }
        public string ProfilePicture { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public int JobId { get; set; }
        [JsonIgnore, XmlIgnore]
        public virtual JobCategory JobCategory { get; set; }
        
        List<Link> links = new List<Link>();
        [NotMapped]
        public List<Link> Links  
        {
            get { return links; }
        }
    }
}