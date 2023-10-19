using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Sections.SectionTypes
{
    public interface IBaseSection
    {
        string Name { get; }
        double A { get; }
    }
}