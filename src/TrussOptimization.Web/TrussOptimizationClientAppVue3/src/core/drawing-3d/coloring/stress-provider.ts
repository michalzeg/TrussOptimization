import { Point } from "@/core/truss/point";

export default interface StressProvider {
  getStressValue(start: Point, end: Point): number;
}
