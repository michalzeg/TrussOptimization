using System;
using System.Collections.Generic;

namespace StruCal.TrussOptimization.Domain.Sections
{
    public class SectionName : IEquatable<SectionName>
    {
        public SectionName(string name)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
        }

        public string Name { get; }


        public string TypeName => Name.Split(' ')[0];
        public string Dimension => Name.Split(' ')[1];

        public override bool Equals(object obj)
        {
            var name = obj as SectionName;
            return name != null &&
                   Name == name.Name;
        }

        public bool Equals(SectionName other) => Equals(other);

        public override int GetHashCode() => 539060726 + EqualityComparer<string>.Default.GetHashCode(Name);

    }
}