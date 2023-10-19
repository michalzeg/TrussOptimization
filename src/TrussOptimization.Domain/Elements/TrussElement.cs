using Common.Geometry;

namespace StruCal.TrussOptimization.Domain.Elements
{
    public class TrussElement
    {
        public PointD StartPoint { get; }
        public PointD EndPoint { get; }

        public TrussElement(PointD startPoint, PointD endPoint)
        {
            StartPoint = startPoint ?? throw new ArgumentNullException(nameof(startPoint));
            EndPoint = endPoint ?? throw new ArgumentNullException(nameof(endPoint));
        }

        public IEnumerable<PointD> Points => new[] { StartPoint, EndPoint };

        public double Length => StartPoint.DistanceTo(EndPoint);
    }
}