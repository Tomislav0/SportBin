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
        public async Task<EventDTO> CreateEvent(EventBM model)
        {
            //TODO: wrap in transaction
            var newEvent = model.Adapt<Event>();
            newEvent.Id = Guid.NewGuid();
            //TODO: implement file saving
            var files = model.PhotoUrls.Select(url => new Models.Definitions.File() { Url = url, EventId = newEvent.Id });
            var eventCategories = model.CategoryIds.Select(c =>
            {
                var eventCategoryId = Guid.NewGuid();
                return new EventCategory() { EventId = newEvent.Id, Id = eventCategoryId, CategoryId = c };
            });
            newEvent.EventCategories = eventCategories.ToList();
            await _ctx.Event.AddAsync(newEvent);
            await _ctx.File.AddRangeAsync(files);
            await _ctx.EventCategory.AddRangeAsync(eventCategories);

            await _ctx.SaveChangesAsync();


            return newEvent.Adapt<EventDTO>();
        }
        public async Task<EventDTO> GetEventById(Guid EventId)
        {
            return await _ctx.Event.Where(e => e.Id == EventId).ProjectToType<EventDTO>().FirstOrDefaultAsync();
        }

        public async Task<List<EventDTO>> GetAllEvents()
        {
            return await _ctx.Event.Include(e => e.Photos)
                .Include(e => e.EventCategories)
                .ThenInclude(e => e.Category)
                .ProjectToType<EventDTO>()
                .ToListAsync();
        }
    }
}
