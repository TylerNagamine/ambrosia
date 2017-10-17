namespace Ambrosia.Core.Models.Api
{
    /// <summary>
    /// Dto representing a recipe step.
    /// </summary>
    public class StepDto
    {
        /// <summary>
        /// Description of the step.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Step number.
        /// </summary>
        public int Number { get; set; }
    }
}
