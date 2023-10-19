using GeneticSharp;
using StruCal.TrussOptimization.Domain.Calculations;
using StruCal.TrussOptimization.Domain.Sections.TrussSections;

namespace StruCal.TrussOptimization.Domain.Genetic
{
    public class GeneticAlgorithmFactory
    {
        private const int _maxTermination = 10;
        private const float _maxProbability = 0.5f;

        private readonly CalculationModelFactory _calculationModelFactory;
        private readonly TrussSectionData _sectionProvider;

        public GeneticAlgorithmFactory(CalculationModelFactory calculationModelFactory, TrussSectionData sectionProvider)
        {
            _calculationModelFactory = calculationModelFactory;
            _sectionProvider = sectionProvider;
        }

        public GeneticAlgorithm GetInstance()
        {
            var result = new GeneticAlgorithm(Population, Fitness, Selection, Crossover, Mutation);
            result.Termination = Termination;
            return result;
        }

        private IFitness Fitness => new TrussFitness(_calculationModelFactory);

        private ITermination Termination => new FitnessStagnationTermination(_maxTermination);

        private IMutation Mutation => new FlipBitMutation();

        private ICrossover Crossover => new UniformCrossover(_maxProbability);

        private ISelection Selection => new EliteSelection();

        private IPopulation Population => new Population(900, 1000, Chromosome);

        private IChromosome Chromosome => new TrussChromosome(_sectionProvider);
    }
}