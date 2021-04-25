namespace BusinessERP.Migrations
{
    using BusinessERP.Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<BusinessERP.Models.BusinessERPDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(BusinessERP.Models.BusinessERPDbContext context)
        {
            List<User> users = new List<User>()
            {
                new User{ UserName="nayeem87",Password="nayeem87",UserType="Admin",UserStatus="Active"}
            };
            List<Employee> employees = new List<Employee>()
            {
                new Employee{ EmployeeName="Nayeem Hasan",UserName="nayeem87",Email="moonnayeem87@gmail.com",Gender="Male",DateOfBirth=DateTime.Parse("1998-02-26"),Address="Badda,Dhaka,1212",JoiningDate=DateTime.Parse("2018-11-06"),ProfilePicture="~/Content/ProfilePictures/b2021-03-15.jpg",Status="Active",JobId=1}
            };
            List<JobCategory> jobCategories = new List<JobCategory>()
            {
                new JobCategory{JobTitle="Admin",Salary=60000},
                new JobCategory{JobTitle="HR Manager",Salary=55000},
                new JobCategory{JobTitle="Assets Manager",Salary=52000},
                new JobCategory{JobTitle="Project Manager",Salary=50000},
                new JobCategory{JobTitle="Finance Manager",Salary=50000},
                new JobCategory{JobTitle="Support",Salary=30000},
                new JobCategory{JobTitle="Supplier",Salary=15000},
                new JobCategory{JobTitle="Staff",Salary=10000},
                new JobCategory{JobTitle="Intern",Salary=7000},
                new JobCategory{JobTitle="Sales Manager",Salary=40000}
            };
            List<CompanyProductCategory> companyProductCategories = new List<CompanyProductCategory>()
            {
                new CompanyProductCategory{CategoryName="Costumes",Discriptions="Costumes"},
                new CompanyProductCategory { CategoryName = "FX", Discriptions = "Special Effects" },
                new CompanyProductCategory { CategoryName = "Masks", Discriptions = "Masks" },
                new CompanyProductCategory { CategoryName = "Props", Discriptions = "Props" }
            };
            if (!context.Users.Any())
            {
                foreach (var item in users)
                {
                    context.Users.Add(item);
                    context.SaveChanges();
                }
            }
            if (!context.Employees.Any())
            {
                foreach (var item in employees)
                {
                    context.Employees.Add(item);
                    context.SaveChanges();
                }
            }
            if (!context.JobCategories.Any())
            {
                foreach (var item in jobCategories)
                {
                    context.JobCategories.Add(item);
                    context.SaveChanges();
                }
            }
            if (!context.CompanyProductCategories.Any())
            {
                foreach (var item in companyProductCategories)
                {
                    context.CompanyProductCategories.Add(item);
                    context.SaveChanges();
                }
            }
        }
    }
}
