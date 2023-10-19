using StruCal.TrussOptimization.Domain.Sections;
using StruCal.TrussOptimization.Domain.Sections.TrussSections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class SectionBoundaryDTO
    {
        public string MinSection { get; set; }
        public string MaxSection { get; set; }
    }

    public static class SectionBoundaryDTOExtension
    {
        public static SectionBoundary ToSectionBoundary(this SectionBoundaryDTO value) =>
            new SectionBoundary(new SectionName(value.MinSection), new SectionName(value.MaxSection));

        public static IEnumerable<SectionBoundary> ToSectionBoundary(this IEnumerable<SectionBoundaryDTO> value) =>
            value.Select(e => e.ToSectionBoundary()).ToList();
    }
}