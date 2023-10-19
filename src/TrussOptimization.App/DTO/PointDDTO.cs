using Common.Geometry;
using StruCal.Shared.Extensions;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class PointDDTO
    {
        public double X { get; set; }
        public double Y { get; set; }
    }

    public static class PointDDTOExtensions
    {
        public static PointD ToPointD(this PointDDTO value) => new PointD(value.X, value.Y);

        public static PointDDTO ToDTO(this PointD value) => new PointDDTO { X = value.X, Y = value.Y };

        public static PointDDTO ToRoundedDTO(this PointD value) => new PointDDTO { X = value.X.Round(), Y = value.Y.Round() };
    }
}