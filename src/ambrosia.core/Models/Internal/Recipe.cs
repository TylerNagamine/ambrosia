using System;
using System.Collections.Generic;
using System.Text;

namespace ambrosia.core.Models.Internal
{
    public class Recipe
    {
        public Guid Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public List<RecipeStep> Steps { get; set; }
    }
}
