
namespace SportBin.Models.DTO
{
    public class EventDTO : BaseDTO
    {
        public string TeamOneName { get; set; }
        public string TeamTwoName { get; set; }
        public int TeamOneScore { get; set; }
        public int TeamTwoScore { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public ICollection<string> PhotoUrls { get; set; }
        public ICollection<string> CategoryNames { get; set; }
    }
}
