import { Point } from "@/core/truss/point";

export default class ElementPoint extends Point {
  static fromPoint(point: Point, type: string): ElementPoint {
    return new ElementPoint(point.x, point.y, type);
  }
  type: string;
  constructor(x: number, y: number, type: string) {
    super(x, y);
    this.type = type;
  }
}
