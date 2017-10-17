using Ambrosia.Core.Models.Api.Enums;
using System;

namespace Ambrosia.Core.Models.Api
{
    /// <summary>
    /// Dto representing a user.
    /// </summary>
    public class UserDto
    {
        /// <summary>
        /// User's email address.
        /// </summary>
        public string EmailAddress { get; set; }

        /// <summary>
        /// User's Id.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// User's role.
        /// </summary>
        public AccountRole Role { get; set; }

        /// <summary>
        /// User's username.
        /// </summary>
        public string UserName { get; set; }
    }
}
