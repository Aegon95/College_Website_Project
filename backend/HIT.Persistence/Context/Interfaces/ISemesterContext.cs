using HIT.Persistence.Entities;
using MongoDB.Driver;

namespace HIT.Persistence.Context.Interfaces
{
    public interface ISemesterContext
    {
        IMongoCollection<Semester> Semesters { get; }
    }
}