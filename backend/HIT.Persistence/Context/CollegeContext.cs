using HIT.Entities.Entities;
using Microsoft.EntityFrameworkCore;


namespace HIT.Persistence.Context
{
    public class CollegeContext : DbContext
    {
        public  CollegeContext (DbContextOptions<CollegeContext> options) : base(options)
        {

        }

        public DbSet<Semester> Semesters { get; set; }
    }
}