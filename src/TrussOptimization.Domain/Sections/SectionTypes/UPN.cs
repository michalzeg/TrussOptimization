namespace StruCal.TrussOptimization.Domain.Sections.SectionTypes
{
    public class UPN : IBaseSection
    {
        public string Name { get; set; }
        public double H { get; set; }
        public double B { get; set; }
        public double Tf { get; set; }
        public double Tw { get; set; }
        public double R1 { get; set; }
        public double R2 { get; set; }
        public double Ys { get; set; }
        public double Ym { get; set; }
        public double D { get; set; }
        public double G { get; set; }
        public double AL { get; set; }
        public double A { get; set; }
    }
}