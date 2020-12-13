using System.Threading;
using System.Threading.Tasks;
using FluentValidation;
using HIT.Entities;
using HIT.Repositories.Interfaces;
using Mapster;
using MediatR;

namespace HIT.Features.Semesters.Commands
{
    public class UpdateSemesterCommand : IRequest<bool>
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        
        public class UpdateSemesterCommandHandler : IRequestHandler<UpdateSemesterCommand, bool>
        {
            private readonly ISemesterRepository _repository;

            public UpdateSemesterCommandHandler(ISemesterRepository repository)
            {
                _repository = repository;
            }

            public async Task<bool> Handle(UpdateSemesterCommand command, CancellationToken cancellationToken)
            {
                var semester = command.Adapt<Semester>();
                return await _repository.UpdateSemester(semester);
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