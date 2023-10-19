using StruCal.TrussOptimization.Domain.Sections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.AppCore.TrussOptimization.DTO.Sections
{
    public class SectionDataDTO
    {
        public string TypeName { get; set; }
        public IEnumerable<SectionTypeDTO> Types { get; set; }
    }

    public static class SectionDataDTOExtensions
    {
        public static SectionDataDTO ToDTO(this SectionData value) =>
            new SectionDataDTO
            {
                TypeName = value.TypeName,
                Types = value.Types.Select(type => type.ToDTO()).ToList()
            };
    }
}