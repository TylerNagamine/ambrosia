using Ambrosia.Core.Models.Api;
using Ambrosia.Data.Models.Internal;
using AutoMapper;

namespace Ambrosia.Core.Mapper
{
    public class AutoMapperProfileConfiguration : Profile
    {
        public AutoMapperProfileConfiguration()
        {
            CreateMap<User, UserDto>().ReverseMap();
        }
    }
}
