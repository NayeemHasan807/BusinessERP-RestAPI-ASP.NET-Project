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
    [RoutePrefix("api/users")]
    public class UserController : ApiController
    {
        private UserRepository userrepo = new UserRepository();

        [Route(""),HttpGet]
        public IHttpActionResult GetUser(string userName,string password)
        {
            if (userName != null & password != null)
            {
                var checkUser = userrepo.GetByUserName(userName);
                if (checkUser != null)
                {
                    if (checkUser.UserName.ToString() == userName & checkUser.Password.ToString() == password)
                    {
                        return Ok(checkUser);
                    }
                    return StatusCode(HttpStatusCode.NoContent);
                }
                return StatusCode(HttpStatusCode.NoContent);
            }
            return StatusCode(HttpStatusCode.BadRequest);
        }

        [Route("check"), HttpGet,BasicAuthentication]
        public IHttpActionResult CheckUserNameAvailablity(string userName)
        {
            var checkUser = userrepo.GetByUserName(userName);
            if (checkUser != null)
            {
                return Ok();
            }
            else
                return StatusCode(HttpStatusCode.NoContent);
        }
    }

}
