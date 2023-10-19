import CalculationsResult from "@/core/calculations/calculations-result";
import { Point, pointComparer } from "@/core/truss/point";
import StressResult from "@/core/calculations/stress-result";

export default interface StressProvider {
  getStressValue(start: Point, end: Point): number;
}
