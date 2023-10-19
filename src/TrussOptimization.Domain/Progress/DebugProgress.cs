using StruCal.TrussOptimization.Domain.Calculations;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Progress
{
    public class DebugProgress : IProgress
    {
        public async Task Report(CalculationResult result)
        {
            await Task.CompletedTask;
            Debug.WriteLine($"TopSection::{result.TopChordResult.SectionName}  BottomSection::{result.BottomChordResult.SectionName}   Bracing::{result.BracingResult.SectionName}   Max stress::{result.AbsStress}   Total Weight::{result.TotalWeight}");
        }
    }
}