using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportBin.Data;
using SportBin.Models.BM;
using SportBin.Models.Definitions;
using SportBin.Models.DTO;
using SportBin.Services;

namespace SportBin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {
       
        private readonly ILogger<WeatherForecastController> _logger;
        private readonly DataContext _ctx;
        private readonly EventService _eventService;
        public EventController(DataContext ctx, ILogger<WeatherForecastController> logger, EventService eventService)
        {
            _logger = logger;
            _ctx = ctx;
            _eventService = eventService;
        }

        [HttpPost("")]
        public async Task<ActionResult<EventBM>> CreateEvent([FromBody]EventBM model)
        {
            var result = await _eventService.CreateEvent(model);
            return Ok(result);
        }

        [HttpGet("{eventId}")]
        public async Task<ActionResult<EventDTO>> GetEvent([FromRoute] Guid eventId)
        {
            var result = await _eventService.GetEventById(eventId);
            return Ok(result);
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<EventDTO>>> GetAllEvents()
        {
            var result = await _eventService.GetAllEvents();
            return Ok(result);
        }
        
    }
}