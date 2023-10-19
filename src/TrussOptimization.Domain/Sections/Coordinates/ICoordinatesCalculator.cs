using Common.Geometry;

namespace StruCal.TrussOptimization.Domain.Sections.Coordinates
{
    public interface ICoordinatesCalculator
    {
        IEnumerable<PointD> CalculateCoordinates();
    }
}