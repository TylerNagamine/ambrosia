namespace Ambrosia.Core.Models.Api
{
    /// <summary>
    /// Dto representing an ingredient.
    /// </summary>
    public class IngredientDto
    {
        /// <summary>
        /// String describing a group for the ingredient.
        /// </summary>
        /// <example>
        /// Sauce, Protein, Main course
        /// </example>
        public string Group { get; set; }

        /// <summary>
        /// Ingredient name.
        /// </summary>
        public string Ingredient { get; set; }
    }
}
