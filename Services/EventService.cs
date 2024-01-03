using Mapster;
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
            var newEvent = model.Adapt<Event>();
            newEvent.Id = Guid.NewGuid();
            var files = model.PhotoUrls.Select(url => new Models.Definitions.File() { Url = url, EventId = newEvent.Id });
            var eventCategories = model.CategoryIds.Select(c => new EventCategory() { EventId = newEvent.Id, CategoryId = c });

            newEvent.EventCategories = eventCategories.ToList();
            await _ctx.Event.AddAsync(newEvent);
            await _ctx.File.AddRangeAsync(files);
            await _ctx.EventCategory.AddRangeAsync(eventCategories);

            await _ctx.SaveChangesAsync();

            return newEvent.Adapt<EventDTO>();

        }

        public async Task<EventDTO> UpdateEvent(EventBM model)
        {
            var existingEvent = await _ctx.Event.FirstOrDefaultAsync(e => e.Id == model.Id);
            if (existingEvent == null)
            {
                return null;
            }
            existingEvent.TeamOneName = model.TeamOneName;
            existingEvent.TeamTwoName = model.TeamTwoName;
            existingEvent.TeamOneScore = model.TeamOneScore;
            existingEvent.TeamTwoScore = model.TeamTwoScore;
            existingEvent.ShortDescription = model.ShortDescription;
            existingEvent.Description = model.Description;
            existingEvent.Date = model.Date;

            await _ctx.File.Where(f => f.EventId == existingEvent.Id).ExecuteDeleteAsync();
            await _ctx.EventCategory.Where(f => f.EventId == existingEvent.Id).ExecuteDeleteAsync();


            var files = model.PhotoUrls.Select(url => new Models.Definitions.File() { Url = url, EventId = existingEvent.Id });
            var eventCategories = model.CategoryIds.Select(c => new EventCategory() { EventId = existingEvent.Id, CategoryId = c });

            await _ctx.File.AddRangeAsync(files);
            await _ctx.EventCategory.AddRangeAsync(eventCategories);

            await _ctx.SaveChangesAsync();

            return existingEvent.Adapt<EventDTO>();
        }

    }

    public async Task<EventDTO> GetEventById(Guid EventId)
    {
        return await _ctx.Event
                .Include(e => e.EventCategories)
                .ThenInclude(e => e.Category)
                .Include(e => e.Photos)
                .Where(e => e.Id == EventId)
                .Select(e => new EventDTO()
                {
                    Id = e.Id,
                    TeamOneName = e.TeamOneName,
                    TeamTwoName = e.TeamTwoName,
                    TeamOneScore = e.TeamOneScore,
                    TeamTwoScore = e.TeamTwoScore,
                    CategoryNames = e.EventCategories.Select(s => s.Category.Name).ToList(),
                    PhotoUrls = e.Photos.Select(p => p.Url).ToList(),
                    ShortDescription = e.ShortDescription,
                    Description = e.Description,
                    Date = e.Date
                })
                .FirstOrDefaultAsync();
    }

    public async Task<List<EventDTO>> GetAllEvents()
    {
        return await _ctx.Event.Include(e => e.Photos)
            .Include(e => e.EventCategories)
            .ThenInclude(e => e.Category)
            .Select(e => new EventDTO()
            {
                Id = e.Id,
                TeamOneName = e.TeamOneName,
                TeamTwoName = e.TeamTwoName,
                TeamOneScore = e.TeamOneScore,
                TeamTwoScore = e.TeamTwoScore,
                CategoryNames = e.EventCategories.Select(s => s.Category.Name).ToList(),
                PhotoUrls = e.Photos.Select(p => p.Url).ToList(),
                ShortDescription = e.ShortDescription,
                Description = e.Description,
                Date = e.Date
            })
            .ToListAsync();
    }
}
}
