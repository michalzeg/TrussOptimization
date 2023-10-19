namespace StruCal.TrussOptimization.Domain.Sections.SectionTypes
{
    public class RHS : IBaseSection, IRectangularSection
    {
        public string Name { get; set; }
        public double H { get; set; }
        public double B { get; set; }
        public double T { get; set; }
        public double R { get; set; }
        public double A { get; set; }
        public double AL { get; set; }
        public double G { get; set; }

        public double HalfB => B / 2;

        public double HalfH => H / 2;
    }
}