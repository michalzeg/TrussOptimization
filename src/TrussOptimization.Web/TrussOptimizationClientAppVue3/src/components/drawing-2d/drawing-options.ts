export default class DrawingOptions {
  viewBoxHeight!: number;
  viewBoxWidth!: number;
  scaleFactorY!: number;
  scaleFactorX!: number;
  patternSize!: number;
  drawBackground!: boolean;

  static get TrussDrawingOptions(): DrawingOptions {
    const result = new DrawingOptions();

    result.viewBoxHeight = 200;
    result.viewBoxWidth = 1000;
    result.scaleFactorY = 1.2;
    result.scaleFactorX = 1.05;
    result.patternSize = 20;
    result.drawBackground = true;
    return result;
  }

  static get SectionDrawingOptions(): DrawingOptions {
    const result = new DrawingOptions();

    result.viewBoxHeight = 200;
    result.viewBoxWidth = 200;
    result.scaleFactorY = 1.2;
    result.scaleFactorX = 1.2;
    result.patternSize = 20;
    result.drawBackground = true;
    return result;
  }
}
