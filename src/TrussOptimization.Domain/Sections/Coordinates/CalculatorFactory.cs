using StruCal.TrussOptimization.Domain.Sections.SectionTypes;

namespace StruCal.TrussOptimization.Domain.Sections.Coordinates
{
    public static class CoordinatesCalculatorFactory
    {
        public static ICoordinatesCalculator GetCalculator(IBaseSection section)
        {
            ICoordinatesCalculator result = new NullCoordinatesCalculator();
            switch (section)
            {
                case IFlatISection flatSection:
                    result = new FlatISectionCoordinatesCalculator(flatSection);
                    break;

                case IPN ipn:
                    result = new IPNCoordinatesCalculator(ipn);
                    break;

                case CHS chs:
                    result = new CHSCoordinatesCalculator(chs);
                    break;

                case IRectangularSection rectangular:
                    result = new RectangularSectionCoordinatesCalculator(rectangular);
                    break;
            }
            return result;
        }
    }
}