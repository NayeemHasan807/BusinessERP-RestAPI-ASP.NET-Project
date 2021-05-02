using BusinessERP.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BusinessERP.Repositories
{
    public class EmployeeTextRepository:Repository<EmployeeText>
    {
        public EmployeeText Link(EmployeeText text)
        {
            text.Links.Add(new Link() { Url = "http://localhost:51045//api/employeetexts", Method = "POST", Relation = "Create a new text resource" });
            text.Links.Add(new Link() { Url = "http://localhost:51045//api/employeetexts/" + text.TextId, Method = "GET", Relation = "View selected text details" });
            text.Links.Add(new Link() { Url = "http://localhost:51045//api/employeetexts/" + text.TextId, Method = "DELETE", Relation = "Delete an existing text resource" });
            return text;
        }
        public List<EmployeeText> Links(List<EmployeeText> texts)
        {
            foreach (var item in texts)
            {
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/employeetexts", Method = "POST", Relation = "Create a new text resource" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/employeetexts/" + item.TextId, Method = "GET", Relation = "View selected text details" });
                item.Links.Add(new Link() { Url = "http://localhost:51045//api/employeetexts/" + item.TextId, Method = "DELETE", Relation = "Delete an existing text resource" });
            }
            return texts;
        }
        public List<EmployeeText> GetAllReceivedByUserName(string username)
        {
            return context.EmployeeTexts.Where(x=> x.ReceiverUserName == username).ToList();
        }
        public List<EmployeeText> GetAllSentByUserName(string username)
        {
            return context.EmployeeTexts.Where(x => x.SenderUserName == username).ToList();
        }
    }
}