using StruCal.TrussOptimization.Domain.Elements;
using StruCal.TrussOptimization.Domain.Loads;

namespace StruCal.TrussOptimization.Domain.Truss
{
    public class TrussStructure
    {
        public ElementCollection TopChord { get; }
        public ElementCollection BottomChord { get; }
        public ElementCollection Bracing { get; }

        public LoadCollection LoadCollection { get; }
        public SupportCollection SupportCollection { get; }

        public TrussStructure(ElementCollection topChord, ElementCollection bottomChord, ElementCollection bracing, LoadCollection loadCollection, SupportCollection supportCollection)
        {
            TopChord = topChord ?? throw new ArgumentNullException(nameof(topChord));
            BottomChord = bottomChord ?? throw new ArgumentNullException(nameof(bottomChord));
            Bracing = bracing ?? throw new ArgumentNullException(nameof(bracing));
            LoadCollection = loadCollection ?? throw new ArgumentNullException(nameof(loadCollection));
            SupportCollection = supportCollection ?? throw new ArgumentNullException(nameof(supportCollection));
        }
    }
}