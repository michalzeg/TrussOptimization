<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { Point } from "@/core/truss/point";
import SVG from "svg.js";
import Line from "@/shared/line";
import backgroundPattern from "./background-pattern";
import DrawingOptions from "./drawing-options";
export default abstract class VueDrawingBase extends Vue {
  protected canvas!: SVG.Doc;

  constructor(private options: DrawingOptions) {
    super();
  }

  mounted() {
    const svg = SVG(this.$el as HTMLElement);
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
  protected transferX(pointX: number) {
    const x =
      (pointX - this.getDrawingCentre().x) * this.scale +
      this.options.viewBoxWidth / 2;
    return x;
  }
  protected transferY(pointY: number) {
    const y =
      -(pointY - this.getDrawingCentre().y) * this.scale +
      this.options.viewBoxHeight / 2;
    return y;
  }

  protected transferPoint(point: Point) {
    const result = new Point(this.transferX(point.x), this.transferY(point.y));
    return result;
  }

  protected transferArray(array: number[]): number[] {
    const result = array.map((value, index) =>
      index % 2 === 0 ? this.transferX(value) : this.transferY(value)
    );
    return result;
  }

  protected transferLine(line: Line): Line {
    const result = new Line(
      this.transferPoint(line.startPoint),
      this.transferPoint(line.endPoint)
    );
    return result;
  }

  protected get scale() {
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

  protected clear(): void {
    this.canvas.clear();
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
</script>
