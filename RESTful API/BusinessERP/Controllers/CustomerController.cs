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
    [RoutePrefix("api/customers")]
    public class CustomerController : ApiController
    {
        private CompanyProductRepository comprodrepo = new CompanyProductRepository();
        private CustomerRepository customerrepo = new CustomerRepository();
        private NoticeRepository noticerepo = new NoticeRepository();
        private CustomerInvoiceRepository cusinvrepo = new CustomerInvoiceRepository();
        private CustomerLineItemRepository cuslirepo = new CustomerLineItemRepository();
        private RequestToSupportRepository rtsrepo = new RequestToSupportRepository();
        //Dashboard
        [Route(""), HttpGet, BasicAuthentication]
        public IHttpActionResult Index(string userName)
        {
            Customer data = new Customer();
            data = customerrepo.GetByUserName(userName);
            if (data != null)
            {
                return Ok(customerrepo.AddLinkForCustomer(data));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
            
        }
        //Get all notice for customer
        [Route("notice"),HttpGet,BasicAuthentication]
        public IHttpActionResult ViewNotice()
        {
            var notices = noticerepo.GetAllForCustomer();
            if (notices.Count > 0)
            {
                return Ok(noticerepo.AddLinksForCustomer(notices));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
            
        }
        [Route("supportrequest"),HttpPost,BasicAuthentication]
        public IHttpActionResult SupportRequest(RequestToSupport request)
        {
            
            if (ModelState.IsValid)
            {
                rtsrepo.Insert(request);
                return Created("http://localhost:51045/api/supports/viewsupportrequest",request);
            }
            else
                return BadRequest(ModelState);
        }
    }
}
