using Common.Geometry;
using StruCal.TrussOptimization.Domain.Sections.SectionTypes;

namespace StruCal.TrussOptimization.Domain.Sections.Coordinates
{
    public class CHSCoordinatesCalculator : ICoordinatesCalculator
    {
        private readonly CHS _section;

        public CHSCoordinatesCalculator(CHS section)
        {
            _section = section;
        }

        public IEnumerable<PointD> CalculateCoordinates()
        {
            var coordinates = new List<PointD>();

            coordinates.Add(bottomInternal);
            coordinates.AddRange(ArcApproximation.ApproximateArc(bottomInternal, center));
            coordinates.Add(leftInternal);
            coordinates.AddRange(ArcApproximation.ApproximateArc(leftInternal, center));
            coordinates.Add(topInternal);
            coordinates.AddRange(ArcApproximation.ApproximateArc(topInternal, center));
            coordinates.Add(rightInternal);
            coordinates.AddRange(ArcApproximation.ApproximateArc(rightInternal, center));
            coordinates.Add(bottomInternal);

            coordinates.Add(bottomExternal);

            coordinates.AddRange(ArcApproximation.ApproximateArc(rightExternal, center).Reverse());
            coordinates.Add(rightExternal);
            coordinates.AddRange(ArcApproximation.ApproximateArc(topExternal, center).Reverse());
            coordinates.Add(topExternal);
            coordinates.AddRange(ArcApproximation.ApproximateArc(leftExternal, center).Reverse());
            coordinates.Add(leftExternal);
            coordinates.AddRange(ArcApproximation.ApproximateArc(bottomExternal, center).Reverse());
            coordinates.Add(bottomExternal);
            return coordinates;
        }

        private PointD center => new PointD(0, 0);
        private PointD bottomInternal => new PointD(0, -_section.R + _section.T);
        private PointD topInternal => new PointD(0, _section.R - _section.T);
        private PointD leftInternal => new PointD(-_section.R + _section.T, 0);
        private PointD rightInternal => new PointD(_section.R - _section.T, 0);

        private PointD bottomExternal => new PointD(0, -_section.R);
        private PointD topExternal => new PointD(0, _section.R);
        private PointD leftExternal => new PointD(-_section.R, 0);
        private PointD rightExternal => new PointD(_section.R, 0);
    }
}