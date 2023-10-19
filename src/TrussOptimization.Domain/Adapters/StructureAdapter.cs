using FEM2D.Elements.Truss;
using FEM2D.Results.Trusses;
using FEM2D.Structures;
using StruCal.TrussOptimization.Domain.Extensions;

namespace StruCal.TrussOptimization.Domain.Adapters
{
    internal class StructureAdapter : IStructure
    {
        private readonly Structure _structure;

        public static StructureAdapter Create(Structure structure) => new StructureAdapter(structure);

        private StructureAdapter(Structure structure)
        {
            _structure = structure ?? throw new ArgumentNullException(nameof(structure));
        }

        public void Solve()
        {
            _structure.Solve();
        }

        public IEnumerable<ITrussElement> GetElements() => _structure.ElementFactory.GetTrussElements().ToList();

        public TrussElementResult GetTrussResult(ITrussElement element) => _structure.Results.TrussResults.GetElementResult(element);

        public IEnumerable<ITrussElement> GetTopChordElements() => GetElements().Where(e => e.IsTopChordElement());

        public IEnumerable<ITrussElement> GetBottomChordElements() => GetElements().Where(e => e.IsBottomChordElement());

        public IEnumerable<ITrussElement> GetBracingElements() => GetElements().Where(e => e.IsBracingElement());

        public double GetTopChordWeight() => GetWeight(GetTopChordElements());

        public double GetBottomChordWeight() => GetWeight(GetBottomChordElements());

        public double GetBracingWeight() => GetWeight(GetBracingElements());

        private double GetWeight(IEnumerable<ITrussElement> elements) => elements.Select(e => e.GetWeight()).Sum();
    }
}