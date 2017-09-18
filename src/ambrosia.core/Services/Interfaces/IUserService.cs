using Ambrosia.Core.Models.Api;
using System;
using System.Threading.Tasks;

namespace Ambrosia.Core.Services
{
    public interface IUserService
    {
        Task<UserDto> AddUser(UserDto toAdd);

        Task DeleteUser(Guid id);

        Task<UserDto> GetUser(Guid id);

        Task<UserDto[]> GetUsers();

        Task<UserDto> UpdateUser(UserDto toUpdate);
    }
}
