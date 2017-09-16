using Ambrosia.Core.Models.Api;
using Ambrosia.Data.Models.Contexts;
using Ambrosia.Data.Models.Internal;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Ambrosia.Core.Services
{
    public class UserService : IUserService
    {
        private readonly AmbrosiaContext _context;
        private readonly IMapper _mapper;

        public UserService(
            IMapper mapper,
            AmbrosiaContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public async Task<UserDto> AddUser(UserDto toAdd)
        {
            var userEntity = _mapper.Map<UserDto, User>(toAdd);

            userEntity.Id = Guid.NewGuid();

            await _context.Users.AddAsync(userEntity);
            await _context.SaveChangesAsync();

            return toAdd;
        }

        public async Task<UserDto> GetUser(Guid id)
        {
            var retrievedUser = await _context.Users.SingleOrDefaultAsync(u => u.Id == id);

            var dto = _mapper.Map<User, UserDto>(retrievedUser);

            return dto;
        }

        public async Task<UserDto[]> GetUsers()
        {
            var users = await _context.Users.ToArrayAsync();

            var dto = _mapper.Map<User[], UserDto[]>(users);

            return dto;
        }

        public async Task<UserDto> UpdateUser(UserDto toUpdate)
        {
            var userEntity = _mapper.Map<UserDto, User>(toUpdate);

            _context.Update(userEntity);
            await _context.SaveChangesAsync();

            return toUpdate;
        }
    }
}
