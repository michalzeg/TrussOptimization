using StruCal.TrussOptimization.Domain.Sections.TrussSections;
using StruCal.TrussOptimization.Domain.Structures;
using StruCal.TrussOptimization.Domain.Truss;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Calculations
{
    public class CalculationModelFactory
    {
        private readonly StructureBuildDirector _structureBuildDirector;
        private readonly TrussSectionData _sectionProvider;
        private readonly TrussMaterial _trussMaterial;

        public CalculationModelFactory(StructureBuildDirector structureBuildDirector, TrussSectionData sectionProvider, TrussMaterial trussMaterial)
        {
            _structureBuildDirector = structureBuildDirector;
            _sectionProvider = sectionProvider;
            _trussMaterial = trussMaterial;
        }

        public CalculationModel GetCalculationModel(SectionIndexes sectionIndexes)
        {
            var top = _sectionProvider.TopChord.GetSectionArea(sectionIndexes.TopChordIndex);
            var bottom = _sectionProvider.BottomChord.GetSectionArea(sectionIndexes.BottomChordIndex);
            var bracing = _sectionProvider.Bracing.GetSectionArea(sectionIndexes.BracingIndex);

            var femModel = _structureBuildDirector.BuildFemModel(top, bottom, bracing);
            femModel.Solve();
            var result = CalculationModel.Create(femModel, top, bottom, bracing, _trussMaterial);
            return result;
        }
    }
}