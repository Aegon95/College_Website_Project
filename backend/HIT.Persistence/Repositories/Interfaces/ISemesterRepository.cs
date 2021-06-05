using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HIT.Entities.Entities;

namespace HIT.Persistence.Repositories.Interfaces
{
    public interface ISemesterRepository
    {
        Task<IEnumerable<Semester>> GetAllSemesters();
        Task<Semester> GetSemester(Guid id);
        Task<IEnumerable<Semester>> GetSemesterByName(string name);
        Task<Semester> CreateSemester(Semester semester);
        Task<Semester> UpdateSemester(Semester product);
        Task DeleteSemester(Semester semester);
    }
}