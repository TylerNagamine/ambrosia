using System;

namespace Ambrosia.Data.Models.Internal
{
    public class RecipeIngredient
    {
        public string Description { get; set; }

        public string Group { get; set; }

        public Guid Id { get; set; }

        public Ingredient Ingredient { get; set; }

        public Guid IngredientId { get; set; }

        public Guid RecipeId { get; set; }
    }
}
