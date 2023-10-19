using StruCal.TrussOptimization.Domain.Calculations;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Progress
{
    public interface IProgress
    {
        Task Report(CalculationResult result);
    }
}