namespace StruCal.TrussOptimization.Domain.Sections.SectionTypes
{
    public class IPE : IBaseSection, IFlatISection
    {
        public string Name { get; set; }
        public double H { get; set; }
        public double B { get; set; }
        public double Tf { get; set; }
        public double Tw { get; set; }
        public double R1 { get; set; }
        public double Ys { get; set; }
        public double D { get; set; }
        public double A { get; set; }
        public double AL { get; set; }
        public double G { get; set; }
    }
}