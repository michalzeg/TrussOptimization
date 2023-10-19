using FEM2D.Structures;
using StruCal.TrussOptimization.Domain.Sections.TrussSections;

namespace StruCal.TrussOptimization.Domain.Structures
{
    public interface IStructureBuilder
    {
        void Initialize();

        void BuildTopChord(SectionArea topChordSection);

        void BuildBottomChord(SectionArea bottomChordSection);

        void BuildBracing(SectionArea bracingSection);

        void BuildDeadLoad();

        void BuildExternalLoad();

        void BuildSupports();

        Structure GetResult();
    }
}