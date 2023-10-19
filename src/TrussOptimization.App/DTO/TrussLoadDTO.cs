using StruCal.TrussOptimization.Domain.Loads;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class TrussLoadDTO
    {
        public double Value { get; set; }
        public PointDDTO Position { get; set; }
    }

    public static class TrussLoadDTOExtensions
    {
        public static TrussLoad ToTrussLoad(this TrussLoadDTO value) => new TrussLoad(value.Value, value.Position.ToPointD());

        public static IEnumerable<TrussLoad> ToTrussLoad(this IEnumerable<TrussLoadDTO> value) =>
            value.Select(e => e.ToTrussLoad()).ToList();
    }
}