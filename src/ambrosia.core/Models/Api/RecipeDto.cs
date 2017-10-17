using System;
using System.Collections.Generic;

namespace Ambrosia.Core.Models.Api
{
    /// <summary>
    /// Dto representing an entire recipe.
    /// </summary>
    public class RecipeDto
    {
        /// <summary>
        /// Amount of time necessary to cook the recipe (seconds).
        /// </summary>
        public int? CookTime { get; set; }

        /// <summary>
        /// Description of the recipe.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Recipe Id.
        /// </summary>
        public Guid Id { get; set; }

        /// <summary>
        /// List of ingredients for the recipe.
        /// </summary>
        public List<IngredientDto> Ingredients { get; set; }

        /// <summary>
        /// Name of the recipe.
        /// </summary>
        public string Name { get; set; }

        /// <summary>
        /// Amount of tim necessary to prepare the recipe (seconds).
        /// </summary>
        public int? PrepTime { get; set; }

        /// <summary>
        /// Steps to prepare the recipe.
        /// </summary>
        public List<StepDto> Steps { get; set; }
    }
}
