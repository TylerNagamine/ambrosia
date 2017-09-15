using Ambrosia.Core.Models.Api;
using System;
using System.Threading.Tasks;

namespace Ambrosia.Core.Services
{
    public interface IUserService
    {
        Task<UserDto> GetUser(Guid id);
    }
}
