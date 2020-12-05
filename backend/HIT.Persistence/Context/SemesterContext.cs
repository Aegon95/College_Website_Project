using HIT.Persistence.Context.Interfaces;
using HIT.Persistence.Entities;
using MongoDB.Driver;

namespace HIT.Persistence.Context
{
    public class SemesterContext : ISemesterContext
    {
        public  SemesterContext (ISemesterDatabaseSettings )
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Products = database.GetCollection<Product>(settings.CollectionName);
        }

        public IMongoCollection<Semester> Semesters { get; }
    }
}