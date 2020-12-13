﻿using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using HIT.DTO;
using HIT.Repositories.Interfaces;
using Mapster;
using MediatR;

namespace HIT.Features.Semesters.Queries
{
    public class GetAllSemestersQuery : IRequest<IEnumerable<SemesterDTO>>
    {
        public class GetAllSemestersQueryHandler : IRequestHandler<GetAllSemestersQuery, IEnumerable<SemesterDTO>>
        {
            private readonly ISemesterRepository _repository;

            public GetAllSemestersQueryHandler(ISemesterRepository repository)
            {
                _repository = repository;
            }

            public async Task<IEnumerable<SemesterDTO>> Handle(GetAllSemestersQuery query,
                CancellationToken cancellationToken)
            {
                var products = await _repository.GetAllSemesters();
                return products.Adapt<SemesterDTO[]>();
            }
        }
    }
}