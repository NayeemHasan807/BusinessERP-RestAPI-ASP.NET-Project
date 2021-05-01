using BusinessERP.Attributes;
using BusinessERP.Models.ViewModels;
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
    [RoutePrefix("api/profiles")]
    public class ProfileController : ApiController
    {
        private CustomerRepository customerrepo = new CustomerRepository();
        private VendorRepository vendorrepo = new VendorRepository();
        private EmployeeRepository employeerepo = new EmployeeRepository();
        private UserRepository userrepo = new UserRepository();
        private JobCategoryRepository jobcatrepo = new JobCategoryRepository();
        
        //Get Profile
        [Route("{userType}/{userName}"),HttpGet,BasicAuthentication]
        public IHttpActionResult GetProfile(string userType, string userName)
        {
            if (userType == "Customer")
            {
                var profile = customerrepo.GetByUserName(userName);
                var profileview = new ProfileViewModel();
                profileview.Id = profile.CustomerId;
                profileview.Name = profile.CustomerName;
                profileview.UserName = profile.UserName;
                profileview.Gender = profile.Gender;
                profileview.Email = profile.Email;
                profileview.DateOfBirth = profile.DateOfBirth;
                profileview.Address = profile.Address;
                profileview.ProfilePicture = profile.ProfilePicture;
                profileview.Status = profile.Status;
                return Ok(profileview);
            }
            else if (userType == "Vendor")
            {
                var profile = vendorrepo.GetByUserName(userName);
                var profileview = new ProfileViewModel();
                profileview.Id = profile.VendorId;
                profileview.Name = profile.VendorName;
                profileview.UserName = profile.UserName;
                profileview.Gender = profile.Gender;
                profileview.Email = profile.Email;
                profileview.DateOfBirth = profile.DateOfBirth;
                profileview.Address = profile.Address;
                profileview.ProfilePicture = profile.ProfilePicture;
                profileview.Status = profile.Status;
                return Ok(profileview);
            }
            else
            {
                var profile = employeerepo.GetByUserName(userName);
                var jobDetails = jobcatrepo.GetById((int)profile.JobId);
                var profileview = new ProfileViewModel();
                profileview.Id = profile.EmployeeId;
                profileview.Name = profile.EmployeeName;
                profileview.UserName = profile.UserName;
                profileview.Gender = profile.Gender;
                profileview.Email = profile.Email;
                profileview.DateOfBirth = profile.DateOfBirth;
                profileview.Address = profile.Address;
                profileview.JoiningDate = profile.JoiningDate;
                profileview.ProfilePicture = profile.ProfilePicture;
                profileview.JobId = profile.JobId;
                profileview.Status = profile.Status;
                return Ok(new { profileview , jobDetails});

            }
        }

        //Update Profile Picture
        [Route("{userType}/{userName}/updateprofilepicture"), HttpPost, BasicAuthentication]
        public async Task<IHttpActionResult> AddProfilePicture(string userType, string userName)
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
                if (userType == "Customer")
                {
                    var customer = customerrepo.GetByUserName(userName);
                    customer.ProfilePicture = db;
                    customerrepo.Update(customer);
                    return Created("http://localhost:51045/" + db, customer);
                }
                else if (userType == "Vendor")
                {
                    var vendor = vendorrepo.GetByUserName(userName);
                    vendor.ProfilePicture = db;
                    vendorrepo.Update(vendor);
                    return Created("http://localhost:51045/" + db, vendor);
                }
                else
                {
                    var employee = employeerepo.GetByUserName(userName);
                    employee.ProfilePicture = db;
                    employeerepo.Update(employee);
                    return Created("http://localhost:51045/" + db, employee);
                }
            }
            return StatusCode(HttpStatusCode.BadRequest);
        }

        //Update Profile
        [Route("{userType}"),HttpPut,BasicAuthentication]
        public IHttpActionResult UpdateProfile(string userType,ProfileViewModel updatedata)
        {
            if (ModelState.IsValid)
            {
                
                if (userType == "Customer")
                {
                    var profile = customerrepo.GetByUserName(updatedata.UserName);
                    profile.CustomerName = updatedata.Name;
                    profile.Email = updatedata.Email;
                    profile.Gender = updatedata.Gender;
                    profile.DateOfBirth = updatedata.DateOfBirth;
                    profile.Address = updatedata.Address;
                    customerrepo.Update(profile);
                    return Ok(profile);
                }
                else if (userType == "Vendor")
                {
                    var profile = vendorrepo.GetByUserName(updatedata.UserName);
                    profile.VendorName = updatedata.Name;
                    profile.Email = updatedata.Email;
                    profile.Gender = updatedata.Gender;
                    profile.DateOfBirth = updatedata.DateOfBirth;
                    profile.Address = updatedata.Address;
                    vendorrepo.Update(profile);
                    return Ok(profile);
                }
                else
                {
                    var profile = employeerepo.GetByUserName(updatedata.UserName);
                    profile.EmployeeName = updatedata.Name;
                    profile.Email = updatedata.Email;
                    profile.Gender = updatedata.Gender;
                    profile.DateOfBirth = updatedata.DateOfBirth;
                    profile.Address = updatedata.Address;
                    employeerepo.Update(profile);
                    return Ok(profile);
                }
            }
            else
            {
                return BadRequest(ModelState);
            }
        }

        //Change Profile Password
        [Route("{userName}/updatepassword"),HttpPut,BasicAuthentication]
        public IHttpActionResult ChangePassword([FromUri]string userName, ChangePasswordViewModel change)
        {
            if (ModelState.IsValid)
            {
                var user = userrepo.GetByUserName(userName);
                if (change.Password == user.Password)
                {
                    if (change.NewPassword == change.ReNewPassword)
                    {
                        user.Password = change.NewPassword;
                        userrepo.Update(user);
                        return Ok(user);
                    }
                    else
                    {
                        return BadRequest("New password and retype new password must need to be same!");
                    }
                }
                else
                {
                    return BadRequest("Current password is wrong!");
                }
            }
            else
                return BadRequest(ModelState);
        }
    }
}
