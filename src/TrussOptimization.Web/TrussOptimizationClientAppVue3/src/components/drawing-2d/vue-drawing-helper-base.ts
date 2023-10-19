import { Point } from "@/core/truss/point";
import SVG from "svg.js";
import Line from "@/shared/line";
import backgroundPattern from "./background-pattern";
import DrawingOptions from "./drawing-options";
export abstract class VueDrawingHelperBase {
  public canvas!: SVG.Doc;

  constructor(private options: DrawingOptions) {
  }

  createCanvas(el: HTMLElement | null) {
    if (!el){
      console.warn("Canvas el does not exist");
      return;
    }
    const svg = SVG(el);
    this.canvas = svg.viewbox(
      0,
      0,
      this.options.viewBoxWidth,
      this.options.viewBoxHeight
    );
    this.clear();
  }

  protected abstract getDrawingHeight(): number;
  protected abstract getDrawingWidth(): number;
  protected abstract getDrawingCentre(): Point;

  public transferX(pointX: number) {
    const x =
      (pointX - this.getDrawingCentre().x) * this.scale +
      this.options.viewBoxWidth / 2;
    return x;
  }
  public transferY(pointY: number) {
    const y =
      -(pointY - this.getDrawingCentre().y) * this.scale +
      this.options.viewBoxHeight / 2;
    return y;
  }

  public transferPoint(point: Point) {
    const result = new Point(this.transferX(point.x), this.transferY(point.y));
    return result;
  }

  public transferArray(array: number[]): number[] {
    const result = array.map((value, index) =>
      index % 2 === 0 ? this.transferX(value) : this.transferY(value)
    );
    return result;
  }

  public transferLine(line: Line): Line {
    const result = new Line(
      this.transferPoint(line.startPoint),
      this.transferPoint(line.endPoint)
    );
    return result;
  }

  public get scale() {
    const scale1 =
      this.options.viewBoxHeight /
      this.getDrawingHeight() /
      this.options.scaleFactorY;
    const scale2 =
      this.options.viewBoxWidth /
      this.getDrawingWidth() /
      this.options.scaleFactorX;

    const scale = Math.min(scale1, scale2);
    return scale;
  }

  public clear(): void {
    this.canvas?.clear();
    if (this.options.drawBackground) {
      backgroundPattern(
        this.canvas,
        this.options.viewBoxWidth,
        this.options.viewBoxHeight,
        this.options.patternSize
      );
    }
  }
}

