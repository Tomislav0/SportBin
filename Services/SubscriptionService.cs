using Mapster;
using Microsoft.EntityFrameworkCore;
using SportBin.Data;
using SportBin.Models.BM;
using SportBin.Models.Definitions;
using SportBin.Models.DTO;

namespace SportBin.Services
{
    public class SubscriptionService : BaseService
    {
        public SubscriptionService(DataContext ctx) : base(ctx)
        {
        }
        public async Task<List<SubscriptionDTO>> GetAllSubscriptons()
        {
            return await _ctx.Subscription
                .ProjectToType<SubscriptionDTO>()
                .ToListAsync();
        }
        public async Task<CategoryDTO> AddSubscription(SubscriptionBM model)
        {
            var newSubscription = new Subscription() { Email = model.Email};

            await _ctx.Subscription.AddAsync(newSubscription);
            await _ctx.SaveChangesAsync();
            return newSubscription.Adapt<CategoryDTO>();
        }

        public async Task<bool> DeleteSubscription(Guid id)
        {

            await _ctx.Subscription.Where(x => x.Id == id).ExecuteDeleteAsync();

            return true;
        }

    }
}
