using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Elements
{
    public static class MaterialProperties
    {
        public static double ModulusOfElasticity => 200000000d;
        public static double Density => 0.000079;

        public static double NewtonsToKilograms(double value) => value / 10d;
    }
}