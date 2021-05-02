using BusinessERP.Models;
using BusinessERP.Repositories;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

namespace BusinessERP.Controllers
{
    [RoutePrefix("api/registrations")]
    public class RegistrationController : ApiController
    {
        private UserRepository userrepo = new UserRepository();
        private RegistrationRequestRepository rrrepo = new RegistrationRequestRepository();
        private CompanyProductRepository comprodrepo = new CompanyProductRepository();
        private RequestToSupportRepository rtsrepo = new RequestToSupportRepository();

        //Create registration request
        [Route(""),HttpPost]
        public IHttpActionResult Registration([FromBody]RegistrationRequest registration)
        {

            if (ModelState.IsValid)
            {
                if (registration.Password.ToString() == registration.CPassword.ToString())
                {
                    var person = userrepo.GetByUserName(registration.UserName);
                    if (person == null)
                    {
                        rrrepo.Insert(registration);
                        return Created("",registration);
                            
                    }
                    else
                    {
                        return BadRequest("This username is taken");
                    }
                }
                else
                {
                    return BadRequest("Password & Confirm Password Must Need To Be Same!!!");
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }
        [Route("{id}"), HttpPost]
        public async Task<IHttpActionResult> AddPicture([FromUri]int id)
        {
            var ctx = HttpContext.Current;
            var root = ctx.Server.MapPath("~/Content/ProfilePictures");
            var provider = new MultipartFileStreamProvider(root);
            await Request.Content.ReadAsMultipartAsync(provider);
            foreach (var file in provider.FileData)
            {
                var name = file.Headers.ContentDisposition.FileName;
                name = name.Trim('"');
                var localFileName = file.LocalFileName;
                name = DateTime.Now.ToString("yyyy-MM-dd") + "-" + DateTime.Now.ToString("hh-mm-ss") + name;
                var filePath = Path.Combine(root, name);
                var db = "Content/ProfilePictures/" + name;
                File.Move(localFileName, filePath);
                var registartion = rrrepo.GetById(id);
                registartion.ProfilePicture = db;
                rrrepo.Update(registartion);
                return Created("http://localhost:51045/" + db, registartion);
            }
            return StatusCode(HttpStatusCode.BadRequest);
        }
    }
}
