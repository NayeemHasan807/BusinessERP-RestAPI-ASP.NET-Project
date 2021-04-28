using BusinessERP.Attributes;
using BusinessERP.Models.ViewModels;
using BusinessERP.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BusinessERP.Controllers
{
    [RoutePrefix("api/admins")]
    public class AdminController : ApiController
    {
        private EmployeeRepository employeerepo = new EmployeeRepository();
        private CompanyProductRepository comprodrepo = new CompanyProductRepository();

        [Route(""),HttpGet,BasicAuthentication]
        public IHttpActionResult Index(string userName)
        {
            AdminIndexViewModel data = new AdminIndexViewModel();
            data.StockOut = comprodrepo.StockOut().Count;
            data.LowStock = comprodrepo.LowStock().Count;
            data.Profile = employeerepo.GetByUserName(userName);
            return Ok(data);
        }
    }
}
