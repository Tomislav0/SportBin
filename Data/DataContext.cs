using Microsoft.EntityFrameworkCore;
using SportBin.Models.Definitions;
using System.Reflection.Emit;

namespace SportBin.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
            
        }
        public DbSet<User> User => Set<User>();
        public DbSet<Models.Definitions.File> File => Set<Models.Definitions.File>();
        public DbSet<Category> Category => Set<Category>();
        public DbSet<Event> Event => Set<Event>();
        public DbSet<EventCategory> EventCategory => Set<EventCategory>();


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Event>()
               .HasMany(dm => dm.Photos)
               .WithOne(dm => dm.Event)
               .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Models.Definitions.File>()
               .HasOne(dm => dm.Event)
               .WithMany(dm => dm.Photos)
               .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Models.Definitions.File>()
              .HasOne(dm => dm.Event)
              .WithMany(dm => dm.Photos)
              .OnDelete(DeleteBehavior.Cascade);

        }

    }
}
