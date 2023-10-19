using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Truss
{
    public class TrussMaterial
    {
        public TrussMaterial()

        {
            YieldStress = 355;
        }

        public TrussMaterial(double yieldStress)
        {
            YieldStress = yieldStress;
        }

        public double YieldStress { get; }

        public bool IsGreaterThanYieldStress(double stress) => stress > YieldStress;

        public double GetUtilization(double stress) => IsGreaterThanYieldStress(stress) ? 0 : stress / YieldStress;
    }
}