using BusinessERP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessERP.Repositories
{
    public class EmployeeRepository:Repository<Employee>
    {
        public Employee AddLink(Employee employee)
        {
            employee.Links.Add(new Link() { Url = "http://localhost:51045//api/employees", Method = "POST", Relation = "Create a new Employee resource" });
            employee.Links.Add(new Link() { Url = "http://localhost:51045//api/employees/" + employee.EmployeeId, Method = "PUT", Relation = "Modify an existing Employee resource" });
            employee.Links.Add(new Link() { Url = "http://localhost:51045//api/employees/" + employee.EmployeeId, Method = "DELETE", Relation = "Delete an existing Employee resource" });
            return employee;
        }

        public List<Employee> AddLinks(List<Employee> employees)
        {
            foreach(var item in employees)
            {
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/employees", Method = "POST", Relation = "Create a new Employee resource" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/employees/" + item.EmployeeId, Method = "PUT", Relation = "Modify an existing Employee resource" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/employees/" + item.EmployeeId, Method = "DELETE", Relation = "Delete an existing Employee resource" });
            }
            return employees;
        }
        public Employee GetByUserName(string username)
        {
            var employee = context.Employees.Where(x => x.UserName == username).FirstOrDefault();
            employee.Links.Add(new Link() { Url = "http://localhost:51045//api/employees", Method = "POST", Relation = "Create a new Employee resource" });
            employee.Links.Add(new Link() { Url = "http://localhost:51045//api/employees/" + employee.EmployeeId, Method = "PUT", Relation = "Modify an existing Employee resource" });
            employee.Links.Add(new Link() { Url = "http://localhost:51045//api/employees/" + employee.EmployeeId, Method = "DELETE", Relation = "Delete an existing Employee resource" });
            return employee;
        }
        public List<Employee> GetAllSearchedByName(string name)
        {
            var list = context.Employees.Where(x => x.EmployeeName.Contains(name)).OrderBy(x => x.EmployeeName).ToList();
            return list;
        }
        public List<Employee> GetAllByAdvancedSearch(int category,string order,string searchkey)
        {
            if(category!=0)
            {
                if (searchkey != null)
                {
                    if (order == "Descending")
                    {
                        var list1 = context.Employees.Where(x => x.JobId == category).Where(x => x.EmployeeName.Contains(searchkey)).OrderByDescending(s => s.EmployeeName).ToList();
                        return list1;
                    }
                    var list2 = context.Employees.Where(x => x.JobId == category).Where(x => x.EmployeeName.Contains(searchkey)).OrderBy(x => x.EmployeeName).ToList();
                    return list2;
                }
                else
                {
                    if (order == "Descending")
                    {
                        var list3 = context.Employees.Where(x => x.JobId == category).OrderByDescending(s => s.EmployeeName).ToList();
                        return list3;
                    }
                    var list4 = context.Employees.Where(x => x.JobId == category).OrderBy(x => x.EmployeeName).ToList();
                    return list4;
                }
            }
            else
            {
                if (searchkey != null)
                {
                    if (order == "Descending")
                    {
                        var list1 = context.Employees.Where(x => x.EmployeeName.Contains(searchkey)).OrderByDescending(s => s.EmployeeName).ToList();
                        return list1;
                    }
                    var list2 = context.Employees.Where(x => x.EmployeeName.Contains(searchkey)).OrderBy(x => x.EmployeeName).ToList();
                    return list2;
                }
                else
                {
                    if (order == "Descending")
                    {
                        var list3 = context.Employees.OrderByDescending(s => s.EmployeeName).ToList();
                        return list3;
                    }
                    var list4 = context.Employees.OrderBy(x => x.EmployeeName).ToList();
                    return list4;
                }
            }
        }
    }
}