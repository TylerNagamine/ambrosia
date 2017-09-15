using System;
using System.Collections.Generic;

namespace Ambrosia.Data.Models.Internal
{
    public class Recipe
    {
        public int? CookTime { get; set; }

        public string Description { get; set; }

        public Guid Id { get; set; }

        public List<RecipeIngredient> Ingredients { get; set; }

        public string Name { get; set; }

        public int? PrepTime { get; set; }

        public List<RecipeStep> Steps { get; set; }
    }
}
