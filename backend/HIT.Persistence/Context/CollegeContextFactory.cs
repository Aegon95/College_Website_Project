using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace HIT.Persistence.Context
{

    public class CollegeContextFactory : IDesignTimeDbContextFactory<CollegeContext>
    {
        public CollegeContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<CollegeContext>();
            //this code will be never executed in runtime only in design time
            builder.UseNpgsql(
                "Server=localhost; port=5432; user id = postgres; password = postgres; database=College; pooling = true");
            return new CollegeContext(builder.Options);
        }
    }
}