using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Sections
{
    public class SectionData
    {
        public SectionData(string typeName, IEnumerable<SectionType> types)
        {
            TypeName = typeName ?? throw new ArgumentNullException(nameof(typeName));
            Types = types ?? throw new ArgumentNullException(nameof(types));
        }

        public string TypeName { get; }
        public IEnumerable<SectionType> Types { get; }
    }
}