using Ambrosia.Data.Models.Internal.Enums;
using System;

namespace Ambrosia.Data.Models.Internal
{
    public class User
    {
        public string EmailAddress { get; set; }

        public Guid Id { get; set; }

        public string Password { get; set; }

        public AccountRole? Roles { get; set; }

        public string UserName { get; set; }
    }
}
