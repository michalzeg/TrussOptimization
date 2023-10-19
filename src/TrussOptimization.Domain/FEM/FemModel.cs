using FEM2D.Elements.Truss;
using StruCal.TrussOptimization.Domain.Adapters;
using StruCal.TrussOptimization.Domain.Calculations;
using StruCal.TrussOptimization.Domain.Elements;

namespace StruCal.TrussOptimization.Domain.FEM
{
    public class FemModel
    {
        private readonly IStructure _structure;

        public static FemModel FromStructure(IStructure structure) => new FemModel(structure);

        public FemModel(IStructure structure)
        {
            _structure = structure;
        }

        public void Solve()
        {
            _structure.Solve();
        }

        public IEnumerable<ElementStressResult> GetTopChordStress() => CalculateStress(_structure.GetTopChordElements());

        public double GetTopChordMaxStress() => GetTopChordStress().Max(e => Math.Abs(e.Stress));

        public IEnumerable<ElementStressResult> GetBottomChordStress() => CalculateStress(_structure.GetBottomChordElements());

        public double GetBottomChordMaxStress() => GetBottomChordStress().Max(e => Math.Abs(e.Stress));

        public IEnumerable<ElementStressResult> GetBracingStress() => CalculateStress(_structure.GetBracingElements());

        public double GetBracingMaxStress() => GetBracingStress().Max(e => Math.Abs(e.Stress));

        private IEnumerable<ElementStressResult> CalculateStress(IEnumerable<ITrussElement> elements) => elements
                                .Select(element => CalculateStress(element));

        private ElementStressResult CalculateStress(ITrussElement element)
        {
            var force = _structure.GetTrussResult(element).NormalForce;
            var area = element.BarProperties.Area;
            var stress = force / area;
            var start = element.Nodes[0].Coordinates;
            var end = element.Nodes[1].Coordinates;
            return new ElementStressResult(start, end, stress);
        }

        public double GetMaxStress() => new[] { GetTopChordMaxStress(), GetBottomChordMaxStress(), GetBracingMaxStress() }.Max();

        public double GetTopChordWeight() => MaterialProperties.NewtonsToKilograms(_structure.GetTopChordWeight());

        public double GetBottomChordWeight() => MaterialProperties.NewtonsToKilograms(_structure.GetBottomChordWeight());

        public double GetBracingWeight() => MaterialProperties.NewtonsToKilograms(_structure.GetBracingWeight());

        public double GetTotalWeight() => GetTopChordWeight() + GetBottomChordWeight() + GetBracingWeight();
    }
}