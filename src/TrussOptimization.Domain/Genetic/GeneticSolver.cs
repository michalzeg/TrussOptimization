using GeneticSharp;
using StruCal.TrussOptimization.Domain.Calculations;
using StruCal.TrussOptimization.Domain.Extensions;
using StruCal.TrussOptimization.Domain.Progress;

namespace StruCal.TrussOptimization.Domain.Genetic
{
    public class GeneticSolver
    {
        private readonly GeneticAlgorithm _genetic;
        private readonly CalculationModelFactory _calculationModelFactory;
        private readonly IProgress _progress;

        public GeneticSolver(GeneticAlgorithmFactory geneticFactory, CalculationModelFactory calculationModelFactory, IProgress progress)
        {
            _genetic = geneticFactory.GetInstance();
            _calculationModelFactory = calculationModelFactory;
            _progress = progress;
        }

        public async Task<CalculationResult> Solve() => await Task.Run(() =>
            {
                _genetic.GenerationRan += (sender, e) => Calculate();

                _genetic.Start();
                while (_genetic.TaskExecutor.IsRunning)
                {
                }

                return Calculate();
            });

        private CalculationResult Calculate()
        {
            var sectionIndexes = _genetic.BestChromosome.ToSectionIndexes();

            var calculations = _calculationModelFactory.GetCalculationModel(sectionIndexes);

            var result = calculations.GetCalculationResult();
            _progress.Report(result);
            return result;
        }
    }
}