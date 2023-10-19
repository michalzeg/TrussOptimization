using FEM2D.Structures;
using StruCal.TrussOptimization.Domain.Adapters;
using StruCal.TrussOptimization.Domain.FEM;
using StruCal.TrussOptimization.Domain.Sections.TrussSections;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Structures
{
    public class StructureBuildDirector
    {
        private readonly IStructureBuilder _structureBuilder;

        public StructureBuildDirector(IStructureBuilder structureBuilder)
        {
            _structureBuilder = structureBuilder;
        }

        public IStructure BuildStructure(SectionArea topChordSection, SectionArea bottomChordSection, SectionArea bracingSection)
        {
            _structureBuilder.Initialize();
            _structureBuilder.BuildTopChord(topChordSection);
            _structureBuilder.BuildBottomChord(bottomChordSection);
            _structureBuilder.BuildBracing(bracingSection);
            _structureBuilder.BuildDeadLoad();
            _structureBuilder.BuildExternalLoad();
            _structureBuilder.BuildSupports();
            return StructureAdapter.Create(_structureBuilder.GetResult());
        }

        public FemModel BuildFemModel(SectionArea topChordSection, SectionArea bottomChordSection, SectionArea bracingSection)
            => FemModel.FromStructure(BuildStructure(topChordSection, bottomChordSection, bracingSection));
    }
}