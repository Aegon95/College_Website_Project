using HIT.Entities;
using MongoDB.Driver;

namespace HIT.Context.Interfaces
{
    public interface ISemesterContext
    {
        IMongoCollection<Semester> Semesters { get; }
    }
}