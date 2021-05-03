using BusinessERP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessERP.Repositories
{
    public class CompanyProductRepository:Repository<CompanyProduct>
    {
        public CompanyProduct AddLinkForAdmin(CompanyProduct product)
        {
            product.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts/stockout", Method = "GET", Relation = "View all stock out product list" });
            product.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts/lowstock", Method = "GET", Relation = "View all stock out product list" });
            return product;
        }
        public List<CompanyProduct> AddLinksForAdmin(List<CompanyProduct> products)
        {
            foreach (var item in products)
            {
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts/stockout", Method = "GET", Relation = "View all stock out product list" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts/lowstock", Method = "GET", Relation = "View all stock out product list" });
            }
            return products;
        }

        public CompanyProduct AddLinkForCustomer(CompanyProduct product)
        {
            product.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts", Method = "GET", Relation = "View all products for customer" });
            product.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts/"+product.ProductId, Method = "GET", Relation = "View details of a selected products for customer" });
            product.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts/bestselling", Method = "GET", Relation = "View all products for customer" });
            return product;
        }
        public List<CompanyProduct> AddLinksForCustomer(List<CompanyProduct> products)
        {
            foreach (var item in products)
            {
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts", Method = "GET", Relation = "View all products for customer" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts/" + item.ProductId, Method = "GET", Relation = "View details of a selected products for customer" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/companyproducts/bestselling", Method = "GET", Relation = "View all products for customer" });
            }
            return products;
        }
        public List<CompanyProduct> StockOut()
        {
            return context.CompanyProducts.Where(x => x.Quantity == 0).ToList();
        }
        public List<CompanyProduct> LowStock()
        {
            return context.CompanyProducts.Where(x => x.Quantity > 0 && x.Quantity<10).ToList();
        }
        public List<CompanyProduct> GetAllSearchedByName(string name)
        {
            var list = context.CompanyProducts.Where(x => x.ProductName.Contains(name)).OrderBy(x => x.ProductName).ToList();
            return list;
        }
    }
}