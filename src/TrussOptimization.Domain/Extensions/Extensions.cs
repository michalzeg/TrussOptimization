using FEM2D.Elements.Truss;
using FEM2DCommon.ElementProperties;
using GeneticSharp;
using StruCal.TrussOptimization.Domain.Elements;
using StruCal.TrussOptimization.Domain.Extensions;
using StruCal.TrussOptimization.Domain.Sections.TrussSections;
using System;
using System.Linq;

namespace StruCal.TrussOptimization.Domain.Extensions
{
    public static class Extensions
    {
        public static double GetWeight(this ITrussElement element) => element.Length * element.BarProperties.Area * MaterialProperties.Density;

        public static BarProperties ToBarProperties(this SectionArea section) => new BarProperties
        {
            ModulusOfElasticity = MaterialProperties.ModulusOfElasticity,
            SectionProperties = new FEM2DCommon.Sections.SectionProperties
            {
                A = section.Area
            }
        };

        public static int ToInt(this double value) => Convert.ToInt32(Math.Round(value, 0));

        public static int[] ToInt(this double[] value) => value.Select(ToInt).ToArray();

        public static SectionIndexes ToSectionIndexes(this IChromosome chromosome) => SectionIndexes.FromInt((chromosome as FloatingPointChromosome).ToFloatingPoints().ToInt());

        public static bool IsTopChordElement(this ITrussElement element) => (ElementType)element.Tag == ElementType.TopChord;

        public static bool IsBottomChordElement(this ITrussElement element) => (ElementType)element.Tag == ElementType.BottomChord;

        public static bool IsBracingElement(this ITrussElement element) => (ElementType)element.Tag == ElementType.Bracing;
    }
}