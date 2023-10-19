using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Sections.TrussSections
{
    public class TrussSectionData
    {
        public ElementSections Bracing { get; }
        public ElementSections BottomChord { get; }
        public ElementSections TopChord { get; }

        public TrussSectionData(ElementSections topChord, ElementSections bottomChord, ElementSections bracing)
        {
            Bracing = bracing;
            BottomChord = bottomChord;
            TopChord = topChord;
        }
    }
}