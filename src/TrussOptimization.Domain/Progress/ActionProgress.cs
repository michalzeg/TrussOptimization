using StruCal.TrussOptimization.Domain.Calculations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Progress
{
    public class ActionProgress : IProgress
    {
        private readonly Action<CalculationResult> _progress;

        public ActionProgress(Action<CalculationResult> progress)
        {
            _progress = progress;
        }

        public async Task Report(CalculationResult result)
        {
            await Task.CompletedTask;
            _progress(result);
        }
    }
}