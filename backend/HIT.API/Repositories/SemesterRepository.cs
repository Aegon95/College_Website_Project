using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HIT.Context.Interfaces;
using HIT.Entities;
using HIT.Repositories.Interfaces;
using MongoDB.Bson;
using MongoDB.Driver;

namespace HIT.Repositories
{
    public class SemesterRepository : ISemesterRepository
    {
        private readonly ISemesterContext _context;

        public SemesterRepository(ISemesterContext semesterContext)
        {
            _context = semesterContext ?? throw new ArgumentNullException(nameof(semesterContext));
        }

        public async Task<IEnumerable<Semester>> GetAllSemesters()
        {
            return await _context
                .Semesters
                .Find(p => true)
                .ToListAsync();
        }

        public async Task<Semester> GetSemester(string id)
        {
            return await _context
                .Semesters
                .Find(p => p.Id == id)
                .FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Semester>> GetSemesterByName(string name)
        {
            var filter = Builders<Semester>.Filter.ElemMatch(p => p.Name, name);

            return await _context
                .Semesters
                .Find(filter)
                .ToListAsync();
        }


        public async Task<Semester> CreateSemester(Semester semester)
        {
            semester.CreatedOnUTC = DateTime.UtcNow;
            semester.createdBy = "root@gmail.com";
            semester.Id = ObjectId.GenerateNewId().ToString();
            await _context.Semesters.InsertOneAsync(semester);
            return semester;
        }

        public async Task<bool> UpdateSemester(Semester semester)
        {
            var updateResult = await _context
                .Semesters
                .ReplaceOneAsync(g => g.Id == semester.Id, semester);

            return updateResult.IsAcknowledged
                   && updateResult.ModifiedCount > 0;
        }

        public async Task<bool> DeleteSemester(string id)
        {
            var filter = Builders<Semester>.Filter.Eq(semester => semester.Id, id);
            var deleteResult = await _context
                .Semesters
                .DeleteOneAsync(filter);

            return deleteResult.IsAcknowledged
                   && deleteResult.DeletedCount > 0;
        }
    }
}