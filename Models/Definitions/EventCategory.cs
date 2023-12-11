using Microsoft.EntityFrameworkCore.Metadata.Internal;
using SportBin.Migrations;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SportBin.Models.Definitions
{
    public class EventCategory : BaseEntity
    {

        public Guid EventId { get; set; }
        public Guid CategoryId { get; set; }
        [ForeignKey("EventId")]
        public Event Event { get; set; }

        [ForeignKey("CategoryId")]
        public Category Category { get; set; }
    }
}
