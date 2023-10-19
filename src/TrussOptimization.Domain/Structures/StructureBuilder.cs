using FEM2D.Elements.Truss;
using FEM2D.Nodes;
using FEM2D.Restraints;
using FEM2D.Structures;
using FEM2DCommon.ElementProperties;
using StruCal.TrussOptimization.Domain.Elements;
using StruCal.TrussOptimization.Domain.Extensions;
using StruCal.TrussOptimization.Domain.Sections.TrussSections;
using StruCal.TrussOptimization.Domain.Truss;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StruCal.TrussOptimization.Domain.Structures
{
    public class StructureBuilder : IStructureBuilder
    {
        private readonly TrussStructure _trussStructure;
        private Structure _femStructure = new();

        public StructureBuilder(TrussStructure trussStructure)
        {
            _trussStructure = trussStructure ?? throw new ArgumentNullException(nameof(trussStructure));
        }

        public Structure GetResult() => _femStructure;

        public void Initialize()
        {
            _femStructure = new Structure();
        }

        private void GenerateElements(ElementCollection elementCollection, SectionArea section, ElementType type)
        {
            foreach (var element in elementCollection.Elements)
            {
                var startPoint = element.StartPoint;
                var endPoint = element.EndPoint;
                var startNode = _femStructure.NodeFactory.Create(startPoint);
                var endNode = _femStructure.NodeFactory.Create(endPoint);

                var trussElement = _femStructure.ElementFactory.CreateTruss(startNode, endNode, section.ToBarProperties());
                trussElement.Tag = type;
            }
        }

        public void BuildTopChord(SectionArea topChordSection)
        {
            GenerateElements(_trussStructure.TopChord, topChordSection, ElementType.TopChord);
        }

        public void BuildBottomChord(SectionArea bottomChordSection)
        {
            GenerateElements(_trussStructure.BottomChord, bottomChordSection, ElementType.BottomChord);
        }

        public void BuildBracing(SectionArea bracingSection)
        {
            GenerateElements(_trussStructure.Bracing, bracingSection, ElementType.Bracing);
        }

        public void BuildDeadLoad()
        {
            foreach (var element in _femStructure.ElementFactory.GetTrussElements())
            {
                var nodalLoad = -element.GetWeight() / 2;
                _femStructure.LoadFactory.AddNodalLoad(element.Nodes[0], 0, nodalLoad);
                _femStructure.LoadFactory.AddNodalLoad(element.Nodes[1], 0, nodalLoad);
            }
        }

        public void BuildExternalLoad()
        {
            foreach (var load in _trussStructure.LoadCollection.Loads)
            {
                if (_femStructure.NodeFactory.GetNodeAt(load.Position, out INode node))
                {
                    _femStructure.LoadFactory.AddNodalLoad(node, 0, load.Value);
                }
            }
        }

        public void BuildSupports()
        {
            foreach (var support in _trussStructure.SupportCollection.Supports)
            {
                if (_femStructure.NodeFactory.GetNodeAt(support, out INode node))
                {
                    node.SetRestraint(Restraint.FixedX | Restraint.FixedY);
                }
            }
        }
    }
}