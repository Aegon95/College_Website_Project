using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using HIT.DTO;
using HIT.Entities;
using HIT.Repositories.Interfaces;
using Mapster;
using MediatR;

namespace HIT.Features.Semesters.Commands
{
    public class CreateSemesterCommand : IRequest<SemesterDTO>
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public class CreateSemesterCommandHandler : IRequestHandler<CreateSemesterCommand, SemesterDTO>
        {
            private readonly ISemesterRepository _repository;

            public CreateSemesterCommandHandler(ISemesterRepository repository)
            {
                _repository = repository;
            }

            public async Task<SemesterDTO> Handle(CreateSemesterCommand command, CancellationToken cancellationToken)
            {
                var semester = command.Adapt<Semester>();
                var createdSem = await _repository.CreateSemester(semester);
                return createdSem.Adapt<SemesterDTO>();
            }
        }
    }
    
    public class CreateSemesterCommandValidator : AbstractValidator<CreateSemesterCommand>
    {
        public CreateSemesterCommandValidator()
        {
            RuleFor(p => p.Name).NotEmpty();
            RuleFor(p => p.Description).NotEmpty();
        }
    }
}