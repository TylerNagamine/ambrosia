using Ambrosia.Core.Mapper;
using Ambrosia.Core.Services;
using Ambrosia.Data.Models.Contexts;
using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using Newtonsoft.Json.Converters;
using Swashbuckle.AspNetCore.Swagger;
using System.IO;

namespace Ambrosia
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
                    HotModuleReplacement = true,
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
            services.AddDbContext<AmbrosiaContext>(options =>
            {
                options.UseNpgsql(Configuration.GetConnectionString("ambrosia"), o => o.MigrationsAssembly("Ambrosia.Data"));
            });

            var mapper = MapperFactory.Create();
            services.AddSingleton(mapper);

            services.AddScoped<IUserService, UserService>();

            services.AddMvc()
                .AddJsonOptions(c => c.SerializerSettings.Converters.Add(new StringEnumConverter()));

            services.AddSwaggerGen(c =>
            {
                c.DescribeAllEnumsAsStrings();

                var xmlPath = Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "ambrosia.xml");
                var coreXmlPath = Path.Combine(PlatformServices.Default.Application.ApplicationBasePath, "Ambrosia.Core.xml");

                if (File.Exists(xmlPath))
                {
                    c.IncludeXmlComments(xmlPath);
                }
                if (File.Exists(coreXmlPath))
                {
                    c.IncludeXmlComments(coreXmlPath);
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
