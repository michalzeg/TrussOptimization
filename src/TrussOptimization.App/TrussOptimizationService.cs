using StruCal.AppCore.TrussOptimization.DTO;
using StruCal.AppCore.TrussOptimization.DTO.Sections;
using StruCal.TrussOptimization.Domain.Calculations;
using StruCal.TrussOptimization.Domain.Genetic;
using StruCal.TrussOptimization.Domain.Progress;
using StruCal.TrussOptimization.Domain.Sections;
using StruCal.TrussOptimization.Domain.Structures;

namespace StruCal.AppCore.TrussOptimization
{
    public class TrussOptimizationService
    {
        public static TrussOptimizationService WithConsoleProgress() => new(new ConsoleProgress());

        public static TrussOptimizationService WithDebugProgress() => new(new DebugProgress());

        public static TrussOptimizationService WithActionProgress(Action<CalculationResult> progress) => new(new ActionProgress(progress));

        private SectionProvider _sectionProvider = new();
        private readonly IProgress _progress;

        public TrussOptimizationService(IProgress progress)
        {
            this._progress = progress;
        }

        public IEnumerable<SectionDataDTO> GetSectionData() => _sectionProvider.GetSectionData().Select(e => e.ToDTO()).ToList();

        public async Task<TrussOptimizationResultDTO> GetResult(TrussOptimizationInputDTO inputDTO)
        {
            var optimizationSolver = GetSolver(inputDTO);

            var result = await optimizationSolver.Solve();
            return result.ToDTO();
        }

        private GeneticSolver GetSolver(TrussOptimizationInputDTO inputDTO)
        {
            var truss = inputDTO.ToTrussStructure();
            var material = inputDTO.ToTrussMaterial();
            var sectionProvider = inputDTO.ToSectionProvider();

            var structureBuilder = new StructureBuilder(truss);
            var director = new StructureBuildDirector(structureBuilder);
            var calculationModelFactory = new CalculationModelFactory(director, sectionProvider, material);
            var geneticAlgorithmFactory = new GeneticAlgorithmFactory(calculationModelFactory, sectionProvider);
            var optimizationSolver = new GeneticSolver(geneticAlgorithmFactory, calculationModelFactory, _progress);
            return optimizationSolver;
        }
    }
}