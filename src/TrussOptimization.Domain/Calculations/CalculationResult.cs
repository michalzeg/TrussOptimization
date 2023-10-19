namespace StruCal.TrussOptimization.Domain.Calculations
{
    public class CalculationResult
    {
        public CalculationResult(ElementResult topChordResult, ElementResult bottomChordResult, ElementResult bracingResult)
        {
            TopChordResult = topChordResult ?? throw new ArgumentNullException(nameof(topChordResult));
            BottomChordResult = bottomChordResult ?? throw new ArgumentNullException(nameof(bottomChordResult));
            BracingResult = bracingResult ?? throw new ArgumentNullException(nameof(bracingResult));
        }

        public ElementResult TopChordResult { get; }
        public ElementResult BottomChordResult { get; }
        public ElementResult BracingResult { get; }

        public double AbsStress => ResultCollection.Max(e => e.AbsStress);
        public double TotalWeight => ResultCollection.Sum(e => e.Weight);

        public double MaxStess => ResultCollection.Select(e => e.StressResult).SelectMany(e => e).Max(e => e.Stress);
        public double MinStess => ResultCollection.Select(e => e.StressResult).SelectMany(e => e).Min(e => e.Stress);
        private IEnumerable<ElementResult> ResultCollection => new[] { TopChordResult, BottomChordResult, BracingResult };
    }
}