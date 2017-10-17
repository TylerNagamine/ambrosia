using Ambrosia.Core.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ambrosia.Controllers.Api
{
    /// <summary>
    /// Api controller for recipe requests.
    /// </summary>
    [Route("api/[controller]")]
    public class RecipeController
    {
        private readonly ILogger<RecipeController> _logger;
        private readonly IRecipeService _recipeService;

        /// <summary>
        /// Constructs an instance of <see cref="RecipeController"/> from its dependencies.
        /// </summary>
        public RecipeController(
            ILoggerFactory loggerFactory,
            IRecipeService recipeService)
        {
            _logger = loggerFactory.CreateLogger<RecipeController>();
            _recipeService = recipeService;
        }
    }
}
