using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace ambrosia.Controllers
{
    /// <summary>
    /// Example home controller.
    /// </summary>
    public class HomeController : Controller
    {
        /// <summary>
        ///  Error page controller.
        /// </summary>
        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }

        /// <summary>
        /// Index. App home page.
        /// </summary>
        public IActionResult Index()
        {
            return View();
        }
    }
}
