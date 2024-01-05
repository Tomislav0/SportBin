using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SportBin.Data;
using SportBin.Models.BM;
using SportBin.Models.DTO;
using SportBin.Services;

namespace SportBin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EventController : ControllerBase
    {

        private readonly DataContext _ctx;
        private readonly EventService _eventService;
        public EventController(DataContext ctx, EventService eventService)
        {
            _ctx = ctx;
            _eventService = eventService;
        }

        [HttpGet("list")]
        public async Task<ActionResult<List<EventDTO>>> GetAllEvents()
        {
            var result = await _eventService.GetAllEvents();
            return Ok(result);
        }


        [HttpGet("{eventId}")]
        public async Task<ActionResult<EventDTO>> GetEvent([FromRoute] Guid eventId)
        {
            var result = await _eventService.GetEventById(eventId);
            return Ok(result);
        }

        [Authorize]
        [HttpPost("")]
        public async Task<ActionResult<EventBM>> CreateEvent([FromBody] EventBM model)
        {
            var result = await _eventService.CreateEvent(model);
            return Ok(result);
        }

        [Authorize]
        [HttpDelete("{eventId}")]
        public async Task<ActionResult<bool>> DeleteEvent([FromBody] Guid eventId)
        {
            var result = await _eventService.DeleteEvent(eventId);
            return Ok(result);
        }


        [HttpGet("categoryEvents/{categoryId}")]
        public async Task<ActionResult<List<EventDTO>>> GetEventsByCategory([FromRoute] Guid categoryId)
        {
            var result = await _eventService.GetEventsByCategory(categoryId);
            return Ok(result);
        }
    }
}