using StruCal.TrussOptimization.Domain.Elements;
using StruCal.TrussOptimization.Domain.Loads;
using StruCal.TrussOptimization.Domain.Truss;

namespace StruCal.AppCore.TrussOptimization.DTO
{
    public class TrussStructureDTO
    {
        public IEnumerable<TrussElementDTO> TopChord { get; set; }
        public IEnumerable<TrussElementDTO> BottomChord { get; set; }
        public IEnumerable<TrussElementDTO> Bracing { get; set; }

        public IEnumerable<TrussLoadDTO> Loads { get; set; }
        public PointDDTO Support1 { get; set; }
        public PointDDTO Support2 { get; set; }
    }

    public static class TrussStructureDTOExtensions
    {
        public static TrussStructure ToTrussStructure(this TrussStructureDTO value) =>
            new TrussStructure(
                new ElementCollection(value.TopChord.ToTrussElement()),
                new ElementCollection(value.BottomChord.ToTrussElement()),
                new ElementCollection(value.Bracing.ToTrussElement()),
                new LoadCollection(value.Loads.ToTrussLoad()),
                new SupportCollection(value.Support1.ToPointD(), value.Support2.ToPointD())
                );
    }
}