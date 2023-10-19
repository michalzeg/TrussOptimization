import { Point } from "@/core/truss/point";

export default class Line {
  startPoint: Point;
  endPoint: Point;

  constructor(startPoint: Point, endPoint: Point) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
  }

  getY(x: number): number {
    const a =
      (this.startPoint.y - this.endPoint.y) /
      (this.startPoint.x - this.endPoint.x);
    const b = this.startPoint.y - a * this.startPoint.x;
    const y = a * x + b;
    return y;
  }

  toPointArray(): number[] {
    return [
      this.startPoint.x,
      this.startPoint.y,
      this.endPoint.x,
      this.endPoint.y
    ];
  }
}
