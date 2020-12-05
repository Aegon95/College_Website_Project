using HIT.Context.Interfaces;
using HIT.Entities;
using HIT.Settings;
using MongoDB.Driver;

namespace HIT.Context
{
    public class SemesterContext : ISemesterContext
    {
        public SemesterContext(ISemesterDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            Semesters = database.GetCollection<Semester>(settings.CollectionName);
        }

        public IMongoCollection<Semester> Semesters { get; }
    }
}