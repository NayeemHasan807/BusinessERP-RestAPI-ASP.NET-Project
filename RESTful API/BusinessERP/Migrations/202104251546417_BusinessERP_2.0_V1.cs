namespace BusinessERP.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BusinessERP_20_V1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.CompanyInvoices",
                c => new
                    {
                        InvoiceId = c.Int(nullable: false, identity: true),
                        OrderDate = c.DateTime(nullable: false),
                        SubTotal = c.Double(nullable: false),
                        TotalWithTax = c.Double(nullable: false),
                        CreditCardType = c.String(nullable: false, maxLength: 50, unicode: false),
                        CardNumber = c.String(nullable: false, maxLength: 17, unicode: false),
                        VendorUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        EmployeeUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.InvoiceId);
            
            CreateTable(
                "dbo.CompanyLineItems",
                c => new
                    {
                        LineId = c.Int(nullable: false, identity: true),
                        InvoiceId = c.Int(nullable: false),
                        ProductId = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                        UnitPrice = c.Double(nullable: false),
                        Total = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.LineId);
            
            CreateTable(
                "dbo.CompanyProductCategories",
                c => new
                    {
                        CategoryId = c.Int(nullable: false, identity: true),
                        CategoryName = c.String(nullable: false, maxLength: 50, unicode: false),
                        Discriptions = c.String(nullable: false, maxLength: 500, unicode: false),
                    })
                .PrimaryKey(t => t.CategoryId);
            
            CreateTable(
                "dbo.CompanyProducts",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        ProductName = c.String(nullable: false, maxLength: 100, unicode: false),
                        ShortDescription = c.String(nullable: false, maxLength: 200, unicode: false),
                        LongDescription = c.String(nullable: false, maxLength: 500, unicode: false),
                        UnitPrice = c.Double(nullable: false),
                        Quantity = c.Int(nullable: false),
                        ProductPicture = c.String(nullable: false, maxLength: 200, unicode: false),
                        CategoryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ProductId);
            
            CreateTable(
                "dbo.CustomerInvoices",
                c => new
                    {
                        InvoiceId = c.Int(nullable: false, identity: true),
                        OrderDate = c.DateTime(nullable: false, storeType: "date"),
                        SubTotal = c.Double(nullable: false),
                        TotalWithTax = c.Double(nullable: false),
                        CreditCardType = c.String(nullable: false, maxLength: 50, unicode: false),
                        CardNumber = c.String(nullable: false, maxLength: 50, unicode: false),
                        CustomerUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.InvoiceId);
            
            CreateTable(
                "dbo.CustomerLineItems",
                c => new
                    {
                        LineId = c.Int(nullable: false, identity: true),
                        InvoiceId = c.Int(nullable: false),
                        ProductId = c.Int(nullable: false),
                        Quantity = c.Int(nullable: false),
                        UnitPrice = c.Double(nullable: false),
                        Total = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.LineId);
            
            CreateTable(
                "dbo.Customers",
                c => new
                    {
                        CustomerId = c.Int(nullable: false, identity: true),
                        CustomerName = c.String(nullable: false, maxLength: 50, unicode: false),
                        UserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        Email = c.String(nullable: false, maxLength: 50, unicode: false),
                        Gender = c.String(nullable: false, maxLength: 50, unicode: false),
                        DateOfBirth = c.DateTime(nullable: false),
                        Address = c.String(nullable: false, maxLength: 100, unicode: false),
                        ProfilePicture = c.String(nullable: false, maxLength: 200, unicode: false),
                        Status = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.CustomerId);
            
            CreateTable(
                "dbo.CustomerTexts",
                c => new
                    {
                        TextId = c.Int(nullable: false, identity: true),
                        TextBody = c.String(nullable: false, maxLength: 500, unicode: false),
                        ReceiverUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        SenderUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.TextId);
            
            CreateTable(
                "dbo.Employees",
                c => new
                    {
                        EmployeeId = c.Int(nullable: false, identity: true),
                        EmployeeName = c.String(nullable: false, maxLength: 50, unicode: false),
                        UserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        Email = c.String(nullable: false, maxLength: 50, unicode: false),
                        Gender = c.String(nullable: false, maxLength: 50, unicode: false),
                        DateOfBirth = c.DateTime(nullable: false, storeType: "date"),
                        Address = c.String(nullable: false, maxLength: 50, unicode: false),
                        JoiningDate = c.DateTime(nullable: false, storeType: "date"),
                        ProfilePicture = c.String(nullable: false, maxLength: 200, unicode: false),
                        Status = c.String(nullable: false, maxLength: 30, unicode: false),
                        JobId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.EmployeeId);
            
            CreateTable(
                "dbo.EmployeeTexts",
                c => new
                    {
                        TextId = c.Int(nullable: false, identity: true),
                        TextBody = c.String(nullable: false, maxLength: 500, unicode: false),
                        ReceiverUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        SenderUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.TextId);
            
            CreateTable(
                "dbo.JobCategories",
                c => new
                    {
                        JobId = c.Int(nullable: false, identity: true),
                        JobTitle = c.String(nullable: false, maxLength: 50, unicode: false),
                        Salary = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.JobId);
            
            CreateTable(
                "dbo.Notices",
                c => new
                    {
                        NoticeId = c.Int(nullable: false, identity: true),
                        NoticeTitle = c.String(nullable: false, maxLength: 100, unicode: false),
                        NoticeBody = c.String(nullable: false, maxLength: 500, unicode: false),
                        ReceiverType = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.NoticeId);
            
            CreateTable(
                "dbo.RawMaterials",
                c => new
                    {
                        MaterialId = c.Int(nullable: false, identity: true),
                        MaterialName = c.String(nullable: false, maxLength: 50, unicode: false),
                        Quantity = c.Int(nullable: false),
                        UnitPrice = c.Double(nullable: false),
                        ReceivingDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.MaterialId);
            
            CreateTable(
                "dbo.RawMaterialUsesLogs",
                c => new
                    {
                        LogId = c.Int(nullable: false, identity: true),
                        MaterialId = c.Int(nullable: false),
                        UsedQuantity = c.Int(nullable: false),
                        UnitPrice = c.Double(nullable: false),
                        Date = c.DateTime(nullable: false),
                        ManufacturingCost = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.LogId);
            
            CreateTable(
                "dbo.RegistrationRequestLogs",
                c => new
                    {
                        LogId = c.Int(nullable: false, identity: true),
                        UserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        UserType = c.String(nullable: false, maxLength: 50, unicode: false),
                        Date = c.DateTime(nullable: false),
                        SupportUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        Status = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.LogId);
            
            CreateTable(
                "dbo.RegistrationRequests",
                c => new
                    {
                        RegistrationId = c.Int(nullable: false, identity: true),
                        Name = c.String(nullable: false, maxLength: 50, unicode: false),
                        UserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        Password = c.String(nullable: false, maxLength: 50, unicode: false),
                        Email = c.String(nullable: false, maxLength: 50, unicode: false),
                        Gender = c.String(nullable: false, maxLength: 50, unicode: false),
                        DateOfBirth = c.DateTime(nullable: false, storeType: "date"),
                        Address = c.String(nullable: false, maxLength: 100, unicode: false),
                        ProfilePicture = c.String(nullable: false, maxLength: 200, unicode: false),
                        UserType = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.RegistrationId);
            
            CreateTable(
                "dbo.RequestToSupports",
                c => new
                    {
                        RequestId = c.Int(nullable: false, identity: true),
                        RequestSubject = c.String(nullable: false, maxLength: 100, unicode: false),
                        RequestBody = c.String(nullable: false, maxLength: 500, unicode: false),
                        SenderUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        UserType = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.RequestId);
            
            CreateTable(
                "dbo.SupplierLogs",
                c => new
                    {
                        LogId = c.Int(nullable: false, identity: true),
                        Date = c.DateTime(nullable: false),
                        Time = c.Time(nullable: false, precision: 7),
                        Comment = c.String(nullable: false, maxLength: 50, unicode: false),
                        ScheduleId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.LogId);
            
            CreateTable(
                "dbo.SupplierSchedules",
                c => new
                    {
                        ScheduleId = c.Int(nullable: false, identity: true),
                        WorkType = c.String(nullable: false, maxLength: 50, unicode: false),
                        Address = c.String(nullable: false, maxLength: 50, unicode: false),
                        Date = c.DateTime(nullable: false),
                        Time = c.Time(nullable: false, precision: 7),
                    })
                .PrimaryKey(t => t.ScheduleId);
            
            CreateTable(
                "dbo.SupportLogs",
                c => new
                    {
                        LogId = c.Int(nullable: false, identity: true),
                        RequestSubject = c.String(nullable: false, maxLength: 50, unicode: false),
                        RequestBody = c.String(nullable: false, maxLength: 100, unicode: false),
                        SenderUserName = c.String(nullable: false, maxLength: 500, unicode: false),
                        UserType = c.String(nullable: false, maxLength: 50, unicode: false),
                        Date = c.DateTime(nullable: false),
                        SupportUserName = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.LogId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        UserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        Password = c.String(nullable: false, maxLength: 50, unicode: false),
                        UserType = c.String(nullable: false, maxLength: 30, unicode: false),
                        UserStatus = c.String(nullable: false, maxLength: 30, unicode: false),
                    })
                .PrimaryKey(t => t.UserId);
            
            CreateTable(
                "dbo.VendorProducts",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        ProductName = c.String(nullable: false, maxLength: 100, unicode: false),
                        ShortDescription = c.String(nullable: false, maxLength: 200, unicode: false),
                        LongDescription = c.String(nullable: false, maxLength: 500, unicode: false),
                        UnitPrice = c.Double(nullable: false),
                        Quantity = c.Int(nullable: false),
                        ProductPicture = c.String(nullable: false, maxLength: 200, unicode: false),
                        VendorId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ProductId);
            
            CreateTable(
                "dbo.Vendors",
                c => new
                    {
                        VendorId = c.Int(nullable: false, identity: true),
                        VendorName = c.String(nullable: false, maxLength: 50, unicode: false),
                        UserName = c.String(nullable: false, maxLength: 50, unicode: false),
                        Email = c.String(nullable: false, maxLength: 50, unicode: false),
                        Gender = c.String(nullable: false, maxLength: 50, unicode: false),
                        DateOfBirth = c.DateTime(nullable: false),
                        Address = c.String(nullable: false, maxLength: 100, unicode: false),
                        ProfilePicture = c.String(nullable: false, maxLength: 200, unicode: false),
                        Status = c.String(nullable: false, maxLength: 50, unicode: false),
                    })
                .PrimaryKey(t => t.VendorId);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Vendors");
            DropTable("dbo.VendorProducts");
            DropTable("dbo.Users");
            DropTable("dbo.SupportLogs");
            DropTable("dbo.SupplierSchedules");
            DropTable("dbo.SupplierLogs");
            DropTable("dbo.RequestToSupports");
            DropTable("dbo.RegistrationRequests");
            DropTable("dbo.RegistrationRequestLogs");
            DropTable("dbo.RawMaterialUsesLogs");
            DropTable("dbo.RawMaterials");
            DropTable("dbo.Notices");
            DropTable("dbo.JobCategories");
            DropTable("dbo.EmployeeTexts");
            DropTable("dbo.Employees");
            DropTable("dbo.CustomerTexts");
            DropTable("dbo.Customers");
            DropTable("dbo.CustomerLineItems");
            DropTable("dbo.CustomerInvoices");
            DropTable("dbo.CompanyProducts");
            DropTable("dbo.CompanyProductCategories");
            DropTable("dbo.CompanyLineItems");
            DropTable("dbo.CompanyInvoices");
        }
    }
}
