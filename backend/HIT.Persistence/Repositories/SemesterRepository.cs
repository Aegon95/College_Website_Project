using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HIT.Entities.Entities;
using HIT.Persistence.Context;
using HIT.Persistence.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HIT.Persistence.Repositories
{
    public class SemesterRepository : ISemesterRepository
    {
        private readonly CollegeContext _context;

        public SemesterRepository(CollegeContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Semester>> GetAllSemesters()
        {
            return await _context
                .Semesters
                .ToListAsync();
        }

        public async Task<Semester> GetSemester(Guid id)
        {
            return await _context
                .Semesters
                .Where(p => p.Id == id)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Semester>> GetSemesterByName(string name)
        {

            return await _context
                .Semesters
                .Where(s => s.Name == name)
                .ToListAsync();
        }


        public async Task<Semester> CreateSemester(Semester semester)
        {
            await _context.Semesters.AddAsync(semester);
            await _context.SaveChangesAsync();
            return semester;
        }

        public async Task<Semester> UpdateSemester(Semester semester)
        {
            await _context.SaveChangesAsync();
            return semester;
        }

        public async Task DeleteSemester(Semester semester)
        {
            _context
                .Semesters
                .Remove(semester);
            await _context.SaveChangesAsync();
            
        }
    }
}