using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.SwaggerGen;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ambrosia.Controllers
{
    /// <summary>
    /// Sample data api controller.
    /// </summary>
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        private static string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        /// <summary>
        /// Get weather forecasts.
        /// </summary>
        [HttpGet("[action]")]
        [SwaggerResponse(200, typeof(IEnumerable<WeatherForecast>))]
        public IEnumerable<WeatherForecast> WeatherForecasts()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                DateFormatted = DateTime.Now.AddDays(index).ToString("d"),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            });
        }

        /// <summary>
        /// Class representing a weather forecast.
        /// </summary>
        public class WeatherForecast
        {
            /// <summary>
            /// Date, formatted.
            /// </summary>
            public string DateFormatted { get; set; }

            /// <summary>
            /// Summary string.
            /// </summary>
            public string Summary { get; set; }

            /// <summary>
            /// Temperate in C.
            /// </summary>
            public int TemperatureC { get; set; }

            /// <summary>
            /// Returns the temperature in F.
            /// </summary>
            public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
        }
    }
}
