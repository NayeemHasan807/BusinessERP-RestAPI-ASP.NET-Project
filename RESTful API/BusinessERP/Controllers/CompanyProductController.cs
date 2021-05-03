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
    [RoutePrefix("api/companyproducts")]
    public class CompanyProductController : ApiController
    {
        private CompanyProductRepository comprodrepo = new CompanyProductRepository();
        private CustomerLineItemRepository cuslirepo = new CustomerLineItemRepository();

        //To get all products
        [Route(""),HttpGet,BasicAuthentication]
        public IHttpActionResult Index()
        {
            var products = comprodrepo.GetAll();
            if (products.Count > 0)
            {
                return Ok(comprodrepo.AddLinksForCustomer(products));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }

        //Product view for visitors
        [Route("preview"), HttpGet]
        public IHttpActionResult preview()
        {
            var products = comprodrepo.GetAll();
            if (products.Count > 0)
            {
                return Ok(comprodrepo.AddLinksForCustomer(products));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }

        //To get best selling products
        [Route("bestselling"),HttpGet,BasicAuthentication]
        public IHttpActionResult BestSelling()
        {
            //Session["Place"] = "BestSelling";
            var lineItems = cuslirepo.GetAll();
            var pid = lineItems.Select(x => x.ProductId).Distinct();
            List<ReportViewModel> tpvm = new List<ReportViewModel>();
            foreach (var item in pid)
            {
                ReportViewModel index = new ReportViewModel();
                index.Product = comprodrepo.GetById(item);
                index.Count = lineItems.Where(x => x.ProductId == item).Count();
                tpvm.Add(index);
            }
            List<ReportViewModel> ntpvm = tpvm.OrderByDescending(x => x.Count).Take(5).ToList();
            List<CompanyProduct> cproduct = new List<CompanyProduct>();
            foreach (var item in ntpvm)
            {
                cproduct.Add(item.Product);
            }
            if (cproduct.Count > 0)
            {
                return Ok(comprodrepo.AddLinksForCustomer(cproduct));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
            
        }

        //View product by id
        [Route("{id}"),HttpGet,BasicAuthentication]
        public IHttpActionResult ViewProduct(int id)
        {
            var product = comprodrepo.GetById(id);
            if (product != null)
            {
                return Ok(comprodrepo.AddLinkForCustomer(product));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
                
        }

        //Search by product name
        [Route("search"),HttpGet,BasicAuthentication]
        public IHttpActionResult Index(string searchkey)
        {
            
            if (searchkey == null)
            {
                var products = comprodrepo.GetAll();
                return Ok(comprodrepo.AddLinksForCustomer(products));
            }
            else
            {
                var products = comprodrepo.GetAllSearchedByName(searchkey);
                if (products.Count > 0)
                {
                    return Ok(comprodrepo.AddLinksForCustomer(products));
                }
                else
                    return StatusCode(HttpStatusCode.NoContent);
            }
        }

        //Get the list of stockout products
        [Route("stockout"),HttpGet,BasicAuthentication]
        public IHttpActionResult StockOut()
        {
            var products = comprodrepo.StockOut();
            if (products.Count > 0)
            {
                return Ok(comprodrepo.AddLinksForAdmin(products));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }

        //Get the list of low stock products
        [Route("lowstock"), HttpGet, BasicAuthentication]
        public IHttpActionResult LowStock()
        {
            var products = comprodrepo.LowStock();
            if (products.Count > 0)
            {
                return Ok(comprodrepo.AddLinksForAdmin(products));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
