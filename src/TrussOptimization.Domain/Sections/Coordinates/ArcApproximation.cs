using BasicVector;
using Common.Geometry;

namespace StruCal.TrussOptimization.Domain.Sections.Coordinates
{
    public static class ArcApproximation
    {
        private const int _divisions = 10;
        private const double _maxAngle = Math.PI / 2;

        public static IEnumerable<PointD> ApproximateArc(PointD startPoint, PointD center)
        => ApproximateArc(startPoint.ToVector() - center.ToVector(), center.ToVector());

        private static IEnumerable<PointD> ApproximateArc(Vector startVector, Vector centerPosition)
            => Enumerable.Range(1, _divisions).Select(number => _maxAngle * number / _divisions)
                .Select(angle => startVector.Rotate(-angle))
                .Select(vector => centerPosition + vector)
                .Select(vector => vector.ToPointD())
                .ToList();

        private static Vector Rotate(this Vector vector, double angle) => VectorUtil.Rotate(vector, angle);

        private static Vector ToVector(this PointD point) => new Vector(point.X, point.Y);

        private static PointD ToPointD(this Vector vector) => new PointD(vector.X, vector.Y);
    }
}