using System.Collections.Generic;
using FEM2D.Elements.Truss;
using FEM2D.Results.Trusses;

namespace StruCal.TrussOptimization.Domain.Adapters
{
    public interface IStructure
    {
        IEnumerable<ITrussElement> GetElements();

        TrussElementResult GetTrussResult(ITrussElement element);

        IEnumerable<ITrussElement> GetTopChordElements();

        IEnumerable<ITrussElement> GetBottomChordElements();

        IEnumerable<ITrussElement> GetBracingElements();

        void Solve();

        double GetTopChordWeight();

        double GetBottomChordWeight();

        double GetBracingWeight();
    }
}