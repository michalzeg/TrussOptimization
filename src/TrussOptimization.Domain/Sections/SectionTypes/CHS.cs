namespace StruCal.TrussOptimization.Domain.Sections.SectionTypes
{
    public class CHS : IBaseSection
    {
        public string Name { get; set; }
        public double D { get; set; }
        public double T { get; set; }
        public double A { get; set; }
        public double AL { get; set; }
        public double G { get; set; }
        public double R => D / 2;
    }
}