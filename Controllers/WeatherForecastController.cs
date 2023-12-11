using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportBin.Data;
using SportBin.Models.Definitions;

namespace SportBin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DataContext _ctx;
        public WeatherForecastController(DataContext ctx, ILogger<WeatherForecastController> logger)
        {
            _logger = logger;
            _ctx = ctx;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }

        [HttpGet("admin")]
        public async Task<ActionResult<List<User>>> GetAdmin()
        {
            return Ok(await _ctx.User.ToListAsync());
        }
    }
}