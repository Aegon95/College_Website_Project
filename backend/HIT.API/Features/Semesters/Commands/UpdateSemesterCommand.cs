using System;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using HIT.Persistence.Repositories.Interfaces;
using MediatR;

namespace HIT.API.Features.Semesters.Commands
{
    public class UpdateSemesterCommand : IRequest
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public class UpdateSemesterCommandHandler : IRequestHandler<UpdateSemesterCommand>
        {
            private readonly ISemesterRepository _repository;

            public UpdateSemesterCommandHandler(ISemesterRepository repository)
            {
                _repository = repository;
            }

            public async Task<Unit> Handle(UpdateSemesterCommand command, CancellationToken cancellationToken)
            {
                var semester = await _repository.GetSemester(command.Id);
                semester.Name = command.Name;
                semester.Description = command.Description;
                await _repository.UpdateSemester(semester);
                return Unit.Value;
            }
        }
    }

    public class UpdateSemesterCommandValidator : AbstractValidator<UpdateSemesterCommand>
    {
        public UpdateSemesterCommandValidator()
        {
            RuleFor(p => p.Id).NotEmpty();
            RuleFor(p => p.Name).NotEmpty();
            RuleFor(p => p.Description).NotEmpty();
        }
    }
}