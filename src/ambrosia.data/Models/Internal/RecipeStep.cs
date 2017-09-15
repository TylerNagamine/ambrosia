using System;

namespace Ambrosia.Data.Models.Internal
{
    public class RecipeStep
    {
        public string Description { get; set; }

        public Guid Id { get; set; }

        public int Number { get; set; }

        public Guid RecipeId { get; set; }
    }
}
