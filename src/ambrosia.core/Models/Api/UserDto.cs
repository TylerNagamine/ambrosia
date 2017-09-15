using Ambrosia.Core.Models.Api.Enums;
using System;

namespace Ambrosia.Core.Models.Api
{
    public class UserDto
    {
        public string EmailAddress { get; set; }

        public Guid Id { get; set; }

        public AccountRole Role { get; set; }

        public string UserName { get; set; }
    }
}
