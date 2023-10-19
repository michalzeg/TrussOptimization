using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Common.Geometry;

namespace StruCal.TrussOptimization.Domain.Sections.Coordinates
{
    public class NullCoordinatesCalculator : ICoordinatesCalculator
    {
        public IEnumerable<PointD> CalculateCoordinates() => new List<PointD>();
    }
}