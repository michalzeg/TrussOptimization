using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using StruCal.TrussOptimization.Domain.Sections;

namespace StruCal.TrussOptimization.Domain.Sections.TrussSections
{
    public class SectionBoundary
    {
        public SectionBoundary(SectionName minSection, SectionName maxSection)
        {
            MinSection = minSection ?? throw new ArgumentNullException(nameof(minSection));
            MaxSection = maxSection ?? throw new ArgumentNullException(nameof(maxSection));
        }

        public SectionName MinSection { get; }
        public SectionName MaxSection { get; }
    }
}