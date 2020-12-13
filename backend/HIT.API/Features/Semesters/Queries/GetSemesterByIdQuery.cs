using System.Threading;
using System.Threading.Tasks;
using HIT.DTO;
using HIT.Repositories.Interfaces;
using Mapster;
using MediatR;

namespace HIT.Features.Semesters.Queries
{
    public class GetSemesterByIdQuery : IRequest<SemesterDTO>
    {
        public string Id { get; set; }

        public class GetProductByIdQueryHandler : IRequestHandler<GetSemesterByIdQuery, SemesterDTO>
        {
            private readonly ISemesterRepository _repository;

            public GetProductByIdQueryHandler(ISemesterRepository repository)
            {
                _repository = repository;
            }

            public async Task<SemesterDTO> Handle(GetSemesterByIdQuery query, CancellationToken cancellationToken)
            {
                var product = await _repository.GetSemester(query.Id);

                return product.Adapt<SemesterDTO>();
            }
        }
    }
}