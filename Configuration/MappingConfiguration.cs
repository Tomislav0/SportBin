using Mapster;
using SportBin.Models.Definitions;
using SportBin.Models.DTO;

namespace SportBin.Configuration
{
    public class MappingConfiguration : IRegister
    {
        public void Register(TypeAdapterConfig config)
        {
            config.NewConfig<Event, EventDTO>()
                .Map(dest => dest.PhotoUrls,
                src => src.Photos.Select(p => p.Url))
                .Map(dest => dest.CategoryNames,
                src => src.EventCategories.Select(e=>e.Category.Name));

        }
    }
}
