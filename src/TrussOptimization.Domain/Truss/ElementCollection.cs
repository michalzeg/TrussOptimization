using StruCal.TrussOptimization.Domain.Elements;

namespace StruCal.TrussOptimization.Domain.Truss
{
    public class ElementCollection
    {
        public IEnumerable<TrussElement> Elements { get; }

        public ElementCollection(IEnumerable<TrussElement> elements)
        {
            Elements = elements ?? throw new ArgumentNullException(nameof(elements));
        }

        public double GetTotalLength => Elements.Sum(e => e.Length);
    }
}