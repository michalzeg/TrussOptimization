namespace StruCal.TrussOptimization.Domain.Sections.SectionTypes
{
    public interface IRectangularSection
    {
        double B { get; }
        double H { get; }
        double R { get; }
        double T { get; }
        double HalfB { get; }
        double HalfH { get; }
    }
}