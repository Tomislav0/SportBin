using Microsoft.AspNetCore.Mvc;
using SportBin.Data;
using SportBin.Models.DTO;
using SportBin.Services;

namespace SportBin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController : ControllerBase
    {
        private readonly AdminService _adminService;
        public AdminController(DataContext ctx, AdminService adminService)
        {
            _adminService = adminService;
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<UserDTO>>> GetAllUsers()
        {
            var result = await _adminService.GetAllUsers();
            return Ok(result);
        }

    }
}