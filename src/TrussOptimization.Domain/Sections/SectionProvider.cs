using StruCal.TrussOptimization.Domain.Sections.Coordinates;

namespace StruCal.TrussOptimization.Domain.Sections
{
    public class SectionProvider
    {
        private SectionCollection _sectionCollection = SectionCollection.Instance;

        public SectionProvider()
        {
        }

        public IEnumerable<SectionData> GetSectionData()
        {
            var types = new List<SectionType>();
            foreach (var section in _sectionCollection.GetAllSections())
            {
                var calculator = CoordinatesCalculatorFactory.GetCalculator(section);
                var coordinates = calculator.CalculateCoordinates();
                var sectionType = new SectionType(new SectionName(section.Name), coordinates, section.A);
                types.Add(sectionType);
            }

            var data = types.GroupBy(e => e.SectionName.TypeName)
                 .Select(section => new SectionData(section.Key, section))
                 .ToList();
            return data;
        }
    }
}