using System;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using HIT.Persistence.Repositories.Interfaces;
using MediatR;

namespace HIT.API.Features.Semesters.Commands
{
    public class DeleteSemesterCommand : IRequest
    {
        public Guid Id { get; set; }

        public class DeleteSemesterCommandHandler : IRequestHandler<DeleteSemesterCommand>
        {
            private readonly ISemesterRepository _repository;

            public DeleteSemesterCommandHandler(ISemesterRepository repository)
            {
                _repository = repository;
            }

            public async Task<Unit> Handle(DeleteSemesterCommand command, CancellationToken cancellationToken)
            {
                var semester = await _repository.GetSemester(command.Id);
                await _repository.DeleteSemester(semester);
                return Unit.Value;
            }
        }
    }

    public class DeleteSemesterCommandValidator : AbstractValidator<DeleteSemesterCommand>
    {
        public DeleteSemesterCommandValidator()
        {
            RuleFor(p => p.Id).NotEmpty();
        }
    }
}