
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SportBin.Models.Definitions;

namespace SportBin.Data
{
    public class DataContext : IdentityDbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<User> User { get; set; }
        public DbSet<Models.Definitions.File> File { get; set; }
        public DbSet<Category> Category { get; set; }
        public DbSet<Event> Event { get; set; }
        public DbSet<EventCategory> EventCategory { get; set; }
        public DbSet<Subscription> Subscription { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }

    }
}
