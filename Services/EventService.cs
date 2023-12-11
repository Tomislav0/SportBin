using Mapster;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportBin.Data;
using SportBin.Models.BM;
using SportBin.Models.Definitions;
using SportBin.Models.DTO;

namespace SportBin.Services
{
    public class EventService : BaseService
    {
        public EventService(DataContext ctx) : base(ctx)
        {
        }
        public async Task<ActionResult<EventDTO>> CreateEvent(EventBM model)
        {
            var newEvent = model.Adapt<Event>();
            newEvent.Id = Guid.NewGuid();
            var files = model.PhotoUrls.Select(url =>
            {
                return new Models.Definitions.File() { Url = url, EventId = newEvent.Id };
            });
            var test = await _ctx.Category.Select(s => s.Id).ToListAsync();
            var cId = model.CategoryIds.First();
            var testttt = test.Contains(cId);
            var eventCategories = model.CategoryIds.Select(c => new EventCategory() { EventId = newEvent.Id, CategoryId = c });
            await _ctx.Event.AddAsync(newEvent);

            await _ctx.SaveChangesAsync();
            await _ctx.File.AddRangeAsync(files);

            await _ctx.SaveChangesAsync();
            await _ctx.EventCategory.AddRangeAsync(eventCategories);
            await _ctx.SaveChangesAsync();


            return newEvent.Adapt<EventDTO>();
        }
        public async Task<ActionResult<EventDTO>> GetEventById(Guid EventId)
        {
            return await _ctx.Event.Where(e => e.Id == EventId).ProjectToType<EventDTO>().FirstOrDefaultAsync();
        }

        public async Task<ActionResult<List<EventDTO>>> GetAllEvents()
        {
            var test = await _ctx.Event.Include(e => e.Photos)
                .Include(e => e.EventCategories)
                .ThenInclude(e => e.Category)
                .ToListAsync();
            return await _ctx.Event.Include(e => e.Photos)
                .Include(e => e.EventCategories)
                .ThenInclude(e => e.Category)
                .ProjectToType<EventDTO>()
                .ToListAsync();
        }
    }
}
