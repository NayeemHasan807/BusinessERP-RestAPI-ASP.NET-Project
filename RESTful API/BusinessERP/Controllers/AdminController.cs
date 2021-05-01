using BusinessERP.Attributes;
using BusinessERP.Models;
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
        private UserRepository userrepo = new UserRepository();
        private NoticeRepository noticerepo = new NoticeRepository();
        private CustomerInvoiceRepository cusinvrepo = new CustomerInvoiceRepository();

        //Dashboard
        [Route(""),HttpGet,BasicAuthentication]
        public IHttpActionResult Index(string userName)
        {
            AdminIndexViewModel data = new AdminIndexViewModel();
            data.StockOut = comprodrepo.StockOut().Count;
            data.LowStock = comprodrepo.LowStock().Count;
            data.Profile = employeerepo.GetByUserName(userName);
            return Ok(data);
        }

        //User Report
        [Route("userreport"),HttpGet,BasicAuthentication]
        public IHttpActionResult UserBarChart()
        {
            var user = userrepo.GetAll();
            var category = user.Select(x => x.UserType).Distinct();
            List<int> value = new List<int>();
            foreach (var item in category)
            {
                value.Add(user.Count(x => x.UserType == item));
            }
            return Ok(new { category, value });
        }

        //Sales Report
        [Route("salesreport"),HttpGet,BasicAuthentication]
        public IHttpActionResult SalesLineChart()
        {
            var customerinvoice = cusinvrepo.GetAll();
            List<string> date = new List<string>();
            var fetchdate = customerinvoice.Select(x => x.OrderDate).Distinct().OrderBy(y => y.Date);
            foreach (var item in fetchdate)
            {
                var i = item.ToString("dd-MM-yyyy");
                date.Add(i);
            }
            List<double> sales = new List<double>();
            foreach (var item in fetchdate)
            {
                var info = customerinvoice.Where(x => x.OrderDate == item).ToList();
                double count = 0;
                foreach (var i in info)
                {
                    count = count + i.TotalWithTax;
                }
                sales.Add(Math.Round(count));
            }
            return Ok(new { date, sales });
        }

        //Get all notice
        [Route("notice"), HttpGet, BasicAuthentication]
        public IHttpActionResult ViewAllNotice()
        {
            var notices = noticerepo.GetAll();
            if (notices.Count > 0)
            {
                return Ok(noticerepo.AddLinksForAdmin(notices));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);

        }

        //Get notice by id
        [Route("notice/{id}"), HttpGet, BasicAuthentication]
        public IHttpActionResult NoticeDetails(int id)
        {
            var notice = noticerepo.GetById(id);
            if (notice != null)
            {
                return Ok(noticerepo.AddLinkForAdmin(notice));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }

        //Create new notice
        [Route("notice"),HttpPost,BasicAuthentication]
        public IHttpActionResult CreateNewNotice(Notice notice)
        {
            if (ModelState.IsValid)
            {
                noticerepo.Insert(notice);
                return Created("http://localhost:51045/api/admins/"+notice.NoticeId, noticerepo.AddLinkForAdmin(notice));
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        
        //Edit a notice
        [Route("notice/{id}"),HttpPut,BasicAuthentication]
        public IHttpActionResult NoticeEdit(int id, Notice notice)
        {
            notice.NoticeId = id;
            noticerepo.Update(notice);
            return Ok(noticerepo.AddLinkForAdmin(notice));
        }

        //Delete a notice
        [Route("notice/{id}"), HttpDelete, BasicAuthentication]
        public IHttpActionResult ConfirmNoticeDelete(int id)
        {
            noticerepo.Delete(id);
            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
