using SportBin.Models.Enum;

namespace SportBin.Models.Definitions
{
    public class Category : BaseEntity
    {
        public string Name { get; set; } = "";

        public virtual ICollection<EventCategory> EventCategories { get; set; }
    }
}
