using StruCal.TrussOptimization.Domain.Sections.TrussSections;
using StruCal.TrussOptimization.Domain.Structures;

namespace StruCal.TrussOptimization.Domain.FEM
{
    public class FemModelFactory
    {
        private readonly TrussSectionData _sectionProvider;
        private readonly StructureBuildDirector _structureBuilderDirector;

        public FemModelFactory(TrussSectionData sectionProvider, StructureBuildDirector structureBuilderDirector)
        {
            _sectionProvider = sectionProvider;
            _structureBuilderDirector = structureBuilderDirector;
        }

        public FemModel GetFemModel(SectionIndexes sectionIndexes)
        {
            var top = _sectionProvider.TopChord.GetSectionArea(sectionIndexes.TopChordIndex);
            var bottom = _sectionProvider.BottomChord.GetSectionArea(sectionIndexes.BottomChordIndex);
            var bracing = _sectionProvider.Bracing.GetSectionArea(sectionIndexes.BracingIndex);

            var femModel = _structureBuilderDirector.BuildFemModel(top, bottom, bracing);
            femModel.Solve();
            return femModel;
        }
    }
}