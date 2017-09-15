using AutoMapper;

namespace Ambrosia.Core.Mapper
{
    public static class MapperFactory
    {
        public static IMapper Create()
        {
            var mapperConfig = new MapperConfiguration(c =>
            {
                c.AddProfile(new AutoMapperProfileConfiguration());
            });

            var mapper = mapperConfig.CreateMapper();

            return mapper;
        }
    }
}
