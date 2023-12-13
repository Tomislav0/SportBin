using Microsoft.EntityFrameworkCore;

namespace SportBin.Models.Definitions
{
    public class Event : BaseEntity
    {
        public string TeamOneName { get; set; } = "";
        public string TeamTwoName { get; set; } = "";
        public int TeamOneScore { get; set; } = 0;
        public int TeamTwoScore { get; set; } = 0;
        public string ShortDescription { get; set; } = "";
        public string Description { get; set; } = "";
        public DateTime Date { get; set; }
        public virtual ICollection<File> Photos { get; set; }
        public virtual ICollection<EventCategory> EventCategories { get; set; }

    }
}
