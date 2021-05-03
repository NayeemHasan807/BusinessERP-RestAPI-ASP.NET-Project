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

        //Product Perches Report
        [Route("{userName}/productperchesreport"), HttpGet, BasicAuthentication]
        public IHttpActionResult ProductPerchesBarChart([FromUri]string userName)
        {
            
                var customerinvoice = cusinvrepo.GetAllByUserName(userName);
                List<ReportViewModel> view = new List<ReportViewModel>();
                foreach (var item in customerinvoice)
                {
                    var lineItems = cuslirepo.GetByInvoiceId(item.InvoiceId);
                    foreach (var items in lineItems)
                    {
                        var indevisualproduct = comprodrepo.GetById(items.ProductId);
                        bool check = false;
                        foreach (var item_s in view)
                        {
                            if (item_s.Product.ProductId == indevisualproduct.ProductId)
                            {
                                item_s.Count = item_s.Count + items.Quantity;
                                check = true;
                                break;
                            }
                            else
                                continue;
                        }
                        if (check == false)
                        {
                            ReportViewModel newp = new ReportViewModel();
                            newp.Product = indevisualproduct;
                            newp.Count = items.Quantity;
                            view.Add(newp);
                        }
                    }
                }
                List<string> ProductName = new List<string>();
                List<int> PerchesQuantity = new List<int>();
                foreach (var item in view)
                {
                    ProductName.Add(item.Product.ProductName);
                    PerchesQuantity.Add(item.Count);
                }
                return Ok(new { ProductName, PerchesQuantity });
        }

        //Shopping Expenses Report
        [Route("{userName}/shoppingexpensesreport"), HttpGet, BasicAuthentication]
        public IHttpActionResult ShoppingExpensesLineChart([FromUri]string userName)
        {
           
                var customerinvoice = cusinvrepo.GetAllByUserName(userName);
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
    }
}
