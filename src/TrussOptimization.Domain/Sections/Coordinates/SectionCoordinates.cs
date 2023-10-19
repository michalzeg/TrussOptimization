using Common.Geometry;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Sections.Coordinates
{
    public class SectionCoordinates
    {
        public SectionCoordinates(string name, IEnumerable<PointD> coordinates)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            Coordinates = coordinates ?? throw new ArgumentNullException(nameof(coordinates));
        }

        public string Name { get; }
        public IEnumerable<PointD> Coordinates { get; }
    }
}