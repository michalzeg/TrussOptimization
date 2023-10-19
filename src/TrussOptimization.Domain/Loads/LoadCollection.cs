using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Loads
{
    public class LoadCollection
    {
        public IEnumerable<TrussLoad> Loads { get; }

        public LoadCollection(IEnumerable<TrussLoad> loads)
        {
            Loads = loads ?? throw new ArgumentNullException(nameof(loads));
        }
    }
}