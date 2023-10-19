import { Point } from "@/core/truss/point";
import Line from "./line";

export default class ElementLine extends Line {
  type: string;
  constructor(startPoint: Point, endPoint: Point, type: string) {
    super(startPoint, endPoint);
    this.type = type;
  }
}
