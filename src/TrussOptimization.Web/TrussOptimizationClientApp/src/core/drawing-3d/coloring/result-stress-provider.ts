import StressResult from "@/core/calculations/stress-result";
import CalculationsResult from "@/core/calculations/calculations-result";
import { Point, pointComparer } from "@/core/truss/point";

export default class ResultStressProvider {
  private stresses: StressResult[];

  constructor(results: CalculationsResult) {
    this.stresses = [
      ...results.bottomChordResult.elementResults,
      ...results.topChordResult.elementResults,
      ...results.bracingResult.elementResults
    ];
  }

  getStressValue(start: Point, end: Point): number {
    const value = this.stresses.filter(
      e => pointComparer(start, e.start, 0.1) && pointComparer(end, e.end, 0.1)
    );
    return value[0].stress;
  }
}
