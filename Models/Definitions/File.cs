using System.ComponentModel.DataAnnotations.Schema;

namespace SportBin.Models.Definitions
{
    public class File : BaseEntity
    {
        public string Url { get; set; } = "";
        public Guid EventId { get; set; }
        [ForeignKey("EventId")]
        public virtual Event Event { get; set; }
    }
}
