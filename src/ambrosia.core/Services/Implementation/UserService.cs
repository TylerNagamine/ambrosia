﻿using Ambrosia.Core.Models.Api;
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

        public async Task<UserDto> GetUser(Guid id)
        {
            var retrievedUser = await _context.Users.SingleOrDefaultAsync(u => u.Id == id);

            var dto = _mapper.Map<User, UserDto>(retrievedUser);

            return dto;
        }
    }
}