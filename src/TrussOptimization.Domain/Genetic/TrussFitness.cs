using GeneticSharp;
using StruCal.TrussOptimization.Domain.Calculations;
using StruCal.TrussOptimization.Domain.Extensions;

namespace StruCal.TrussOptimization.Domain.Genetic
{
    public class TrussFitness : IFitness
    {
        private readonly CalculationModelFactory _calculationModelFactory;

        public TrussFitness(CalculationModelFactory calculationModelFactory)
        {
            _calculationModelFactory = calculationModelFactory;
        }

        public double Evaluate(IChromosome chromosome)
        {
            var sectionIndexes = chromosome.ToSectionIndexes();

            var calculations = _calculationModelFactory.GetCalculationModel(sectionIndexes);

            return calculations.GetAverageUtilization();
        }
    }
}