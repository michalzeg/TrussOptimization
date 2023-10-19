namespace StruCal.TrussOptimization.Domain.Sections.TrussSections
{
    public class ElementSections
    {
        private Dictionary<SectionName, SectionArea> _nameSectionMap;
        private Dictionary<int, SectionArea> _indexSectionMap;
        private readonly IEnumerable<SectionBoundary> _sectionBoundary;
        private readonly SectionCollection _sectionData;

        public static ElementSections Create(IEnumerable<SectionBoundary> sectionBoundaries) => new ElementSections(SectionCollection.Instance, sectionBoundaries);

        private ElementSections(SectionCollection sectionData, IEnumerable<SectionBoundary> sectionBoundary)
        {
            _sectionBoundary = sectionBoundary;
            _sectionData = sectionData;
            InitializeNameSectionMap();
        }

        public SectionArea GetStartSection(SectionName sectionName) => _nameSectionMap[sectionName];

        public int GetStartSectionIndex() => _indexSectionMap.First().Key;

        public int GetEndSectionIndex() => _indexSectionMap.Last().Key;

        public SectionArea GetSectionArea(int index) => _indexSectionMap[index];

        private void InitializeNameSectionMap()
        {
            _nameSectionMap = _sectionBoundary
                               .Select(extreme => _sectionData.GetChunk(extreme.MinSection.Name, extreme.MaxSection.Name))
                               .SelectMany(e => e)
                               .OrderBy(e => e.A)
                               .ToDictionary(e => new SectionName(e.Name), f => new SectionArea(f));

            _indexSectionMap = _nameSectionMap
                                       .Select((value, index) => new { value, index })
                                       .ToDictionary(e => e.index, f => f.value.Value);
        }
    }
}