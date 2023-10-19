using Common.Geometry;
using StruCal.TrussOptimization.Domain.Sections.SectionTypes;

namespace StruCal.TrussOptimization.Domain.Sections.Coordinates
{
    public class RectangularSectionCoordinatesCalculator : ICoordinatesCalculator
    {
        private readonly IRectangularSection _section;

        public RectangularSectionCoordinatesCalculator(IRectangularSection section)
        {
            _section = section;
        }

        public IEnumerable<PointD> CalculateCoordinates()
        {
            var coordinates = new List<PointD>();

            coordinates.Add(p1);
            coordinates.AddRange(ArcApproximation.ApproximateArc(p2, new PointD(p2.X, p3.Y)));
            coordinates.AddRange(ArcApproximation.ApproximateArc(p4, new PointD(p5.X, p4.Y)));
            coordinates.AddRange(ArcApproximation.ApproximateArc(p6, new PointD(p6.X, p7.Y)));
            coordinates.AddRange(ArcApproximation.ApproximateArc(p8, new PointD(p9.X, p8.Y)));

            coordinates.Add(p10);
            coordinates.Add(p11);
            coordinates.AddRange(ArcApproximation.ApproximateArc(p13, new PointD(p12.X, p13.Y)).Reverse());
            coordinates.AddRange(ArcApproximation.ApproximateArc(p15, new PointD(p15.X, p14.Y)).Reverse());
            coordinates.AddRange(ArcApproximation.ApproximateArc(p17, new PointD(p16.X, p17.Y)).Reverse());
            coordinates.AddRange(ArcApproximation.ApproximateArc(p19, new PointD(p19.X, p18.Y)).Reverse());
            coordinates.Add(p20);
            return coordinates;
        }

        private PointD p1 => new PointD(0, -_section.HalfH + _section.T);
        private PointD p2 => new PointD(-_section.HalfB + _section.R, -_section.HalfH + _section.T);
        private PointD p3 => new PointD(-_section.HalfB + _section.T, -_section.HalfH + _section.R);
        private PointD p4 => new PointD(-_section.HalfB + _section.T, _section.HalfH - _section.R);
        private PointD p5 => new PointD(-_section.HalfB + _section.R, _section.HalfH - _section.T);
        private PointD p6 => new PointD(_section.HalfB - _section.R, _section.HalfH - _section.T);
        private PointD p7 => new PointD(_section.HalfB - _section.T, _section.HalfH - _section.R);
        private PointD p8 => new PointD(_section.HalfB - _section.T, -_section.HalfH + _section.R);
        private PointD p9 => new PointD(_section.HalfB - _section.R, -_section.HalfH + _section.T);
        private PointD p10 => new PointD(0, -_section.HalfH + _section.T);

        private PointD p11 => new PointD(0, -_section.HalfH);
        private PointD p12 => new PointD(_section.HalfB - _section.R, -_section.HalfH);
        private PointD p13 => new PointD(_section.HalfB, -_section.HalfH + _section.R);
        private PointD p14 => new PointD(_section.HalfB, _section.HalfH - _section.R);
        private PointD p15 => new PointD(_section.HalfB - _section.R, _section.HalfH);
        private PointD p16 => new PointD(-_section.HalfB + _section.R, _section.HalfH);
        private PointD p17 => new PointD(-_section.HalfB, _section.HalfH - _section.R);
        private PointD p18 => new PointD(-_section.HalfB, -_section.HalfH + _section.R);
        private PointD p19 => new PointD(-_section.HalfB + _section.R, -_section.HalfH);
        private PointD p20 => new PointD(0, -_section.HalfH);
    }
}