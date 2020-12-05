using System.Collections.Generic;
using System.Threading.Tasks;
using HIT.Persistence.Entities;

namespace HIT.Persistence.Repositories.Interfaces
{
    public interface ISemesterRepository
    {
        Task<IEnumerable<Semester>> GetSemesters();
        Task<Semester> GetSemester(string id);
        Task<IEnumerable<Semester>> GetSemesterByName(string name);
        Task Create(Semester product);
        Task<bool> Update(Semester product);
        Task<bool> Delete(string id);
    }
}