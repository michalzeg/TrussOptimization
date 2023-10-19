using Common.Geometry;

namespace StruCal.TrussOptimization.Domain.Sections
{
    public class SectionType
    {
        public SectionType(SectionName sectionName, IEnumerable<PointD> coordinates, double area)
        {
            SectionName = sectionName ?? throw new ArgumentNullException(nameof(sectionName));
            Coordinates = coordinates ?? throw new ArgumentNullException(nameof(coordinates));
            Area = area;
        }

        public SectionName SectionName { get; }
        public double Area { get; }
        public IEnumerable<PointD> Coordinates { get; }
    }
}