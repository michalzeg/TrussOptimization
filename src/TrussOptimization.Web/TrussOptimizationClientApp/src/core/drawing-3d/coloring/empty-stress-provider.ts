import { Point } from "@/core/truss/point";

export default class EmptyStressProvider {
  getStressValue(start: Point, end: Point): number {
    return 0;
  }
}
