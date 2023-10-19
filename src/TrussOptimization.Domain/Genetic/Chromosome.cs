using GeneticSharp;
using StruCal.TrussOptimization.Domain.Sections.TrussSections;

namespace StruCal.TrussOptimization.Domain.Genetic
{
    public class TrussChromosome : IChromosome
    {
        private readonly FloatingPointChromosome _chromosome;

        public TrussChromosome(TrussSectionData sectionProvider)
        {
            _chromosome = InitializeChromosome(sectionProvider);
        }

        private FloatingPointChromosome InitializeChromosome(TrussSectionData sectionProvider)
        {
            var minTopChordSectionIndex = sectionProvider.TopChord.GetStartSectionIndex();
            var minBottomChordSection = sectionProvider.BottomChord.GetStartSectionIndex();
            var minBracingSection = sectionProvider.Bracing.GetStartSectionIndex();

            var maxTopChordSectionIndex = sectionProvider.TopChord.GetEndSectionIndex();
            var maxBottomChordSection = sectionProvider.BottomChord.GetEndSectionIndex();
            var maxBracingSection = sectionProvider.Bracing.GetEndSectionIndex();

            var chromosome = new FloatingPointChromosome(new double[] { minTopChordSectionIndex, minBottomChordSection, minBracingSection },
                new double[] { maxTopChordSectionIndex, maxBottomChordSection, maxBracingSection },
                new int[] { 60, 60, 60 },
                new int[] { 0, 0, 0 });
            return chromosome;
        }

        public double? Fitness
        {
            get => _chromosome.Fitness;
            set => _chromosome.Fitness = value;
        }

        public int Length => _chromosome.Length;

        public IChromosome Clone() => _chromosome.Clone();

        public int CompareTo(IChromosome other) => _chromosome.CompareTo(other);

        public IChromosome CreateNew() => _chromosome.CreateNew();

        public Gene GenerateGene(int geneIndex) => _chromosome.GenerateGene(geneIndex);

        public Gene GetGene(int index) => _chromosome.GetGene(index);

        public Gene[] GetGenes() => _chromosome.GetGenes();

        public void ReplaceGene(int index, Gene gene) => _chromosome.ReplaceGene(index, gene);

        public void ReplaceGenes(int startIndex, Gene[] genes) => _chromosome.ReplaceGenes(startIndex, genes);

        public void Resize(int newLength) => _chromosome.Resize(newLength);
    }
}