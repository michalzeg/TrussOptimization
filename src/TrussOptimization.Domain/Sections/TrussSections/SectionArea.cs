using FEM2DCommon.ElementProperties;
using StruCal.TrussOptimization.Domain.Sections;
using StruCal.TrussOptimization.Domain.Sections.SectionTypes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Sections.TrussSections
{
    public class SectionArea : IEquatable<SectionArea>
    {
        public SectionName SectionName { get; }
        public double Area { get; }

        public SectionArea(IBaseSection section)
        {
            SectionName = new SectionName(section.Name);
            Area = section.A;
        }

        public SectionArea(SectionName name, double area)
        {
            SectionName = name ?? throw new ArgumentNullException(nameof(name));
            Area = area;
        }

        public override bool Equals(object obj)
        {
            var section = obj as SectionArea;
            return section != null &&
                   EqualityComparer<SectionName>.Default.Equals(SectionName, section.SectionName);
        }

        public override int GetHashCode() => 363513814 + EqualityComparer<SectionName>.Default.GetHashCode(SectionName);

        public bool Equals(SectionArea other) => Equals(other);
    }
}