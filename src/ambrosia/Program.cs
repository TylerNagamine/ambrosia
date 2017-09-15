using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;

namespace Ambrosia
{
    /// <summary>
    /// Main Ambrosia program.
    /// </summary>
    public class Program
    {
        /// <summary>
        /// Builds the web host.
        /// </summary>
        /// <param name="args">Args to pass.</param>
        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .Build();

        /// <summary>
        /// Main method.
        /// </summary>
        public static void Main(string[] args)
        {
            BuildWebHost(args).Run();
        }
    }
}
