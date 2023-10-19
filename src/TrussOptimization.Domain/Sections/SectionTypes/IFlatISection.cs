namespace StruCal.TrussOptimization.Domain.Sections.SectionTypes
{
    public interface IFlatISection
    {
        double B { get; set; }
        double H { get; set; }
        double R1 { get; set; }
        double Tf { get; set; }
        double Tw { get; set; }
    }
}