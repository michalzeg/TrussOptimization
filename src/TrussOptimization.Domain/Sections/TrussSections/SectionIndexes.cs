using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Sections.TrussSections
{
    public class SectionIndexes
    {
        public static SectionIndexes FromInt(int[] table) => new SectionIndexes(table[0], table[1], table[2]);

        public SectionIndexes(int topChordIndex, int bottomChordIndex, int bracingIndex)
        {
            TopChordIndex = topChordIndex;
            BottomChordIndex = bottomChordIndex;
            BracingIndex = bracingIndex;
        }

        public int TopChordIndex { get; }
        public int BottomChordIndex { get; }
        public int BracingIndex { get; }
    }
}