using StruCal.Shared.Extensions;
using StruCal.TrussOptimization.Domain.Calculations;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class TrussOptimizationResultDTO
    {
        public TrussElementResultDTO TopChordResult { get; set; }
        public TrussElementResultDTO BottomChordResult { get; set; }
        public TrussElementResultDTO BracingResult { get; set; }
        public double AbsStress { get; set; }
        public double TotalWeight { get; set; }
        public double MaxStress { get; set; }
        public double MinStress { get; set; }
    }

    public static class TrussOptimizationResultDTOExtensions
    {
        public static TrussOptimizationResultDTO ToDTO(this CalculationResult value) =>
            new TrussOptimizationResultDTO
            {
                TopChordResult = value.TopChordResult.ToDTO(),
                BottomChordResult = value.BottomChordResult.ToDTO(),
                BracingResult = value.BracingResult.ToDTO(),
                AbsStress = value.AbsStress.Round(),
                TotalWeight = value.TotalWeight.Round(),
                MinStress = value.MinStess.Round(),
                MaxStress = value.MaxStess.Round(),
            };
    }
}