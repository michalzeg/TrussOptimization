using StruCal.Shared.Extensions;
using StruCal.TrussOptimization.Domain.Calculations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class TrussElementStressResultDTO
    {
        public PointDDTO Start { get; set; }
        public PointDDTO End { get; set; }
        public double stress { get; set; }
    }

    public static class TrussOptimizationElementResultDTOExtensions
    {
        public static TrussElementStressResultDTO ToDTO(this ElementStressResult value) =>
            new TrussElementStressResultDTO
            {
                Start = value.Start.ToRoundedDTO(),
                End = value.End.ToRoundedDTO(),
                stress = value.Stress.Round()
            };
    }
}