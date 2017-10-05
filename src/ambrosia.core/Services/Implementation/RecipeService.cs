using Ambrosia.Core.Models.Api;
using Ambrosia.Data.Models.Contexts;
using Ambrosia.Data.Models.Internal;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Threading.Tasks;

namespace Ambrosia.Core.Services
{
    /// <summary>
    /// Service for manipulating and retrieving recipes.
    /// </summary>
    public class RecipeService : IRecipeService
    {
        private readonly AmbrosiaContext _context;
        private readonly ILogger<RecipeService> _logger;
        private readonly IMapper _mapper;

        /// <summary>
        /// Constructs an instance of <see cref="RecipeService"/> from its dependencies.
        /// </summary>
        public RecipeService(
            ILoggerFactory loggerFactory,
            IMapper mapper,
            AmbrosiaContext context)
        {
            _logger = loggerFactory.CreateLogger<RecipeService>();
            _mapper = mapper;
            _context = context;
        }

        /// <summary>
        /// <see cref="IRecipeService.AddRecipe"/>.
        /// </summary>
        public async Task<RecipeDto> AddRecipe(RecipeDto recipe)
        {
            if (recipe == null)
            {
                throw new ArgumentNullException(nameof(recipe));
            }

            _logger.LogInformation($"Adding a new recipe. Name: {recipe.Name}.");

            var recipeEntity = _mapper.Map<RecipeDto, Recipe>(recipe);

            var addedEntity = await _context.AddAsync(recipeEntity);
            await _context.SaveChangesAsync();

            var addedRecipe = addedEntity.Entity;

            _logger.LogInformation($"Recipe added/created with Id {addedRecipe.Id}");

            var mapped = _mapper.Map<Recipe, RecipeDto>(addedRecipe);

            return mapped;
        }

        /// <summary>
        /// <see cref="IRecipeService.DeleteRecipe"/>.
        /// </summary>
        public async Task DeleteRecipe(Guid id)
        {
            if (id == Guid.Empty)
            {
                throw new ArgumentException();
            }

            _logger.LogInformation($"Deleting recipe with Id {id}.");

            var retrievedRecipe = await _context.Recipes.SingleOrDefaultAsync(r => r.Id == id);

            if (retrievedRecipe == null)
            {
                _logger.LogWarning($"Recipe with Id {id} not found.");
                throw new InvalidOperationException();
            }

            _context.Remove(retrievedRecipe);
            await _context.SaveChangesAsync();

            _logger.LogInformation($"Successfully removed recipe Id {id}.");
        }

        /// <summary>
        /// <see cref="IRecipeService.GetRecipe"/>.
        /// </summary>
        public async Task<RecipeDto> GetRecipe(Guid id)
        {
            if (id == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(id)} is a required arguent to {nameof(GetRecipe)}");
            }

            _logger.LogInformation($"Retreiving recipe with Id {id}.");

            var storedRecipe = await _context.Recipes.SingleOrDefaultAsync(r => r.Id == id);

            if (storedRecipe == null)
            {
                _logger.LogInformation($"Unable to find recipe with Id {id}.");
                return null;
            }

            var mapped = _mapper.Map<Recipe, RecipeDto>(storedRecipe);

            _logger.LogInformation($"Found recipe matching Id {id}.");

            return mapped;
        }

        /// <summary>
        /// <see cref="IRecipeService.UpdateRecipe"/>.
        /// </summary>
        public async Task<RecipeDto> UpdateRecipe(RecipeDto toUpdate)
        {
            if (toUpdate == null || toUpdate.Id == Guid.Empty)
            {
                throw new ArgumentException();
            }

            _logger.LogInformation($"Attempting to update recipe Id {toUpdate.Id}.");

            var retrievedEntity = await _context.Recipes.SingleOrDefaultAsync(r => r.Id == toUpdate.Id);

            if (retrievedEntity == null)
            {
                _logger.LogWarning($"Recipe with Id {toUpdate.Id} was not found.");
                throw new InvalidOperationException();
            }

            var entity = _mapper.Map<RecipeDto, Recipe>(toUpdate);

            var updatedEntityEntry = _context.Recipes.Update(entity);
            await _context.SaveChangesAsync();

            _logger.LogInformation($"Successfully updated recipe with id {toUpdate.Id}.");

            var mapped = _mapper.Map<Recipe, RecipeDto>(updatedEntityEntry.Entity);

            return mapped;
        }
    }
}
