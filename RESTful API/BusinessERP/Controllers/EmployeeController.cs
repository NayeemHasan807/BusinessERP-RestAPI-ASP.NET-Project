using BusinessERP.Attributes;
using BusinessERP.Models;
using BusinessERP.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BusinessERP.Controllers
{
    [RoutePrefix("api/employees")]
    public class EmployeeController : ApiController
    {
        private EmployeeRepository employeerepo = new EmployeeRepository();
        private UserRepository userrepo = new UserRepository();
        private JobCategoryRepository jobcatrepo = new JobCategoryRepository();

        [Route(""),HttpGet,BasicAuthentication]
        public IHttpActionResult EmployeeList()
        {
            var employees = employeerepo.AddLinks(employeerepo.GetAll());
            if (employees.Count > 0)
            {
                return Ok(employees);
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
            
        }
        [Route("search"),HttpGet,BasicAuthentication]
        public IHttpActionResult Index(string searchkey)
        {
            if (searchkey == null)
            {
                List<Employee> all = employeerepo.AddLinks(employeerepo.GetAll());
                return Ok(all);
            }
            List<Employee> list = employeerepo.AddLinks(employeerepo.GetAllSearchedByName(searchkey));
            if (list.Count > 0)
            {
                return Ok(list);
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
            
        }
    }
}
