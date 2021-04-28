using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessERP.Models.ViewModels
{
    public class AdminIndexViewModel
    {
        public int StockOut { get; set; }
        public int LowStock { get; set; }
        public Employee Profile { get; set; }
    }
}