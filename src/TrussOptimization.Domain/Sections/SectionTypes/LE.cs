﻿namespace StruCal.TrussOptimization.Domain.Sections.SectionTypes
{
    public class LE : IBaseSection

    {
        public string Name { get; set; }
        public double B { get; set; }
        public double A { get; set; }
        public double T { get; set; }
        public double G { get; set; }
        public double R1 { get; set; }
        public double AL { get; set; }
        public double R2 { get; set; }
        public double V { get; set; }
        public double Ys { get; set; }
        public double U1 { get; set; }

        public double U2 { get; set; }
    }
}