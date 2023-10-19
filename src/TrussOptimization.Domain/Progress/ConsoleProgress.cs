using StruCal.TrussOptimization.Domain.Calculations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Progress
{
    public class ConsoleProgress : IProgress
    {
        public async Task Report(CalculationResult result)
        {
            await Task.CompletedTask;
            Console.WriteLine($"TopSection::{result.TopChordResult.SectionName} ({result.TopChordResult.AbsStress.ToString("F2")} - {result.TopChordResult.Weight.ToString("F2")})  BottomSection::{result.BottomChordResult.SectionName} ({result.BottomChordResult.AbsStress.ToString("F2")} - {result.BottomChordResult.Weight.ToString("F2")})   Bracing::{result.BracingResult.SectionName} ({result.BracingResult.AbsStress.ToString("F2")} - {result.BracingResult.Weight.ToString("F2")})  Max stress::{result.AbsStress.ToString("F2")}   Total Weight::{result.TotalWeight.ToString("F2")}");
        }
    }
}