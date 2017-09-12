using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using Swashbuckle.AspNetCore.Swagger;
using System.IO;

namespace ambrosia
{
    /// <summary>
    /// ambrosia setup class.
    /// </summary>
    public class Startup
    {
        /// <summary>
        /// <see cref="Startup"/> constructor.
        /// </summary>
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        /// <summary>
        /// Configuration root.
        /// </summary>
        public IConfiguration Configuration { get; }

        /// <summary>
        /// Configure the application environment.
        /// </summary>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            loggerFactory
                .AddConsole(Configuration.GetSection("Logging"))
                .AddAzureWebAppDiagnostics();

            if (env.IsDevelopment())
            {
                loggerFactory.AddDebug();

                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Ambrosia Api V1");
            });

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }

        /// <summary>
        /// Configures application services.
        /// </summary>
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddSwaggerGen(c =>
            {
                c.DescribeAllEnumsAsStrings();
                c.DescribeAllParametersInCamelCase();
                c.DescribeStringEnumsInCamelCase();

                var xmlPath = Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "ambrosia.xml");
                if (File.Exists(xmlPath))
                {
                    c.IncludeXmlComments(xmlPath);
                }

                c.SwaggerDoc("v1", new Info
                {
                    Description = "Ambrosia Api",
                    Title = "Ambrosia Api",
                    Version = "1",
                });
            });
        }
    }
}