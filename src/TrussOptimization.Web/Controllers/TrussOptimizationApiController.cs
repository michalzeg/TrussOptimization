using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using StruCal.AppCore.TrussOptimization;
using StruCal.AppCore.TrussOptimization.DTO;
using StruCal.TrussOptimization.Hubs;

namespace StruCal.TrussOptimization.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TrussOptimizationApiController : ControllerBase
    {
        private readonly TrussOptimizationService _trussOptimizationService;
        private readonly ITrussOptimizationProgress _progressAdapter;

        public TrussOptimizationApiController(TrussOptimizationService trussOptimizationService, ITrussOptimizationProgress progressAdapter)
        {
            _trussOptimizationService = trussOptimizationService;
            _progressAdapter = progressAdapter;
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("Sections")]
        public IActionResult GetSections()
        {
            var result = _trussOptimizationService.GetSectionData();
            return Ok(result);
        }

        [AllowAnonymous]
        [HttpPost]
        [Route("Calculations/{connectionId}")]
        public async Task<IActionResult> Calculate(string connectionId, [FromBody] TrussOptimizationInputDTO input)
        {
            _progressAdapter.SetConnectionId(connectionId);
            var result = await this._trussOptimizationService.GetResult(input);
            return Ok(result);
        }
    }
}