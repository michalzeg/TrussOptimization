namespace StruCal.TrussOptimization.Domain.Calculations
{
    public class ElementResult
    {
        public ElementResult(double weight, double stress, string sectionName, IEnumerable<ElementStressResult> stresses)
        {
            Weight = weight;
            AbsStress = stress;
            SectionName = sectionName;
            StressResult = stresses;
        }

        public double Weight { get; }
        public double AbsStress { get; }
        public string SectionName { get; }
        public IEnumerable<ElementStressResult> StressResult { get; }
    }
}