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
    public class SubscriptionController : ControllerBase
    {
        private readonly SubscriptionService _subscriptionService;
        public SubscriptionController(DataContext ctx, SubscriptionService subscriptionService)
        {
            _subscriptionService = subscriptionService;
        }

        [Authorize]
        [HttpGet("")]
        public async Task<ActionResult<List<SubscriptionDTO>>> GetAllSubscriptions()
        {
            var result = await _subscriptionService.GetAllSubscriptons();
            return Ok(result);
        }

        [HttpPost("")]
        public async Task<ActionResult<SubscriptionDTO>> AddSubscription(SubscriptionBM model)
        {
            var result = await _subscriptionService.AddSubscription(model);
            return Ok(result);
        }

        [Authorize]
        [HttpDelete("{subscriptionId}")]
        public async Task<ActionResult<bool>> DeleteSubscription([FromRoute] Guid subscriptionId)
        {
            var result = await _subscriptionService.DeleteSubscription(subscriptionId);
            return Ok(result);
        }
    }
}