using BusinessERP.Attributes;
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
        
        [Route("stockout"),HttpGet,BasicAuthentication]
        public IHttpActionResult StockOut()
        {
            var products = comprodrepo.StockOut();
            if (products.Count > 0)
            {
                return Ok(products);
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
                
            

        }
        [Route("lowstock"), HttpGet, BasicAuthentication]
        public IHttpActionResult LowStock()
        {
            var products = comprodrepo.LowStock();
            if (products.Count > 0)
            {
                return Ok(products);
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
