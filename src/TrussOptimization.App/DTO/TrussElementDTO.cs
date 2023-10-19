using StruCal.TrussOptimization.Domain.Elements;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class TrussElementDTO
    {
        public PointDDTO StartPoint { get; set; }
        public PointDDTO EndPoint { get; set; }
    }

    public static class TrussElementDTOExtensions
    {
        public static TrussElement ToTrussElement(this TrussElementDTO value) =>
            new TrussElement(value.StartPoint.ToPointD(), value.EndPoint.ToPointD());

        public static IEnumerable<TrussElement> ToTrussElement(this IEnumerable<TrussElementDTO> value) =>
            value.Select(e => e.ToTrussElement()).ToList();
    }
}