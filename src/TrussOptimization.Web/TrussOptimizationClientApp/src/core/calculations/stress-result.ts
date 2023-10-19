import { Point } from "../truss/point";

export default class StressResult {
  start!: Point;
  end!: Point;
  stress!: number;
}
