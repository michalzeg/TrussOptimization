using Common.Geometry;
using StruCal.TrussOptimization.Domain.Sections.SectionTypes;

namespace StruCal.TrussOptimization.Domain.Sections.Coordinates
{
    public class FlatISectionCoordinatesCalculator : ICoordinatesCalculator
    {
        private readonly IFlatISection _section;

        public FlatISectionCoordinatesCalculator(IFlatISection section)
        {
            _section = section;
        }

        public IEnumerable<PointD> CalculateCoordinates()
        {
            var coordinates = new List<PointD>();

            coordinates.Add(p1);
            coordinates.Add(p2);
            coordinates.Add(p3);
            coordinates.Add(p4);
            coordinates.AddRange(ArcApproximation.ApproximateArc(p4,
                new PointD(p4.X, p5.Y)));
            coordinates.Add(p5);

            coordinates.Add(p6);
            coordinates.AddRange(ArcApproximation.ApproximateArc(p6,
                new PointD(p7.X, p6.Y)));
            coordinates.Add(p7);
            coordinates.Add(p8);
            coordinates.Add(p9);

            coordinates.Add(p10);
            coordinates.Add(p11);
            coordinates.Add(p12);
            coordinates.AddRange(ArcApproximation.ApproximateArc(p12,
                new PointD(p12.X, p13.Y)));
            coordinates.Add(p13);

            coordinates.Add(p14);
            coordinates.AddRange(ArcApproximation.ApproximateArc(p14,
                new PointD(p15.X, p14.Y)));
            coordinates.Add(p15);
            coordinates.Add(p16);
            coordinates.Add(p17);
            coordinates.Add(p1);
            return coordinates;
        }

        /// <summary>
        /// Points numered from left bottom corner
        /// </summary>
        private PointD p1 => new PointD(-_section.B / 2, -_section.H / 2);

        private PointD p2 => new PointD(_section.B / 2, -_section.H / 2);
        private PointD p3 => new PointD(_section.B / 2, -_section.H / 2 + _section.Tf);
        private PointD p4 => new PointD(_section.Tw / 2 + _section.R1, -_section.H / 2 + _section.Tf);
        private PointD p5 => new PointD(_section.Tw / 2, -_section.H / 2 + _section.Tf + _section.R1);
        private PointD p6 => new PointD(_section.Tw / 2, _section.H / 2 - _section.Tf - _section.R1);
        private PointD p7 => new PointD(_section.Tw / 2 + _section.R1, _section.H / 2 - _section.Tf);
        private PointD p8 => new PointD(_section.B / 2, _section.H / 2 - _section.Tf);
        private PointD p9 => new PointD(_section.B / 2, _section.H / 2);
        private PointD p10 => new PointD(-_section.B / 2, _section.H / 2);
        private PointD p11 => new PointD(-_section.B / 2, _section.H / 2 - _section.Tf);
        private PointD p12 => new PointD(-_section.Tw / 2 - _section.R1, _section.H / 2 - _section.Tf);
        private PointD p13 => new PointD(-_section.Tw / 2, _section.H / 2 - _section.Tf - _section.R1);
        private PointD p14 => new PointD(-_section.Tw / 2, -_section.H / 2 + _section.Tf + _section.R1);
        private PointD p15 => new PointD(-_section.Tw / 2 - _section.R1, -_section.H / 2 + _section.Tf);
        private PointD p16 => new PointD(-_section.B / 2, -_section.H / 2 + _section.Tf);

        private PointD p17 => new PointD(-_section.B / 2, -_section.H / 2);
    }
}