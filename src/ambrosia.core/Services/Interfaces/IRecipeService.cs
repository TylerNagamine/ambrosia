using Ambrosia.Core.Models.Api;
using System;
using System.Threading.Tasks;

namespace Ambrosia.Core.Services
{
    /// <summary>
    /// Interface exposing Recipe CRUD operations.
    /// </summary>
    public interface IRecipeService
    {
        /// <summary>
        /// Adds a recipe to the store.
        /// </summary>
        /// <param name="recipe">Recipe to add.</param>
        /// <returns>The added recipe.</returns>
        /// <exception cref="ArgumentNullException">Thrown if <paramref name="recipe"/> is null</exception>
        Task<RecipeDto> AddRecipe(RecipeDto recipe);

        /// <summary>
        /// Deletes a recipe from the store by Id.
        /// </summary>
        /// <param name="id">Id of the recipe to delete.</param>
        /// <exception cref="ArgumentException">Thrown if <paramref name="id"/> is empty.</exception>
        /// <exception cref="InvalidOperationException">Thrown if recipe not found.</exception>
        Task DeleteRecipe(Guid id);

        /// <summary>
        /// Retrieve a recipe from the store by Id.
        /// </summary>
        /// <param name="id">Id of the recipe to retrieve.</param>
        /// <returns>The retrieved recipe, or null if not found.</returns>
        /// <exception cref="ArgumentException">Thrown if <paramref name="id"/> is empty.</exception>
        Task<RecipeDto> GetRecipe(Guid id);

        /// <summary>
        /// Update a recipe in the store.
        /// </summary>
        /// <param name="toUpdate">Recipe to update.</param>
        /// <returns>The updated recipe.</returns>
        /// <exception cref="ArgumentException">
        /// Thrown if <paramref name="toUpdate"/> is invalid.
        /// </exception>
        /// <exception cref="InvalidOperationException">Thrown if recipe not found.</exception>
        Task<RecipeDto> UpdateRecipe(RecipeDto toUpdate);
    }
}
