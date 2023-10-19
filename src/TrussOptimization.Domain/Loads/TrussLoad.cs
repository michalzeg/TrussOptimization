using Common.Geometry;
using StruCal.TrussOptimization.Domain.Sections.Coordinates;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Loads
{
    public class TrussLoad
    {
        public TrussLoad(double value, PointD position)
        {
            Value = value;
            Position = position ?? throw new ArgumentNullException(nameof(position));
        }

        public double Value { get; }
        public PointD Position { get; }
    }
}