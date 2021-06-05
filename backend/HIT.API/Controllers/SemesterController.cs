using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using HIT.API.DTO;
using HIT.API.Features.Semesters.Commands;
using HIT.API.Features.Semesters.Queries;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace HIT.API.Controllers
{
    [ApiController]
    [Route("api/v1/semesters")]
    public class SemesterController : ControllerBase
    {
        public SemesterController(ILogger<SemesterController> logger)
        {
            _logger = logger;
        }
        
        private IMediator _mediator;

        private readonly ILogger<SemesterController> _logger;
        protected IMediator Mediator => _mediator ??= HttpContext.RequestServices.GetService<IMediator>();


        [HttpGet]
        public async Task<ActionResult<IEnumerable<SemesterDTO>>> GetSemesters()
        {
            _logger.LogInformation("entering get all semesters");
            return Ok(await Mediator.Send(new GetAllSemestersQuery()));
        }

        [HttpGet("{id:guid}", Name = nameof(GetSemester))]
        public async Task<ActionResult> GetSemester(Guid id)
        {
            return Ok(await Mediator.Send(new GetSemesterByIdQuery {Id = id}));
        }


        [HttpPost]
        public async Task<ActionResult> CreateSemester([FromBody] CreateSemesterCommand command)
        {
            var semester = await Mediator.Send(command);
            return CreatedAtRoute(nameof(GetSemester), new {id = semester.Id.ToString()}, semester);
        }

        [HttpPut("{id:guid}")]
        public async Task<ActionResult> UpdateSemester(Guid id, [FromBody] UpdateSemesterCommand command)
        {
            if (id != command.Id) return BadRequest();
            return Ok(await Mediator.Send(command));
        }

        [HttpDelete("{id:guid}")]
        public async Task<ActionResult> DeleteSemester(Guid id)
        {
            return Ok(await Mediator.Send(new DeleteSemesterCommand {Id = id}));
        }
    }
}