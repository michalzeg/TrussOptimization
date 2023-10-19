using Common.Geometry;
using StruCal.TrussOptimization.Domain.Sections.Coordinates;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Elements
{
    public class SupportCollection
    {
        public SupportCollection(PointD support1, PointD support2)
        {
            Support1 = support1 ?? throw new ArgumentNullException(nameof(support1));
            Support2 = support2 ?? throw new ArgumentNullException(nameof(support2));
        }

        public PointD Support1 { get; }
        public PointD Support2 { get; }
        public IEnumerable<PointD> Supports => new[] { Support1, Support2 };
    }
}