using StruCal.Shared.Extensions;
using StruCal.TrussOptimization.Domain.FEM;
using StruCal.TrussOptimization.Domain.Sections.TrussSections;
using StruCal.TrussOptimization.Domain.Truss;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Calculations
{
    public class CalculationModel
    {
        private readonly SectionArea _bracingSection;
        private readonly SectionArea _bottomChordSection;
        private readonly SectionArea _topChordSection;
        private readonly FemModel _femModel;
        private readonly TrussMaterial _trussMaterial;

        public static CalculationModel Create(FemModel femModel, SectionArea topChordSection, SectionArea bottomChordSection, SectionArea bracingSection, TrussMaterial trussMaterial) => new CalculationModel(femModel, topChordSection, bottomChordSection, bracingSection, trussMaterial);

        public CalculationModel(FemModel femModel, SectionArea topChordSection, SectionArea bottomChordSection, SectionArea bracingSection, TrussMaterial trussMaterial)
        {
            _bracingSection = bracingSection;
            _bottomChordSection = bottomChordSection;
            _topChordSection = topChordSection;
            _femModel = femModel;
            _trussMaterial = trussMaterial;
        }

        public double GetAverageUtilization()
        {
            var topChordUtilization = _trussMaterial.GetUtilization(_femModel.GetTopChordMaxStress());
            var bottomChordUtilization = _trussMaterial.GetUtilization(_femModel.GetBottomChordMaxStress());
            var bracingUtilization = _trussMaterial.GetUtilization(_femModel.GetBracingMaxStress());

            var overloadedStructure = (topChordUtilization * bottomChordUtilization * bracingUtilization).IsApproximatelyEqualToZero();
            if (overloadedStructure)
            {
                return -1;
            }

            var topWeight = _femModel.GetTopChordWeight();
            var bottomWeight = _femModel.GetBottomChordWeight();
            var bracingWeight = _femModel.GetBracingWeight();

            var factoredWeight = topWeight / topChordUtilization + bracingWeight / bracingUtilization + bottomWeight / bottomChordUtilization;

            var avg = 1 / factoredWeight;
            return avg;
        }

        private ElementResult TopChordResult => new ElementResult(_femModel.GetTopChordWeight(), _femModel.GetTopChordMaxStress(), _topChordSection.SectionName.Name, _femModel.GetTopChordStress());
        private ElementResult BottomChordResult => new ElementResult(_femModel.GetBottomChordWeight(), _femModel.GetBottomChordMaxStress(), _bottomChordSection.SectionName.Name, _femModel.GetBottomChordStress());
        private ElementResult BracingResult => new ElementResult(_femModel.GetBracingWeight(), _femModel.GetBracingMaxStress(), _bracingSection.SectionName.Name, _femModel.GetBracingStress());

        public CalculationResult GetCalculationResult() => new CalculationResult(TopChordResult, BottomChordResult, BracingResult);
    }
}