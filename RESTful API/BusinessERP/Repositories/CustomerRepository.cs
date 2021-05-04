using BusinessERP.Models;
using BusinessERP.Models.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessERP.Repositories
{
    public class CustomerRepository : Repository<Customer>
    {
        public Customer AddLinkForCustomer(Customer customer)
        {
            customer.Links.Add(new Link() { Url = "http://localhost:51045//api/customers", Method = "GET", Relation = "Details of an existing customer resource" });
            return customer;
        }

        public List<Customer> AddLinksForCustomer(List<Customer> customers)
        {
            foreach (var item in customers)
            {
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/customers", Method = "GET", Relation = "Details of an existing Employee resource" });
            }
            return customers;
        }

        public Customer GetByUserName(string username)
        {
            return context.Customers.Where(x => x.UserName == username).FirstOrDefault();
        }
        public List<Customer> GetBySearch(string searchkey, string status)
        {
            if (searchkey != null)
            {
                if (status != "All")
                {
                    var list1 = context.Customers.Where(x => x.CustomerName.Contains(searchkey)).Where(x => x.Status == status).ToList();
                    return list1;
                }
                else
                {
                    var list1 = context.Customers.Where(x => x.CustomerName.Contains(searchkey)).ToList();
                    return list1;
                }

            }
            else
            {
                if (status != "All")
                {
                    var list2 = context.Customers.Where(x => x.Status == status).ToList();
                    return list2;
                }
                else
                {
                    var list2 = context.Customers.ToList();
                    return list2;
                }
            }
        }
    }
}