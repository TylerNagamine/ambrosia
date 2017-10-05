using Ambrosia.Core.Models.Api;
using Ambrosia.Core.Services;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Threading.Tasks;

namespace Ambrosia.Controllers.Api
{
    /// <summary>
    /// Api controller for user requests.
    /// </summary>
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IUserService _userService;

        /// <summary>
        /// Constructs an instance of <see cref="UserController"/> from its dependencies.
        /// </summary>
        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        /// <summary>
        /// Add a user.
        /// </summary>
        /// <param name="toCreate">Request Dto.</param>
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

        /// <summary>
        /// Get a user by Id.
        /// </summary>
        /// <param name="userId">Id of the user to retrieve.</param>
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

        /// <summary>
        /// Get a list of all users.
        /// </summary>
        [HttpGet]
        [SwaggerResponse(200, typeof(UserDto[]), "Succes. Returns a list of users.")]
        [SwaggerResponse(400, typeof(void), "Bad request.")]
        public async Task<IActionResult> GetUsers()
        {
            var users = await _userService.GetUsers();

            return Ok(users);
        }

        /// <summary>
        /// Remove a user by id.
        /// </summary>
        /// <param name="userId">Id of the user to delete.</param>
        [HttpDelete("{userId}")]
        [SwaggerResponse(200, typeof(UserDto), "Succes. Returns the created user.")]
        [SwaggerResponse(400, typeof(void), "Bad request.")]
        public async Task<IActionResult> RemoveUser([FromRoute] Guid userId)
        {
            if (userId == Guid.Empty)
            {
                return BadRequest();
            }

            await _userService.DeleteUser(userId);

            return NoContent();
        }

        /// <summary>
        /// Updates a user.
        /// </summary>
        /// <param name="user">User update request.</param>
        [HttpPut]
        [SwaggerResponse(200, typeof(UserDto), "Succes. Returns a list of users.")]
        public async Task<IActionResult> UpdateUser([FromBody] UserDto user)
        {
            var updatedUser = await _userService.UpdateUser(user);

            return Ok(updatedUser);
        }
    }
}
