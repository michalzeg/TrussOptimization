using StruCal.TrussOptimization.Domain.Sections;

namespace StruCal.AppCore.TrussOptimization.DTO.Sections
{
    public class SectionTypeDTO
    {
        public string Name { get; set; }

        public string TypeName { get; set; }
        public string Dimension { get; set; }

        public double Area { get; set; }
        public IEnumerable<PointDDTO> Coordinates { get; set; }
    }

    public static class SectionTypeDTOExtensions
    {
        public static SectionTypeDTO ToDTO(this SectionType value) =>
            new SectionTypeDTO
            {
                Name = value.SectionName.Name,
                TypeName = value.SectionName.TypeName,
                Dimension = value.SectionName.Dimension,
                Area = value.Area,
                Coordinates = value.Coordinates.Select(point => point.ToDTO()).ToList()
            };
    }
}