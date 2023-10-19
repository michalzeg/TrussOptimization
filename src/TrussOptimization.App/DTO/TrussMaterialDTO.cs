using StruCal.TrussOptimization.Domain.Truss;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class TrussMaterialDTO
    {
        public double YieldStress { get; set; }
    }

    public static class TrussMaterialDTOExtensions
    {
        public static TrussMaterial ToTrussMaterial(this TrussMaterialDTO value) => new TrussMaterial(value.YieldStress);
    }
}