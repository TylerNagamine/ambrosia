using Ambrosia.Data.Models.Internal;
using Microsoft.EntityFrameworkCore;

namespace Ambrosia.Data.Models.Contexts
{
    public class AmbrosiaContext : DbContext
    {
        public AmbrosiaContext(DbContextOptions<AmbrosiaContext> options)
            : base(options)
        {
        }

        public DbSet<Ingredient> Ingredients { get; set; }

        public DbSet<Recipe> Recipes { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
