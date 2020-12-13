using System.Collections.Generic;
using System.Threading.Tasks;
using HIT.Entities;

namespace HIT.Repositories.Interfaces
{
    public interface ISemesterRepository
    {
        Task<IEnumerable<Semester>> GetAllSemesters();
        Task<Semester> GetSemester(string id);
        Task<IEnumerable<Semester>> GetSemesterByName(string name);
        Task<Semester> CreateSemester(Semester product);
        Task<bool> UpdateSemester(Semester product);
        Task<bool> DeleteSemester(string id);
    }
}