using BusinessERP.Attributes;
using BusinessERP.Models;
using BusinessERP.Repositories;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Hosting;
using System.Web.Http;
using System.Windows.Forms;

namespace BusinessERP.Controllers
{
    [RoutePrefix("api/employees")]
    public class EmployeeController : ApiController
    {
        private EmployeeRepository employeerepo = new EmployeeRepository();
        private UserRepository userrepo = new UserRepository();
        private JobCategoryRepository jobcatrepo = new JobCategoryRepository();
        
        //Get All
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
        //Search By Name
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
        //Get All Job Category List
        [Route("jobcategorylist"), HttpGet, BasicAuthentication]
        public IHttpActionResult JobCategoryList()
        {
            return Ok(jobcatrepo.GetAll());

        }
        //Advanced search on employee list
        [Route("advancedsearch"),HttpGet,BasicAuthentication]
        public IHttpActionResult AdvancedSearch(string searchkey,string order,int category)
        {
            var data = employeerepo.AddLinks(employeerepo.GetAllByAdvancedSearch(category, order, searchkey));
            if (data.Count > 0)
            {
                return Ok(data);
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
            
        }
        //Create new employee
        [Route(""),HttpPost,BasicAuthentication]
        public IHttpActionResult Create(Employee employee)
        {
            if (ModelState.IsValid)
            {
                User user = new User();
                JobCategory job = jobcatrepo.GetById(employee.JobId);
                user.UserName = employee.UserName;
                user.Password = employee.UserName;
                user.UserType = job.JobTitle;
                user.UserStatus = employee.Status;
                employeerepo.Insert(employee);
                userrepo.Insert(user);
                var emp = employeerepo.AddLink(employeerepo.GetByUserName(employee.UserName));
                string url = "http://localhost:51045/api/employees/" + emp.EmployeeId;
                return Created("url",emp);
            }
                    
            return BadRequest(ModelState);
        }
        //Add profile picture when creating or editing any employee
        [Route("{id}/addprofilepicture"),HttpPost,BasicAuthentication]
        public async Task<IHttpActionResult> AddProfilePicture(int id)
        {
            var ctx = HttpContext.Current;
            var root = ctx.Server.MapPath("~/Content/ProfilePictures");
            var provider = new MultipartFileStreamProvider(root);
            await Request.Content.ReadAsMultipartAsync(provider);
            foreach(var file in provider.FileData)
            {
                var name = file.Headers.ContentDisposition.FileName;
                name = name.Trim('"');
                var localFileName = file.LocalFileName;
                name = DateTime.Now.ToString("yyyy-MM-dd")+"-"+ DateTime.Now.ToString("hh-mm-ss") + name;
                var filePath = Path.Combine(root, name);
                var db = "Content/ProfilePictures/" + name;
                File.Move(localFileName, filePath);
                var employee = employeerepo.GetById(id);
                employee.ProfilePicture = db;
                employeerepo.Update(employee);
                return Created("http://localhost:51045/"+db, employee);
            }
            return StatusCode(HttpStatusCode.BadRequest);
        }
        //Get indivisual employee details
        [Route("{id}"),HttpGet]
        public IHttpActionResult Details(int id)
        {
            var employee = employeerepo.AddLink(employeerepo.GetById(id));
            if (employee != null)
            {
                var jobTitle = jobcatrepo.GetById(employee.JobId);
                return Ok(new { employee , jobTitle});
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }
        //Delete an existing employee
        [Route("{id}"),HttpDelete,BasicAuthentication]
        public IHttpActionResult RemoveEmployee(int id)
        {
            var employee = employeerepo.GetById(id); 
            userrepo.DeleteByUsername(employee.UserName);
            employeerepo.Delete(id);
            return StatusCode(HttpStatusCode.NoContent);
        }
        //Edit an existing employee
        [Route("{id}"),HttpPut,BasicAuthentication]
        public IHttpActionResult EditEmployee(int id, Employee employee)
        {
            if (ModelState.IsValid)
            {
                employee.EmployeeId = id;
                employeerepo.Update(employee);
                return Ok(employeerepo.AddLink(employee));
            }
            return BadRequest(ModelState);
        }

    }
}
