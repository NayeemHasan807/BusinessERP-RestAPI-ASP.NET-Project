using BusinessERP.Migrations;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BusinessERP.Models
{
    public class BusinessERPDbContext : DbContext
    {
        public BusinessERPDbContext():base("name=BusinessERPDbContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<BusinessERPDbContext, Configuration>());
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //CompanyProduct Table & Columns
            modelBuilder.Entity<CompanyProduct>().ToTable("CompanyProducts")
                                                 .HasKey<int>(x => x.ProductId);
            modelBuilder.Entity<CompanyProduct>().Property(x => x.ProductId).HasColumnType("int")
                                                                            .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<CompanyProduct>().Property(x => x.ProductName).HasColumnType("varchar")
                                                                              .HasMaxLength(100)
                                                                              .IsRequired();
            modelBuilder.Entity<CompanyProduct>().Property(x => x.ShortDescription).HasColumnType("varchar")
                                                                                   .HasMaxLength(200)
                                                                                   .IsRequired();
            modelBuilder.Entity<CompanyProduct>().Property(x => x.LongDescription).HasColumnType("varchar")
                                                                                  .HasMaxLength(500)
                                                                                  .IsRequired();
            modelBuilder.Entity<CompanyProduct>().Property(x => x.UnitPrice).HasColumnType("float")
                                                                            .IsRequired();
            modelBuilder.Entity<CompanyProduct>().Property(x => x.Quantity).HasColumnType("int")
                                                                           .IsRequired();
            modelBuilder.Entity<CompanyProduct>().Property(x => x.ProductPicture).HasColumnType("varchar")
                                                                                 .HasMaxLength(200)
                                                                                 .IsRequired();
            modelBuilder.Entity<CompanyProduct>().Property(x => x.CategoryId).HasColumnType("int")
                                                                             .IsRequired();

            //CustomerInvoice Table & Columns
            modelBuilder.Entity<CustomerInvoice>().ToTable("CustomerInvoices")
                                                 .HasKey<int>(x => x.InvoiceId);
            modelBuilder.Entity<CustomerInvoice>().Property(x => x.InvoiceId).HasColumnType("int")
                                                                             .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<CustomerInvoice>().Property(x => x.OrderDate).HasColumnType("date")
                                                                             .IsRequired();
            modelBuilder.Entity<CustomerInvoice>().Property(x => x.SubTotal).HasColumnType("float")
                                                                            .IsRequired();
            modelBuilder.Entity<CustomerInvoice>().Property(x => x.TotalWithTax).HasColumnType("float")
                                                                                .IsRequired();
            modelBuilder.Entity<CustomerInvoice>().Property(x => x.CreditCardType).HasColumnType("varchar")
                                                                                  .HasMaxLength(50)
                                                                                  .IsRequired();
            modelBuilder.Entity<CustomerInvoice>().Property(x => x.CardNumber).HasColumnType("varchar")
                                                                              .HasMaxLength(50);
            modelBuilder.Entity<CustomerInvoice>().Property(x => x.CustomerUserName).HasColumnType("varchar")
                                                                                    .HasMaxLength(50)
                                                                                    .IsRequired();

            //Employee Table & Columns
            modelBuilder.Entity<Employee>().ToTable("Employees")
                                                 .HasKey<int>(x => x.EmployeeId);
            modelBuilder.Entity<Employee>().Property(x => x.EmployeeId).HasColumnType("int")
                                                                       .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Employee>().Property(x => x.EmployeeName).HasColumnType("varchar")
                                                                         .HasMaxLength(50)
                                                                         .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.UserName).HasColumnType("varchar")
                                                                     .HasMaxLength(50)
                                                                     .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.Email).HasColumnType("varchar")
                                                                  .HasMaxLength(50)
                                                                  .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.Gender).HasColumnType("varchar")
                                                                   .HasMaxLength(50)
                                                                   .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.DateOfBirth).HasColumnType("date")
                                                                        .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.Address).HasColumnType("varchar")
                                                                    .HasMaxLength(50)
                                                                    .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.JoiningDate).HasColumnType("date")
                                                                        .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.ProfilePicture).HasColumnType("varchar")
                                                                           .HasMaxLength(200)
                                                                           .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.Status).HasColumnType("varchar")
                                                                   .HasMaxLength(30)
                                                                   .IsRequired();
            modelBuilder.Entity<Employee>().Property(x => x.JobId).HasColumnType("int")
                                                                  .IsRequired();

            //EmployeeText Table & Columns
            modelBuilder.Entity<EmployeeText>().ToTable("EmployeeTexts")
                                                 .HasKey<int>(x => x.TextId);
            modelBuilder.Entity<EmployeeText>().Property(x => x.TextId).HasColumnType("int")
                                                                       .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<EmployeeText>().Property(x => x.TextBody).HasColumnType("varchar")
                                                                         .HasMaxLength(500)
                                                                         .IsRequired();
            modelBuilder.Entity<EmployeeText>().Property(x => x.ReceiverUserName).HasColumnType("varchar")
                                                                                 .HasMaxLength(50)
                                                                                 .IsRequired();
            modelBuilder.Entity<EmployeeText>().Property(x => x.SenderUserName).HasColumnType("varchar")
                                                                               .HasMaxLength(50)
                                                                               .IsRequired();

            //Notice Table & Columns
            modelBuilder.Entity<Notice>().ToTable("Notices")
                                                 .HasKey<int>(x => x.NoticeId);
            modelBuilder.Entity<Notice>().Property(x => x.NoticeId).HasColumnType("int")
                                                                       .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<Notice>().Property(x => x.NoticeTitle).HasColumnType("varchar")
                                                                         .HasMaxLength(100)
                                                                         .IsRequired();
            modelBuilder.Entity<Notice>().Property(x => x.NoticeBody).HasColumnType("varchar")
                                                                                 .HasMaxLength(500)
                                                                                 .IsRequired();
            modelBuilder.Entity<Notice>().Property(x => x.ReceiverType).HasColumnType("varchar")
                                                                               .HasMaxLength(50)
                                                                               .IsRequired();

            //RegistrationRequest Table & Columns
            modelBuilder.Entity<RegistrationRequest>().ToTable("RegistrationRequests")
                                                 .HasKey<int>(x => x.RegistrationId);
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.RegistrationId).HasColumnType("int")
                                                                                      .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.Name).HasColumnType("varchar")
                                                                            .HasMaxLength(50)
                                                                            .IsRequired();
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.UserName).HasColumnType("varchar")
                                                                                .HasMaxLength(50)
                                                                                .IsRequired();
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.Password).HasColumnType("varchar")
                                                                                .HasMaxLength(50)
                                                                                .IsRequired();
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.Email).HasColumnType("varchar")
                                                                             .HasMaxLength(50)
                                                                             .IsRequired();
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.Gender).HasColumnType("varchar")
                                                                              .HasMaxLength(50)
                                                                              .IsRequired();
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.DateOfBirth).HasColumnType("date")
                                                                                   .IsRequired();
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.Address).HasColumnType("varchar")
                                                                               .HasMaxLength(100)
                                                                               .IsRequired();
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.ProfilePicture).HasColumnType("varchar")
                                                                                      .HasMaxLength(200)
                                                                                      .IsRequired();
            modelBuilder.Entity<RegistrationRequest>().Property(x => x.UserType).HasColumnType("varchar")
                                                                                .HasMaxLength(50)
                                                                                .IsRequired();

            //RequestToSuppoer Table & Columns
            modelBuilder.Entity<RequestToSupport>().ToTable("RequestToSupports")
                                                 .HasKey<int>(x => x.RequestId);
            modelBuilder.Entity<RequestToSupport>().Property(x => x.RequestId).HasColumnType("int")
                                                                              .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<RequestToSupport>().Property(x => x.RequestSubject).HasColumnType("varchar")
                                                                                   .HasMaxLength(100)
                                                                                   .IsRequired();
            modelBuilder.Entity<RequestToSupport>().Property(x => x.RequestBody).HasColumnType("varchar")
                                                                                .HasMaxLength(500)
                                                                                .IsRequired();
            modelBuilder.Entity<RequestToSupport>().Property(x => x.SenderUserName).HasColumnType("varchar")
                                                                                   .HasMaxLength(50)
                                                                                   .IsRequired();
            modelBuilder.Entity<RequestToSupport>().Property(x => x.UserType).HasColumnType("varchar")
                                                                             .HasMaxLength(50)
                                                                             .IsRequired();

            //VendorProduct Table & Columns
            modelBuilder.Entity<VendorProduct>().ToTable("VendorProducts")
                                                 .HasKey<int>(x => x.ProductId);
            modelBuilder.Entity<VendorProduct>().Property(x => x.ProductId).HasColumnType("int")
                                                                           .HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            modelBuilder.Entity<VendorProduct>().Property(x => x.ProductName).HasColumnType("varchar")
                                                                             .HasMaxLength(100)
                                                                             .IsRequired();
            modelBuilder.Entity<VendorProduct>().Property(x => x.ShortDescription).HasColumnType("varchar")
                                                                                  .HasMaxLength(200)
                                                                                  .IsRequired();
            modelBuilder.Entity<VendorProduct>().Property(x => x.LongDescription).HasColumnType("varchar")
                                                                                 .HasMaxLength(500)
                                                                                 .IsRequired();
            modelBuilder.Entity<VendorProduct>().Property(x => x.UnitPrice).HasColumnType("float")
                                                                           .IsRequired();
            modelBuilder.Entity<VendorProduct>().Property(x => x.Quantity).HasColumnType("int")
                                                                          .IsRequired();
            modelBuilder.Entity<VendorProduct>().Property(x => x.ProductPicture).HasColumnType("varchar")
                                                                                .HasMaxLength(200)
                                                                                .IsRequired();
            modelBuilder.Entity<VendorProduct>().Property(x => x.VendorId).HasColumnType("int")
                                                                          .IsRequired();
        }
        public virtual DbSet<CompanyInvoice> CompanyInvoices { get; set; }
        public virtual DbSet<CompanyLineItem> CompanyLineItems { get; set; }
        public virtual DbSet<CompanyProductCategory> CompanyProductCategories { get; set; }
        public virtual DbSet<CompanyProduct> CompanyProducts { get; set; }
        public virtual DbSet<CustomerInvoice> CustomerInvoices { get; set; }
        public virtual DbSet<CustomerLineItem> CustomerLineItems { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<CustomerText> CustomerTexts { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<EmployeeText> EmployeeTexts { get; set; }
        public virtual DbSet<JobCategory> JobCategories { get; set; }
        public virtual DbSet<Notice> Notices { get; set; }
        public virtual DbSet<RawMaterial> RawMaterials { get; set; }
        public virtual DbSet<RawMaterialUsesLog> RawMaterialUsesLogs { get; set; }
        public virtual DbSet<RegistrationRequestLog> RegistrationRequestLogs { get; set; }
        public virtual DbSet<RegistrationRequest> RegistrationRequests { get; set; }
        public virtual DbSet<RequestToSupport> RequestToSupports { get; set; }
        public virtual DbSet<SupplierLog> SupplierLogs { get; set; }
        public virtual DbSet<SupplierSchedule> SupplierSchedules { get; set; }
        public virtual DbSet<SupportLog> SupportLogs { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<VendorProduct> VendorProducts { get; set; }
        public virtual DbSet<Vendor> Vendors { get; set; }
    }
}