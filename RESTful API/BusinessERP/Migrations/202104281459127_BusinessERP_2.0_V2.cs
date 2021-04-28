namespace BusinessERP.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class BusinessERP_20_V2 : DbMigration
    {
        public override void Up()
        {
            CreateIndex("dbo.CompanyProducts", "CategoryId");
            CreateIndex("dbo.Employees", "JobId");
            CreateIndex("dbo.RawMaterialUsesLogs", "MaterialId");
            CreateIndex("dbo.SupplierLogs", "ScheduleId");
            CreateIndex("dbo.VendorProducts", "VendorId");
            AddForeignKey("dbo.CompanyProducts", "CategoryId", "dbo.CompanyProductCategories", "CategoryId", cascadeDelete: true);
            AddForeignKey("dbo.Employees", "JobId", "dbo.JobCategories", "JobId", cascadeDelete: true);
            AddForeignKey("dbo.RawMaterialUsesLogs", "MaterialId", "dbo.RawMaterials", "MaterialId", cascadeDelete: true);
            AddForeignKey("dbo.SupplierLogs", "ScheduleId", "dbo.SupplierSchedules", "ScheduleId", cascadeDelete: true);
            AddForeignKey("dbo.VendorProducts", "VendorId", "dbo.Vendors", "VendorId", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.VendorProducts", "VendorId", "dbo.Vendors");
            DropForeignKey("dbo.SupplierLogs", "ScheduleId", "dbo.SupplierSchedules");
            DropForeignKey("dbo.RawMaterialUsesLogs", "MaterialId", "dbo.RawMaterials");
            DropForeignKey("dbo.Employees", "JobId", "dbo.JobCategories");
            DropForeignKey("dbo.CompanyProducts", "CategoryId", "dbo.CompanyProductCategories");
            DropIndex("dbo.VendorProducts", new[] { "VendorId" });
            DropIndex("dbo.SupplierLogs", new[] { "ScheduleId" });
            DropIndex("dbo.RawMaterialUsesLogs", new[] { "MaterialId" });
            DropIndex("dbo.Employees", new[] { "JobId" });
            DropIndex("dbo.CompanyProducts", new[] { "CategoryId" });
        }
    }
}
