using StruCal.Shared.Extensions;
using StruCal.TrussOptimization.Domain.Calculations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class TrussElementResultDTO
    {
        public double Weight { get; set; }
        public double Stress { get; set; }
        public string SectionName { get; set; }
        public TrussElementStressResultDTO[] ElementResults { get; set; }
    }

    public static class TrussElementResultDTOExtensions
    {
        public static TrussElementResultDTO ToDTO(this ElementResult value) =>
            new TrussElementResultDTO
            {
                Weight = value.Weight.Round(),
                Stress = value.AbsStress.Round(),
                SectionName = value.SectionName,
                ElementResults = value.StressResult.Select(e => e.ToDTO()).ToArray()
            };
    }
}