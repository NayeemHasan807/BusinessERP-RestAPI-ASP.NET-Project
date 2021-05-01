using BusinessERP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessERP.Repositories
{
    public class NoticeRepository:Repository<Notice>
    {
        public Notice AddLinkForAdmin(Notice notice)
        {
            notice.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice", Method = "POST", Relation = "Create a new notice resource" });
            notice.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + notice.NoticeId, Method = "GET", Relation = "View selected notice details" });
            notice.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + notice.NoticeId, Method = "PUT", Relation = "Modify an existing notice resource" });
            notice.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + notice.NoticeId, Method = "DELETE", Relation = "Delete an existing notice resource" });
            return notice;
        }
        public List<Notice> AddLinksForAdmin(List<Notice> notices)
        {
            foreach (var item in notices)
            {
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice", Method = "POST", Relation = "Create a new notice resource" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + item.NoticeId, Method = "GET", Relation = "View selected notice details" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + item.NoticeId, Method = "PUT", Relation = "Modify an existing notice resource" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + item.NoticeId, Method = "DELETE", Relation = "Delete an existing notice resource" });
            }
            return notices;
        }
        public Notice AddLinkForSupport(Notice notice)
        {
            notice.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice", Method = "POST", Relation = "Create a new notice resource" });
            notice.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + notice.NoticeId, Method = "GET", Relation = "View selected notice details" });
            notice.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + notice.NoticeId, Method = "PUT", Relation = "Modify an existing notice resource" });
            notice.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + notice.NoticeId, Method = "DELETE", Relation = "Delete an existing notice resource" });
            return notice;
        }
        public List<Notice> AddLinksForSupport(List<Notice> notices)
        {
            foreach (var item in notices)
            {
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice", Method = "POST", Relation = "Create a new notice resource" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + item.NoticeId, Method = "GET", Relation = "View selected notice details" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + item.NoticeId, Method = "PUT", Relation = "Modify an existing notice resource" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/admins/notice" + item.NoticeId, Method = "DELETE", Relation = "Delete an existing notice resource" });
            }
            return notices;
        }
        public List<Notice> GetAllForCustomer()
        {
            var noticesforcustomer = context.Notices.Where(x => x.ReceiverType == "Customer" || x.ReceiverType == "All").ToList();
            return noticesforcustomer;
        }
    }
}