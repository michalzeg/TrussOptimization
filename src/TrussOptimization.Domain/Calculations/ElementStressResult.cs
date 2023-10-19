using Common.Geometry;
using StruCal.TrussOptimization.Domain.Sections.Coordinates;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Calculations
{
    public class ElementStressResult
    {
        public ElementStressResult(PointD start, PointD end, double stress)
        {
            Start = start;
            End = end;
            Stress = stress;
        }

        public PointD Start { get; }
        public PointD End { get; }
        public double Stress { get; }
    }
}