using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using HIT.Repositories.Interfaces;
using MediatR;

namespace HIT.Features.Semesters.Commands
{
    public class DeleteSemesterCommand : IRequest<bool>
    {
        public string Id { get; set; }

        public class DeleteSemesterCommandHandler : IRequestHandler<DeleteSemesterCommand, bool>
        {
            private readonly ISemesterRepository _repository;

            public DeleteSemesterCommandHandler(ISemesterRepository repository)
            {
                _repository = repository;
            }

            public async Task<bool> Handle(DeleteSemesterCommand command, CancellationToken cancellationToken)
            {
                return await _repository.DeleteSemester(command.Id);
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