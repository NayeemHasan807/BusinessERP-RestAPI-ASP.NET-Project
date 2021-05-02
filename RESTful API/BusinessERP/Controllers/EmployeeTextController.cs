using BusinessERP.Attributes;
using BusinessERP.Models;
using BusinessERP.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BusinessERP.Controllers
{
    [RoutePrefix("api/employeetexts")]
    public class EmployeeTextController : ApiController
    {
        private EmployeeRepository employeerepo = new EmployeeRepository();
        private EmployeeTextRepository textrepo = new EmployeeTextRepository();

        [Route("{userName}/index"),HttpGet,BasicAuthentication]
        public IHttpActionResult Index([FromUri]string userName)
        {
            var texts = textrepo.GetAllReceivedByUserName(userName);
            if (texts.Count > 0)
            {
                return Ok(textrepo.Links(texts));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
            
        }
        [Route("{userName}/sendbyme"), HttpGet, BasicAuthentication]
        public IHttpActionResult SendByMe([FromUri] string userName)
        {
            var texts = textrepo.GetAllSentByUserName(userName);
            if (texts.Count > 0)
            {
                return Ok(textrepo.Links(texts));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }
        [Route("{id}"), HttpGet, BasicAuthentication]
        public IHttpActionResult GetText([FromUri] int id)
        {
            var text = textrepo.GetById(id);
            if (text != null)
            {
                return Ok(textrepo.Link(text));
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
            
        }
        [Route(""),HttpPost,BasicAuthentication]
        public IHttpActionResult Create(EmployeeText employeeText)
        {
            
            if (ModelState.IsValid)
            {
                var checkperson = employeerepo.GetByUserName(employeeText.ReceiverUserName);
                if (checkperson != null)
                {
                    textrepo.Insert(employeeText);
                    return Created("http://localhost:51045//api/employeetexts/"+employeeText.TextId, textrepo.Link(employeeText));
                }
                return BadRequest("Their is no employee with this username");
            }
            return BadRequest(ModelState);

        }
        [Route("reply"), HttpPost, BasicAuthentication]
        public IHttpActionResult Reply(EmployeeText employeeText)
        {
           
            if (ModelState.IsValid)
            {
                textrepo.Insert(employeeText);
                return Created("http://localhost:51045//api/employeetexts/" + employeeText.TextId, textrepo.Link(employeeText));
            }
            return BadRequest(ModelState);

        }
        [Route("{id}"), HttpDelete, BasicAuthentication]
        public IHttpActionResult Delete([FromUri] int id)
        {
            textrepo.Delete(id);
            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
