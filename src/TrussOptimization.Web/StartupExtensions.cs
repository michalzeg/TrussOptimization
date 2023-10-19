using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using StruCal.AppCore.TrussOptimization;
using StruCal.TrussOptimization.Domain.Progress;
using StruCal.TrussOptimization.Hubs;
using System.IO;

namespace StruCal.TrussOptimization
{
    public static class StartupExtensions
    {
        public static IApplicationBuilder AddTrussOptimizationStaticFiles(this IApplicationBuilder builder, IWebHostEnvironment env)
        {
            if (env.IsDevelopment()) return builder;

            builder.UseStaticFiles(new StaticFileOptions
            {
                FileProvider = new PhysicalFileProvider(
                Path.Combine(env.ContentRootPath, Startup.ClientName)),
                RequestPath = $"/{Startup.ClientName}"
            });
            return builder;
        }

        public static IServiceCollection AddTrussOptimization(this IServiceCollection services)
        {
            services.AddTransient<TrussOptimizationService>();

            services.AddScoped<TrussOptimizationProgressAdapter>();
            services.AddTransient<IProgress>(f => f.GetRequiredService<TrussOptimizationProgressAdapter>());
            services.AddTransient<ITrussOptimizationProgress>(f => f.GetRequiredService<TrussOptimizationProgressAdapter>());

            return services;
        }

        public static void AddTrussOptimizationHub(this IEndpointRouteBuilder endpoints)
        {
            endpoints.MapHub<TrussOptimizationHub>("/TrussOptimizationHub");
        }
    }
}