using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HIT.DTO;
using HIT.Entities;
using HIT.Repositories.Interfaces;
using Mapster;
using Microsoft.AspNetCore.Mvc;

namespace HIT.Controllers
{
    [ApiController]
    [Route("api/v1/semesters")]
    public class SemesterController : ControllerBase
    {
        private readonly ISemesterRepository _semesterRepository;

        public SemesterController(ISemesterRepository repository)
        {
            _semesterRepository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<SemesterDTO>>> GetSemesters()
        {
            var semesterList = await _semesterRepository.GetSemesters();
            return Ok(semesterList.Adapt<SemesterDTO[]>());
        }

        [HttpGet("{id:length(24)}", Name = "GetSemester")]
        public async Task<ActionResult<SemesterDTO>> GetSemester(string id)
        {
            var semester = await _semesterRepository.GetSemester(id);
            if (semester == null)
                return NotFound();
            return Ok(semester.Adapt<SemesterDTO>());
        }


        [HttpPost]
        public async Task<ActionResult> CreateSemester([FromBody] SemesterDTO semester)
        {
            var semesterModel = semester.Adapt<Semester>();
            var semModel = await _semesterRepository.CreateSemester(semesterModel);
            return CreatedAtRoute("GetSemester", new {id = semModel.Id}, semModel.Adapt<SemesterDTO>());
        }

        [HttpPut]
        public async Task<ActionResult> UpdateSemester([FromBody] SemesterDTO semester)
        {
            var semesterModel = semester.Adapt<Semester>();
            return Ok(await _semesterRepository.UpdateSemester(semesterModel));
        }

        [HttpDelete("{id:length(24)}")]
        public async Task<ActionResult> DeleteSemester(string id)
        {
            return Ok(await _semesterRepository.DeleteSemester(id));
        }
    }
}