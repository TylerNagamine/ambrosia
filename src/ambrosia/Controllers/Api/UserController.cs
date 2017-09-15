using Ambrosia.Core.Models.Api;
using Ambrosia.Core.Services;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Threading.Tasks;

namespace Ambrosia.Controllers.Api
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        [SwaggerResponse(200, typeof(UserDto), "Succes. Returns the created user.")]
        [SwaggerResponse(400, typeof(void), "Bad request.")]
        public async Task<IActionResult> AddUser([FromBody] UserDto toCreate)
        {
            if (toCreate == null)
            {
                return BadRequest($"{nameof(toCreate)} is required.");
            }

            var createdUser = await _userService.AddUser(toCreate);

            return Ok(createdUser);
        }

        [HttpGet("{userId}")]
        [SwaggerResponse(200, typeof(UserDto), "Succes. Returns the created user.")]
        [SwaggerResponse(400, typeof(void), "Bad request.")]
        [SwaggerResponse(404, typeof(void), "User with the specified Id not found.")]
        public async Task<IActionResult> GetUser([FromRoute] Guid userId)
        {
            if (userId == Guid.Empty)
            {
                return BadRequest($"{nameof(userId)} is required.");
            }

            var retrievedUser = await _userService.GetUser(userId);

            if (retrievedUser == null)
            {
                return NotFound();
            }

            return Ok(retrievedUser);
        }

        [HttpGet]
        [SwaggerResponse(200, typeof(UserDto[]), "Succes. Returns a list of users.")]
        [SwaggerResponse(400, typeof(void), "Bad request.")]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetUsers();

            return Ok(users);
        }
    }
}
