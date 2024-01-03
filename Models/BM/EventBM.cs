
namespace SportBin.Models.BM
{
    public class EventBM
    {
        public Guid? Id { get; set; }
        public string TeamOneName { get; set; }
        public string TeamTwoName { get; set; }
        public int TeamOneScore { get; set; }
        public int TeamTwoScore { get; set; }
        public string ShortDescription { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public ICollection<string> PhotoUrls { get; set; }
        public ICollection<Guid> CategoryIds { get; set; }
    }
}
