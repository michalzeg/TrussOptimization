using StruCal.TrussOptimization.Domain.Sections.TrussSections;
using StruCal.TrussOptimization.Domain.Truss;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class TrussOptimizationInputDTO
    {
        public TrussMaterialDTO TrussMaterial { get; set; }
        public TrussStructureDTO TrussStructure { get; set; }

        public SectionBoundaryDTO[] TopChordSections { get; set; }
        public SectionBoundaryDTO[] BottomChordSections { get; set; }
        public SectionBoundaryDTO[] BracingChordSections { get; set; }
    }

    public static class TrussOptimizationInputDTOExtensions
    {
        public static TrussStructure ToTrussStructure(this TrussOptimizationInputDTO value) =>
            value.TrussStructure.ToTrussStructure();

        public static TrussMaterial ToTrussMaterial(this TrussOptimizationInputDTO value) =>
            value.TrussMaterial.ToTrussMaterial();

        public static TrussSectionData ToSectionProvider(this TrussOptimizationInputDTO value) =>
            new TrussSectionData(value.ToTopElementSections(), value.ToBottomElementSections(), value.ToBracingElementSections());

        private static ElementSections ToTopElementSections(this TrussOptimizationInputDTO value) =>
            ElementSections.Create(value.TopChordSections.ToSectionBoundary());

        private static ElementSections ToBottomElementSections(this TrussOptimizationInputDTO value) =>
            ElementSections.Create(value.BottomChordSections.ToSectionBoundary());

        private static ElementSections ToBracingElementSections(this TrussOptimizationInputDTO value) =>
            ElementSections.Create(value.BracingChordSections.ToSectionBoundary());
    }
}